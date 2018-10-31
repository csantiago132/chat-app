/**
 * ChatRooms container
 * 
 * Handles most of the app, controls all messages and chatrooms coming from
 * firebase
 */

import * as React from 'react';
import * as Immutable from 'immutable';
import RoomsList from '../../components/RoomsList/RoomsList';
import MessageList from '../../components/MessageList/MessageList';
import CreateChatRoom from '../../components/CreateChatRoom/CreateChatRoom';
import CreateMessage from '../../components/CreateMessage/CreateMessage';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import './ChatRooms.scss';

interface IAppState {
  createNewRoomTitle: string;
  data: Immutable.Map<string, any>;
  firebaseRooms?: any;
  firebaseMessages?: any;
  newMessage: string;
}

interface IAppProps {
  avatar?: string;
  displayImage?: string;
  displayName?: string;
  firebase?: any,
  name?: string;
  logout?: any;
  userUniqueID?: string;
}

class Rooms extends React.Component<IAppProps,IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      createNewRoomTitle: String(''),
      data: Immutable.Map({
        rooms: Immutable.List(),
        messages: Immutable.List(),
        activeRoom: Immutable.Map({
          name: String(''),
          key: String(''),
        }),
      }),
      firebaseMessages: this.props.firebase.database().ref('messages'),
      firebaseRooms: this.props.firebase.database().ref('rooms'),
      newMessage: String(''),
    };
  }

  componentDidMount() {
    // connects to firebase as event listeners
    const { firebaseRooms, firebaseMessages } = this.state;
    firebaseRooms.on('child_added', this.getChatRoomsFromFirebase);
    firebaseRooms.on('child_removed', this.disconnectChatRoomsFromFirebase);
    firebaseMessages.on('child_added', this.getMessagesFromFirebase);
    firebaseMessages.on('child_removed', this.disconnectMessagesFromFirebase);
  }

  componentDidUpdate() {
    this.handleMessageContainer(this.scrollToEndOfMessages);
  }

  componentWillUnmount() {
    const { firebaseRooms, firebaseMessages } = this.state;
    // disconnect firebase from the app, funky stuff happens (state gets all funky) if removed
    firebaseRooms.off('child_added', this.getChatRoomsFromFirebase);
    firebaseRooms.off('child_removed', this.disconnectChatRoomsFromFirebase);
    firebaseMessages.off('child_added', this.getMessagesFromFirebase);
    firebaseMessages.off('child_removed', this.disconnectMessagesFromFirebase);
  }

  // sets a room to active from the list of rooms given by firebase
  setActiveRoom(chatRoomDetails: any) {
    const { data } = this.state;

    this.setState({
      data: data
        .setIn(['activeRoom', 'name'], chatRoomDetails.name)
        .setIn(['activeRoom', 'key'], chatRoomDetails.key),
    });
  }

  // sets name of chat room to be created 
  private handleChatRoomName = (event: any) => {
    this.setState({ createNewRoomTitle: String(`${event.target.value}`) });
  }

  // reads chatroom information from firebase and sets state 
  private getChatRoomsFromFirebase = (snapshot: any) => {
    const { data } = this.state;
    const room = snapshot.val();
    room.key = snapshot.key;

    this.setState({
      data: data.update('rooms', (list) => list.push(room)),
    });
  }

  // reads messages information from firebase and sets state 
  private getMessagesFromFirebase = (snapshot: any) => {
    const { data } = this.state;
    const chatMessage = snapshot.val();
    chatMessage.key = snapshot.key;

    this.setState({
      data: data.update('messages', (list) => list.push(chatMessage)),
    });
  }

  // stops reading messages from firebase when componentWillUnmount
  private disconnectMessagesFromFirebase = (snapshot: any) => {
    const { data } = this.state;

    this.setState({
      data: data.update('messages', (list) =>
        list.filter((message: any) => message.key !== snapshot.key)
      ),
    });
  }

  // stops reading chatrooms from firebase when componentWillUnmount
  private disconnectChatRoomsFromFirebase = (snapshot: any) => {
    const { data } = this.state;
    // resets the local available chat rooms
    // after we delete it
    this.setState({
      data: data.update('rooms', (list) =>
        list.filter((room: any) => room.key !== snapshot.key)
      ),
    });
  }

  // deletes chatroom data based on id from firebase
  private handleRemoveRoomFromFirebase = (event: any, chatRoom: any) => {
    const { firebaseRooms } = this.state;
    event.preventDefault();
    firebaseRooms.child(`${chatRoom}`).remove();
  }

  // deletes message data based on id  from firebase
  private handleRemoveMessageFromFirebase = (event: any, messageName: any) => {
    const { firebaseMessages } = this.state;
    event.preventDefault();
    firebaseMessages.child(`${messageName}`).remove();
  }

  // scrolls to the end of the container when a chatroom is selected
  private scrollToEndOfMessages = (span: any) => {
    this.scrollToEndOfMessages = span;
    this.handleMessageContainer(this.scrollToEndOfMessages);
  }

  // sets the element to where the app should scroll to
  // scrolls to a span that is set after the messages
  private handleMessageContainer = (element: any) => {
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth' });
    }, 10);
  }

  private handleSendMessageToFirebase = (event: any) => {
    const { data, firebaseMessages, newMessage } = this.state;
    const { displayImage, displayName, firebase, userUniqueID } = this.props;
    
    event.preventDefault();
    
    // avoid sending empty message to firebase
    const isEnabled = newMessage.length > 0;

    // message information sent to firebase
    const sendNewMessage = {
      avatar: displayImage,
      content: newMessage,
      roomId: data.getIn(['activeRoom', 'key']),
      sentAt: firebase.database.ServerValue.TIMESTAMP,
      userId: userUniqueID,
      username: displayName
    };

    if (isEnabled) {
      // resets input field to be empty again
      this.setState({
        newMessage: String('')
        // call back used to push the message to firebase after state changes 
      }, (): void => firebaseMessages.push(sendNewMessage)); 
    };
  }

  // sets state to the new message that is about to be sent to firebase
  private handleMessageContent = (event: any) => {
    this.setState({ newMessage: String(`${event.target.value}`) });
  }

  private sendChatRoomDataToFirebase = (event: any) => {
    // sends chat room information to firebase
    const { firebaseRooms, createNewRoomTitle } = this.state;
    const { displayName, userUniqueID } = this.props;
    event.preventDefault();

    // chatroom information sent to firebase
    const chatRoomDetails = {
      // TODO: add more useful information to improve UX
      createdBy: displayName,
      name: createNewRoomTitle,
      userId: userUniqueID
    };

    this.setState({
      /* clears state and sends chat room data to Firebase */
      createNewRoomTitle: String('')
      // call back used to push the chatroom to firebase after state changes 
    }, (): void => firebaseRooms.push(chatRoomDetails));
  }

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
        {data.get('rooms').map((room: any) => (
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
        ))}
      </React.Fragment>
    );
  }

  // only renders the renderCreateChatRooms based on logic coming from state
  renderCreateChatRooms() {
    /* input field to create a chat room */
    const { createNewRoomTitle } = this.state;
    // if text field is empty, disable the button
    const isEnabled = createNewRoomTitle.length > 0;
    return (
      <CreateChatRoom
        disabled={!isEnabled}
        // TODO: rethink on how to incorporate without Lambda
        // Lambdas are forbidden in JSX attributes due to their rendering performance impact
        handleChange={(event: React.FormEvent<HTMLSelectElement>) => this.handleChatRoomName(event)}
        handleSubmit={(event: React.FormEvent<HTMLSelectElement>) => this.sendChatRoomDataToFirebase(event)}
        value={createNewRoomTitle}
      />
    );
  }

  // only renders the active room and the messages associated with it based on what
  // active room is set on the state
  renderActiveRoomsAndMessages() {
    const { data } = this.state;
    const { userUniqueID } = this.props;
    const currentRoomId = data.getIn(['activeRoom', 'key']);

    return (
      // if we have a current room, render it with the messages
      <React.Fragment>
        {!currentRoomId ? (
          // TODO: create a component
          <h2>Please select a room!</h2>
        ) : (
          // renders all messages associated with the roomID
          data.get('messages').map((message: any) => [
            currentRoomId === message.roomId && (
              <MessageList
                key={message.roomId + 1}
                // props
                avatar={message.avatar}
                currentUser={userUniqueID}
                content={message.content}
                deleteMessage={(event: any) => {
                  this.handleRemoveMessageFromFirebase(event, message.key);
                }}
                id={message.roomId + 1}
                sentAt={message.sentAt}
                userId={message.userId}
                username={message.username}
              />
            )
          ])
        )}
      </React.Fragment>
    );
  }
  
  // main render function of the app
  render() {
    const { data, newMessage } = this.state;

    return (
      <main className="chatrooms-container" role="main">
        <aside className="chatrooms-container__side-container">
          <ProfileCard {...this.props} />
          <article>{this.renderCreateChatRooms()}</article>
          <article>{this.renderChatRooms()}</article>
        </aside>
        <section className="chatrooms-container__main-container">
          <header className="chatrooms-container__chatroom-header">
            <h2>{data.getIn(['activeRoom', 'name'])}</h2>
          </header>
          <section className="message-container">
            {this.renderActiveRoomsAndMessages()}
            <span
              ref={(span: any) => {
                this.scrollToEndOfMessages = span;
              }}
            />
          </section>
          {data.getIn(['activeRoom', 'key']).length > 0 && (
            <CreateMessage
              // TODO: rethink on how to incorporate without Lambda
              // Lambdas are forbidden in JSX attributes due to their 
              // rendering performance impact
              handleChange={(event: any) => this.handleMessageContent(event)}
              handleSubmit={(event: any) => this.handleSendMessageToFirebase(event)}
              placeholder={`Send a message to '${data.getIn([
                'activeRoom',
                'name'
              ])}'`}
              value={newMessage}
            />
          )}
        </section>
      </main>
    );
  }
}

export default Rooms;
