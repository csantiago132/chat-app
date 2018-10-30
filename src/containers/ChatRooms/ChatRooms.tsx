import * as React from 'react';
import * as Immutable from 'immutable';
import RoomsList from '../../components/RoomsList/RoomsList';
import MessageList from '../../components/MessageList/MessageList';
import CreateChatRoom from '../../components/CreateChatRoom/CreateChatRoom';
import CreateMessage from '../../components/CreateMessage/CreateMessage';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import './ChatRooms.scss';

interface IAppState {
  data: Immutable.Map<string, any>;
  firebaseRooms?: any;
  firebaseMessages?: any;
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
      data: Immutable.Map({
        activeRoom: Immutable.Map({
          key: String(''),
          name: String('')
        }),
        createNewRoomTitle: String(''),
        messages: Immutable.List(),
        newMessage: String(''),
        rooms: Immutable.List()
      }),
      firebaseMessages: this.props.firebase.database().ref('messages'),
      firebaseRooms: this.props.firebase.database().ref('rooms')
    };

    this.getMessagesFromFirebase = this.getMessagesFromFirebase.bind(this);
    this.disconnectMessagesFromFirebase = this.disconnectMessagesFromFirebase.bind(
      this
    );
    this.getChatRoomsFromFirebase = this.getChatRoomsFromFirebase.bind(this);
    this.disconnectChatRoomsFromFirebase = this.disconnectChatRoomsFromFirebase.bind(
      this
    );
    this.messagesEnd = this.messagesEnd.bind(this);
    this.handleSendMessage = this.handleSendMessage.bind(this);
  }

  componentDidMount() {
    const { firebaseRooms, firebaseMessages } = this.state;
    
    firebaseRooms.on('child_added', this.getChatRoomsFromFirebase);
    firebaseRooms.on('child_removed', this.disconnectChatRoomsFromFirebase);
    firebaseMessages.on('child_added', this.getMessagesFromFirebase);
    firebaseMessages.on('child_removed', this.disconnectMessagesFromFirebase);
  }

  componentDidUpdate() {
    this.handleMessageContainer(this.messagesEnd);
  }

  componentWillUnmount() {
    const { firebaseRooms, firebaseMessages } = this.state;
    // to avoid error: Can only update a mounted or mounting component...
    firebaseRooms.off('child_added', this.getChatRoomsFromFirebase);
    firebaseMessages.off('child_added', this.getMessagesFromFirebase);
  }

  setActiveRoom(chatRoomDetails: any) {
    const { data } = this.state;

    this.setState({
      data: data
        .setIn(['activeRoom', 'name'], chatRoomDetails.name)
        .setIn(['activeRoom', 'key'], chatRoomDetails.key)
    });
  }

  setChatRoomName(event: any) {
    const { data } = this.state;

    this.setState({
      data: data.set('createNewRoomTitle', String(event.target.value))
    });
  }

  getChatRoomsFromFirebase(snapshot: any) {
    const { data } = this.state;
    const room = snapshot.val();
    room.key = snapshot.key;

    this.setState({
      data: data.update('rooms', (list: any) => list.push(room))
    });

    if (data.get('rooms').takeLast() !== room) {
      // to get the latest chat room added
      setTimeout(() => {
        this.setState({
          data: data.update('rooms', (list: any) => list.push(room))
        });
      });
    }
  }

  getMessagesFromFirebase(snapshot: any) {
    const { data } = this.state;
    const chatMessage = snapshot.val();
    chatMessage.key = snapshot.key;

    this.setState({
      data: data.update('messages', (list: any) => list.push(chatMessage))
    });

    if (data.get('messages').takeLast() !== chatMessage) {
      // to get the latest chat room added
      setTimeout(() => {
        this.setState({
          data: data.update('messages', (list: any) => list.push(chatMessage))
        });
      });
    }
  }

  disconnectMessagesFromFirebase(snapshot: any) {
    const { data } = this.state;

    this.setState({
      data: data.update('messages', (list: any) =>
        list.filter((message: any) => message.key !== snapshot.key)
      )
    });
  }

  disconnectChatRoomsFromFirebase(snapshot: any) {
    const { data } = this.state;
    // resets the local available chat rooms
    // after we delete it
    this.setState({
      data: data.update('rooms', (list: any) =>
        list.filter((room: any) => room.key !== snapshot.key)
      )
    });
  }

  removeRoom(event: any, chatRoom: any) {
    const { firebaseRooms } = this.state;
    event.preventDefault();
    firebaseRooms.child(`${chatRoom}`).remove();
  }

  removeMessage(event: any, messageName: any) {
    const { firebaseMessages } = this.state;
    event.preventDefault();
    firebaseMessages.child(`${messageName}`).remove();
  }

  messagesEnd(span: any) {
    this.messagesEnd = span;
    this.handleMessageContainer(this.messagesEnd);
  }

  handleMessageContainer(element: any) {
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth' });
    }, 10);
  }

  handleSendMessage(event: any) {
    const { data, firebaseMessages } = this.state;
    const { displayImage, displayName, userUniqueID, firebase } = this.props;
    event.preventDefault();
    const isEnabled = data.get('newMessage').length > 0;

    const sendNewMessage = {
      avatar: displayImage,
      content: data.get('newMessage'),
      roomId: data.getIn(['activeRoom', 'key']),
      sentAt: firebase.database.ServerValue.TIMESTAMP,
      userId: userUniqueID,
      username: displayName
    };

    if (isEnabled) {
      // resets input field to be empty again
      this.setState({
        data: data.set('newMessage', String(''))
      }, (): void => firebaseMessages.push(sendNewMessage)); 
    };
  }

  handleMessageContent(event: any) {
    const { data } = this.state;

    this.setState({
      data: data.set('newMessage', String(event.target.value))
    });
  }

  sendChatRoomDataToFirebase(event: any) {
    // sends chat room information to firebase
    const { data, firebaseRooms } = this.state;
    const { displayName, userUniqueID } = this.props;
    event.preventDefault();

    const chatRoomDetails = {
      // TODO: add more useful information to improve UX
      createdBy: displayName,
      name: data.get('createNewRoomTitle'),
      userId: userUniqueID
    };

    this.setState({
      /* clears state and sends chat room data to Firebase */
      data: data.set('createNewRoomTitle', String(''))
    }, (): void => firebaseRooms.push(chatRoomDetails));
  }

  renderChatRooms() {
    const { data } = this.state;
    const { userUniqueID } = this.props;

    return (
      <React.Fragment>
        {data.get('rooms').map((room: any) => (
          <RoomsList
            key={room.key}
            name={room.name}
            createdBy={room.displayName}
            userId={room.userId}
            currentUserId={userUniqueID}
            setActiveRoom={() => {
              this.setActiveRoom(room);
              //this.handleMessageContainer();
            }}
            deleteRoom={(event: any) => {
              this.removeRoom(event, room.key);
            }}
          />
        ))}
      </React.Fragment>
    );
  }

  renderCreateChatRooms() {
    /* input field to create a chat room */
    const { data } = this.state;
    // if text field is empty, disable the button
    const isEnabled = data.get('createNewRoomTitle').size > 0;
    return (
      <CreateChatRoom
        disabled={!isEnabled}
        handleChange={(event: React.FormEvent<HTMLSelectElement>) => this.setChatRoomName(event)}
        handleSubmit={(event: React.FormEvent<HTMLSelectElement>) => this.sendChatRoomDataToFirebase(event)}
        value={`${data.get('createNewRoomTitle')}`}
      />
    );
  }

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
                userId={message.userId}
                currentUser={userUniqueID}
                username={message.username}
                content={message.content}
                sentAt={message.sentAt}
                avatar={message.avatar}
                deleteMessage={(event: any) => {
                  this.removeMessage(event, message.key);
                }}
              />
            )
          ])
        )}
      </React.Fragment>
    );
  }

  render() {
    const { data } = this.state;

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
                this.messagesEnd = span;
              }}
            />
          </section>
          {data.getIn(['activeRoom', 'key']).length > 0 && (
            <CreateMessage
              value={data.get('newMessage')}
              placeholder={`Send a message to '${data.getIn([
                'activeRoom',
                'name'
              ])}'`}
              handleSubmit={(event: any) => this.handleSendMessage(event)}
              handleChange={(event: any) => this.handleMessageContent(event)}
            />
          )}
        </section>
      </main>
    );
  }
}

export default Rooms;
