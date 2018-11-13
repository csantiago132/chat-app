/**
 * ChatRooms container
 *
 * Handles most of the app, controls all messages and chatrooms coming from
 * firebase
 */

import * as React from "react";
import * as Immutable from "immutable";
import RoomsList from "../../components/RoomsList/RoomsList";
import MessageList from "../../components/MessageList/MessageList";
import CreateMessage from "../../components/CreateMessage/CreateMessage";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ModalContainer from "../ModalContainer/ModalContainer";
import Styled from "./styles/Styled";
import slackChatLogoPng from "../../assets/branding/slack-chat-logo.png";

interface IAppState {
  createNewRoomTitle: string;
  data: Immutable.Map<string, any>;
  firebaseRooms: {
    child: (args: string) => any,
    off: (args: string, args2: MethodDecorator) => void,
    on: (args: string, args2: MethodDecorator) => object,
    push: (args: object) => void,
    remove: (args: object) => void
  };
  firebaseMessages: {
    child: (args: string) => any,
    off: (args: string, args2: MethodDecorator) => void,
    on: (args: string, args2: MethodDecorator) => object,
    push: (args: object) => void
  };
  newMessage: string;
}

interface IAppProps {
  avatar: string;
  displayImage: string;
  displayName: string;
  firebase: any;
  logout: any;
  userUniqueID: string;
}

