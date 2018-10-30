import React from 'react';
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import RoomsList from '../../components/RoomsList/Loadable';
import MessageList from '../../components/MessageList/Loadable';
import CreateChatRoom from '../../components/CreateChatRoom/Loadable';
import CreateMessage from '../../components/CreateMessage/Loadable';
import ProfileCard from '../../components/ProfileCard/Loadable';
import './ChatRooms.scss';

class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Map({
        createNewRoomTitle: String(''),
        rooms: List(),
        messages: List(),
        activeRoom: Map({
          name: String(''),
          key: String(''),
        }),
      }),
      newMessage: String(''),
      createNewRoomTitle: String(''),
      firebaseRooms: this.props.firebase.database().ref('rooms'),
      firebaseMessages: this.props.firebase.database().ref('messages'),
    };
    // set Firebase chatrooms
    this.roomsRef = this.state.firebaseRooms;
    this.messagesRef = this.state.firebaseMessages;
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
    this.roomsRef.on('child_added', this.getChatRoomsFromFirebase);
    this.roomsRef.on('child_removed', this.disconnectChatRoomsFromFirebase);
    this.messagesRef.on('child_added', this.getMessagesFromFirebase);
    this.messagesRef.on('child_removed', this.disconnectMessagesFromFirebase);
  }

  componentDidUpdate() {
    this.handleMessageContainer();
  }

  componentWillUnmount() {
    // to avoid error: Can only update a mounted or mounting component...
    this.roomsRef.off('child_added', this.getChatRoomsFromFirebase);
    this.roomsRef.off('child_removed', this.disconnectChatRoomsFromFirebase);
    this.messagesRef.off('child_added', this.getMessagesFromFirebase);
    this.messagesRef.off('child_removed', this.disconnectMessagesFromFirebase);
  }

  setActiveRoom(chatRoomDetails) {
    const { data } = this.state;

    this.setState({
      data: data
        .setIn(['activeRoom', 'name'], chatRoomDetails.name)
        .setIn(['activeRoom', 'key'], chatRoomDetails.key),
    });
  }

  setChatRoomName(event) {
    this.setState({ createNewRoomTitle: String(`${event.target.value}`) });
  }

  getChatRoomsFromFirebase(snapshot) {
    const { data } = this.state;
    const room = snapshot.val();
    room.key = snapshot.key;

    this.setState({
      data: data.update('rooms', (list) => list.push(room)),
    });
  }

  getMessagesFromFirebase(snapshot) {
    const { data } = this.state;
    const chatMessage = snapshot.val();
    chatMessage.key = snapshot.key;

    this.setState({
      data: data.update('messages', (list) => list.push(chatMessage)),
    });
  }

  disconnectMessagesFromFirebase(snapshot) {
    const { data } = this.state;

    this.setState({
      data: data.update('messages', (list) =>
        list.filter((message) => message.key !== snapshot.key)
      ),
    });
  }

  disconnectChatRoomsFromFirebase(snapshot) {
    const { data } = this.state;
    // resets the local available chat rooms
    // after we delete it
    this.setState({
      data: data.update('rooms', (list) =>
        list.filter((room) => room.key !== snapshot.key)
      ),
    });
  }

  removeRoom(event, chatRoom) {
    event.preventDefault();
    this.roomsRef.child(`${chatRoom}`).remove();
  }

  removeMessage(event, messageName) {
    event.preventDefault();
    this.messagesRef.child(`${messageName}`).remove();
  }

  messagesEnd(span) {
    this.messagesEnd = span;
    this.handleMessageContainer();
  }

  handleMessageContainer() {
    setTimeout(() => {
      this.messagesEnd.scrollIntoView({ behavior: 'instant' });
    }, 10);
  }

  handleSendMessage(event) {
    event.preventDefault();
    const { data, newMessage } = this.state;
    const { displayImage, displayName, userUniqueID, firebase } = this.props;

    const getMessageContent = newMessage.length;
    const sendNewMessage = {
      avatar: displayImage,
      username: displayName,
      content: newMessage,
      roomId: data.getIn(['activeRoom', 'key']),
      userId: userUniqueID,
      sentAt: firebase.database.ServerValue.TIMESTAMP,
    };

    if (getMessageContent >= 1) {
      this.messagesRef.push(sendNewMessage);
    }
    this.setState({ newMessage: '' });
  }

  handleMessageContent(event) {
    this.setState({ newMessage: String(`${event.target.value}`) });
  }

  sendChatRoomDataToFirebase(event) {
    event.preventDefault();
    const { createNewRoomTitle } = this.state;
    const { displayName, userUniqueID } = this.props;

    const getChatRoomName = createNewRoomTitle.length;

    const chatRoomDetails = {
      name: createNewRoomTitle,
      createdBy: displayName,
      userId: userUniqueID,
    };

    if (getChatRoomName >= 1) {
      this.roomsRef.push(chatRoomDetails);
    }
    this.setState({ createNewRoomTitle: String('') });
    event.reset();
  }

  renderChatRooms() {
    const { data } = this.state;
    const { userUniqueID } = this.props;

    return (
      <React.Fragment>
        {data.get('rooms').map((room) => (
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
            deleteRoom={(event) => {
              this.removeRoom(event, room.key);
            }}
          />
        ))}
      </React.Fragment>
    );
  }

  renderCreateChatRooms() {
    const { createNewRoomTitle } = this.state;
    // if text field is empty, disable the button
    const isEnabled = createNewRoomTitle.length > 0;

    return (
      <CreateChatRoom
        value={createNewRoomTitle}
        handleChange={(event) => this.setChatRoomName(event)}
        handleSubmit={(event) => this.sendChatRoomDataToFirebase(event)}
        disabled={!isEnabled}
      />
    );
  }

  renderActiveRoomsAndMessages() {
    const { data } = this.state;
    const { userUniqueID } = this.props;
    let currentRoomId = data.getIn(['activeRoom', 'key']);

    return (
      <React.Fragment>
        {!currentRoomId ? (
          // TODO: create a component
          <h2>Please select a room!</h2>
        ) : (
          data.get('messages').map((message) => [
            currentRoomId === message.roomId && (
              <MessageList
                key={message.roomId + 1}
                userId={message.userId}
                currentUser={userUniqueID}
                username={message.username}
                content={message.content}
                sentAt={message.sentAt}
                avatar={message.avatar}
                deleteMessage={(event) => {
                  this.removeMessage(event, message.key);
                }}
              />
            ),
          ])
        )}
      </React.Fragment>
    );
  }

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
              ref={(span) => {
                this.messagesEnd = span;
              }}
            />
          </section>
          {data.getIn(['activeRoom', 'key']).length > 0 && (
            <CreateMessage
              value={newMessage}
              placeholder={`Send a message to '${data.getIn([
                'activeRoom',
                'name',
              ])}'`}
              handleSubmit={(event) => this.handleSendMessage(event)}
              handleChange={(event) => this.handleMessageContent(event)}
            />
          )}
        </section>
      </main>
    );
  }
}

Rooms.propTypes = {
  firebase: PropTypes.object,
  name: PropTypes.string,
  avatar: PropTypes.string,
  displayImage: PropTypes.string,
  displayName: PropTypes.string,
};

export default Rooms;
