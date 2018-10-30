import * as React from 'react';
import * as Immutable from 'immutable';
import RoomsList from '../../components/RoomsList';
import MessageList from '../../components/MessageList';
import CreateChatRoom from '../../components/CreateChatRoom';
import CreateMessage from '../../components/CreateMessage';
import ProfileCard from '../../components/ProfileCard';
import './ChatRooms.scss';

interface IAppState {
  data: Immutable.Map<string, any>;
  firebaseRooms: any;
  firebaseMessages: any;
}

interface IAppProps {
  avatar: string;
  displayImage: string;
  displayName: string;
  name: string;
  logout: any;
  userUniqueID: string;
}

interface IntrinsicAttributes {
  firebase: any;
}

class Rooms extends React.Component<
  IAppProps & IntrinsicAttributes,
  IAppState
> {
  constructor(props: any) {
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
    setTimeout(() => {
      firebaseRooms.on('child_added', this.getChatRoomsFromFirebase);
      firebaseRooms.on('child_removed', this.disconnectChatRoomsFromFirebase);
      firebaseMessages.on('child_added', this.getMessagesFromFirebase);
      firebaseMessages.on('child_removed', this.disconnectMessagesFromFirebase);
    });
  }

  componentDidUpdate() {
    this.handleMessageContainer();
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
    this.handleMessageContainer();
  }

  handleMessageContainer() {
    setTimeout(() => {
      this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
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
      setTimeout(
        (): void => {
          // resets input field to be empty again
          this.setState({
            data: data.set('newMessage', String(''))
          });
          firebaseMessages.push(sendNewMessage);
        }
      );
    }
  }

  handleMessageContent(event: any) {
    const { data } = this.state;

    this.setState({
      data: data.set('newMessage', String(event.target.value))
    });
  }

  sendChatRoomDataToFirebase(event: any) {
    const { data, firebaseRooms } = this.state;
    const { displayName, userUniqueID } = this.props;
    event.preventDefault();

    const chatRoomDetails = {
      createdBy: displayName,
      name: data.get('createNewRoomTitle'),
      userId: userUniqueID
    };

    setTimeout(() => {
      this.setState({
        data: data.set('createNewRoomTitle', String(''))
      });
      firebaseRooms.push(chatRoomDetails);
    });
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
              this.handleMessageContainer();
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
    const { data } = this.state;
    // if text field is empty, disable the button
    const isEnabled = data.get('createNewRoomTitle').length > 0;
    return (
      <CreateChatRoom
        value={data.get('createNewRoomTitle')}
        handleChange={(event: any) => this.setChatRoomName(event)}
        handleSubmit={(event: any) => this.sendChatRoomDataToFirebase(event)}
        disabled={!isEnabled}
      />
    );
  }

  renderActiveRoomsAndMessages() {
    const { data } = this.state;
    const { userUniqueID } = this.props;
    const currentRoomId = data.getIn(['activeRoom', 'key']);

    return (
      <React.Fragment>
        {!currentRoomId ? (
          // TODO: create a component
          <h2>Please select a room!</h2>
        ) : (
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
