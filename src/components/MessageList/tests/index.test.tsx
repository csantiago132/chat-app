import * as Enzyme from 'enzyme';
import * as React from 'react';
import * as enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import MessageList from '../MessageList';
Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const props = {
  avatar: 'path/to/avatar.png',
  content: 'This is a test',
  currentUser: 'Current Username',
  deleteMessage: () => 'any',
  key: 'guestUserKey',
  sentAt: 3,
  userId: 'guestUserId',
  username: 'Guest Username'
};

const renderedComponent = Enzyme.shallow(<MessageList {...props} />);

describe('<MessageList />', () => {
  it('Expect to have unit tests specified', () => {
    expect(true).toEqual(true);
  });

  it('should render an avatar img', () => {
    expect(renderedComponent.prop('sentAt')).toEqual(props.sentAt);
  });
});