class Rooms extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      createNewRoomTitle: String(""),
      data: Immutable.Map({
        activeRoom: Immutable.Map({
          key: String(""),
          name: String("")
        }),
        messages: Immutable.List(),
        modalIsOpen: false,
        modalType: String(""),
        rooms: Immutable.List()
      }),
      firebaseMessages: this.props.firebase.database().ref("messages"),
      firebaseRooms: this.props.firebase.database().ref("rooms"),
      newMessage: String("")
    };
  }

  componentDidMount() {
    // connects to firebase as event listeners
    const { firebaseRooms, firebaseMessages } = this.state;
    firebaseRooms.on("child_added", this.getChatRoomsFromFirebase);
    firebaseRooms.on("child_removed", this.disconnectChatRoomsFromFirebase);
    firebaseMessages.on("child_added", this.getMessagesFromFirebase);
    firebaseMessages.on("child_removed", this.disconnectMessagesFromFirebase);
  }

  componentDidUpdate() {
    this.handleMessageContainer(this.scrollToEndOfMessages);
  }

  componentWillUnmount() {
    const { firebaseRooms, firebaseMessages } = this.state;
    // disconnect firebase from the app, funky stuff happens (state gets all funky) if removed
    firebaseRooms.off("child_added", this.getChatRoomsFromFirebase);
    firebaseRooms.off("child_removed", this.disconnectChatRoomsFromFirebase);
    firebaseMessages.off("child_added", this.getMessagesFromFirebase);
    firebaseMessages.off("child_removed", this.disconnectMessagesFromFirebase);
  }

  // sets a room to active from the list of rooms given by firebase
  setActiveRoom(chatRoomDetails: any) {
    const { data } = this.state;

    this.setState({
      data: data
        .setIn(["activeRoom", "name"], chatRoomDetails.name)
        .setIn(["activeRoom", "key"], chatRoomDetails.key)
    });
  }

  // sets name of chat room to be created
  handleChatRoomName = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      createNewRoomTitle: String(`${event.currentTarget.value}`)
    });
  };

  // reads chatroom information from firebase and sets state
  getChatRoomsFromFirebase = (snapshot: any) => {
    const { data } = this.state;
    const room = snapshot.val();
    room.key = snapshot.key;

    this.setState({
      data: data.update("rooms", (list) => list.push(room))
    });
  };

  // reads messages information from firebase and sets state
  getMessagesFromFirebase = (snapshot: any) => {
    const { data } = this.state;
    const chatMessage = snapshot.val();
    chatMessage.key = snapshot.key;

    this.setState({
      data: data.update("messages", (list) => list.push(chatMessage))
    });
  };

  // stops reading messages from firebase when componentWillUnmount
  disconnectMessagesFromFirebase = (snapshot: any) => {
    const { data } = this.state;

    this.setState({
      data: data.update("messages", (list) =>
        list.filter((message: { key: string }) => message.key !== snapshot.key)
      )
    });
  };

  // stops reading chatrooms from firebase when componentWillUnmount
  disconnectChatRoomsFromFirebase = (snapshot: any) => {
    const { data } = this.state;
    // resets the local available chat rooms
    // after we delete it
    this.setState({
      data: data.update("rooms", (list) =>
        list.filter((room: { key: string }) => room.key !== snapshot.key)
      )
    });
  };

  // deletes chatroom data based on id from firebase
  handleRemoveRoomFromFirebase = (event: React.FormEvent, chatRoom: object) => {
    const { firebaseRooms } = this.state;
    event.preventDefault();
    firebaseRooms.child(`${chatRoom}`).remove();
  };

  // deletes message data based on id  from firebase
  handleRemoveMessageFromFirebase = (
    event: React.FormEvent<HTMLElement>,
    messageName: string
  ) => {
    const { firebaseMessages } = this.state;
    event.preventDefault();
    firebaseMessages.child(`${messageName}`).remove();
  };

  // scrolls to the end of the container when a chatroom is selected
  scrollToEndOfMessages = (span: HTMLSpanElement | any) => {
    this.scrollToEndOfMessages = span;
    this.handleMessageContainer(this.scrollToEndOfMessages);
  };

  // sets the element to where the app should scroll to
  // scrolls to a span that is set after the messages
  handleMessageContainer = (element: HTMLSpanElement | any) => {
    setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth" });
    }, 10);
  };

  handleSendMessageToFirebase = (event: React.FormEvent<HTMLElement>) => {
    const { data, firebaseMessages, newMessage } = this.state;
    const { displayImage, displayName, firebase, userUniqueID } = this.props;

    event.preventDefault();

    // avoid sending empty message to firebase
    const isEnabled = newMessage.length > 0;

    // message information sent to firebase
    const sendNewMessage = {
      avatar: displayImage,
      content: newMessage,
      roomId: data.getIn(["activeRoom", "key"]),
      sentAt: firebase.database.ServerValue.TIMESTAMP,
      userId: userUniqueID,
      username: displayName
    };

    if (isEnabled) {
      // resets input field to be empty again
      this.setState(
        {
          newMessage: String("")
          // call back used to push the message to firebase after state changes
        },
        (): void => firebaseMessages.push(sendNewMessage)
      );
    }
  };

  newChatRoom = () => {
    const { data } = this.state;

    this.setState({
      data: data.set("modalIsOpen", true).set("modalType", "newChatRoom")
    });
  };

  seeChatRoomDetails = () => {
    const { data } = this.state;

    this.setState({
      data: data.set("modalIsOpen", true).set("modalType", "chatRoomDetails")
    });
  };

  showModal = () => {
    const { data } = this.state;

    this.setState({
      data: data.set("modalIsOpen", true)
    });
  };

  hideModal = () => {
    const { data } = this.state;

    this.setState({
      data: data.set("modalIsOpen", false).set("modalType", String(""))
    });
  };

  // sets state to the new message that is about to be sent to firebase
  handleMessageContent = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ newMessage: String(`${event.currentTarget.value}`) });
  };

  // sends chat room information to firebase
  sendChatRoomDataToFirebase = (event: React.KeyboardEvent<HTMLElement>) => {
    const { data, firebaseRooms, createNewRoomTitle } = this.state;
    const { displayName, userUniqueID } = this.props;
    event.preventDefault();

    const chatRoomDetails = {
      createdBy: displayName,
      name: createNewRoomTitle,
      userId: userUniqueID
    };
    // send info to firebase if we have all data
    if (createNewRoomTitle.length > 0) {
      // chatroom information sent to firebase
      this.setState(
        {
          createNewRoomTitle: String(""),
          data: data.set("modalIsOpen", false).set("modalType", String(""))
        },
        (): void => firebaseRooms.push(chatRoomDetails)
      );
    }
  };

  /**
   * Renders below are to break down the UI/app to make it easier to
   * refactor and update. Each functionality is abstracted to it's own function
   *
   */

  // only renders the chatrooms based on logic coming from state
  renderChatRooms() {
    const { data } = this.state;
    const { userUniqueID } = this.props;

    return (
      <React.Fragment>
        {data
          .get("rooms")
          .map(
            (room: {
              key: any,
              displayName: string,
              name: string,
              userId: string
            }) => (
              <RoomsList
                key={room.key}
                // props
                createdBy={room.displayName}
                currentUserId={userUniqueID}
                deleteRoom={(event: any) => {
                  this.handleRemoveRoomFromFirebase(event, room.key);
                }}
                name={room.name}
                setActiveRoom={() => {
                  this.setActiveRoom(room);
                  this.handleMessageContainer(this.scrollToEndOfMessages);
                }}
                userId={room.userId}
              />
            )
          )}
      </React.Fragment>
    );
  }

  // only renders the renderCreateChatRooms based on logic coming from state

  // only renders the active room and the messages associated with it based on what
  // active room is set on the state
  renderActiveRoomsAndMessages() {
    const { data } = this.state;
    const { userUniqueID } = this.props;
    const currentRoomId = data.getIn(["activeRoom", "key"]);

    return (
      // if we have a current room, render it with the messages
      <React.Fragment>
        {!currentRoomId ? (
          // TODO: create a component
          <h2>Please select a room!</h2>
        ) : (
          // renders all messages associated with the roomID
          data
            .get("messages")
            .map(
              (message: {
                roomId: string,
                avatar: string,
                content: string,
                key: string,
                sentAt: number,
                userId: string,
                username: string
              }) => [
                currentRoomId === message.roomId && (
                  <MessageList
                    key={message.roomId + 1}
                    // props
                    avatar={message.avatar}
                    currentUser={userUniqueID}
                    content={message.content}
                    deleteMessage={(event: any): void => {
                      this.handleRemoveMessageFromFirebase(event, message.key);
                    }}
                    id={message.roomId + 1}
                    sentAt={message.sentAt}
                    userId={message.userId}
                    username={message.username}
                  />
                )
              ]
            )
        )}
      </React.Fragment>
    );
  }

  // main render function of the app
  render() {
    const { data, newMessage, createNewRoomTitle } = this.state;

    return (
      <Styled.Main as="main">
        <Styled.Aside as="aside" xs={3} md={2}>
          {/*
          * Left-side of the application
          *
          * Renders all chatrooms and sets the state to see
          * which one should the user see
          */}
          <Styled.BrandImage
            src={slackChatLogoPng}
            alt={`branding of the application`}
          />
          <Styled.SpanChatRoomHeader>
            <h1>Chat Rooms</h1>
            <Styled.ButtonInformation
              className="ion-plus-round"
              onClick={this.newChatRoom}
            />
          </Styled.SpanChatRoomHeader>
          <article>{this.renderChatRooms()}</article>
        </Styled.Aside>

        <Styled.MainSection as="section" xs={8} md={8}>
          {/*
            * Main container
            *
            * displays all messages that match the selected chatroom
            * 
          */}
          <Styled.Header>
            <Styled.SpanChatRoomHeader>
              {data.getIn(["activeRoom", "name"]).length > 0 ? (
                <React.Fragment>
                  <h1>{data.getIn(["activeRoom", "name"])}</h1>,
                  <Styled.ButtonInformation
                    className="ion-information"
                    onClick={this.seeChatRoomDetails}
                  />
                </React.Fragment>
              ) : (
                <h1>No Room Selected</h1>
              )}
            </Styled.SpanChatRoomHeader>
          </Styled.Header>
          <Styled.Section as="section">
            {this.renderActiveRoomsAndMessages()}
            <span
              ref={(span: any) => {
                this.scrollToEndOfMessages = span;
              }}
            />
          </Styled.Section>

          {/* input field: sends messages to firebase*/}
          {data.getIn(["activeRoom", "key"]).length > 0 && (
            <CreateMessage
              // TODO: rethink on how to incorporate without Lambda
              // Lambdas are forbidden in JSX attributes due to their
              // rendering performance impact
              handleChange={(event) => this.handleMessageContent(event)}
              handleSubmit={(event) => this.handleSendMessageToFirebase(event)}
              placeholder={`Send a message to '${data.getIn([
                "activeRoom",
                "name"
              ])}'`}
              value={newMessage}
            />
          )}
        </Styled.MainSection>

        {/*
          *
          * Right-side of the application
          *
          * holds the current user logged in
          */}
        <Styled.AsideInfo as="aside" xs={3} md={2}>
          <ProfileCard {...this.props} />
        </Styled.AsideInfo>

        {/* modals used on this page */}
        <ModalContainer
          modalState={data.get("modalIsOpen")}
          modalType={data.get("modalType")}
          handleCloseModal={this.hideModal}
          handleChatRoomName={(event: any) => this.handleChatRoomName(event)}
          handleChatRoomSubmit={(event: any) =>
            this.sendChatRoomDataToFirebase(event)
          }
          chatRoomNameValue={createNewRoomTitle}
          chatRoomDetails={data.getIn(["activeRoom", "name"])}
        />
      </Styled.Main>
    );
  }
}

export default Rooms;
