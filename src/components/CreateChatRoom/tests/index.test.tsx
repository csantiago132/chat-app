import * as Enzyme from 'enzyme';
import * as React from 'react';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import CreateChatRoom from '../CreateChatRoom';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const props = {
  value: 'test chat room'
};

const renderedComponent = Enzyme.shallow(<CreateChatRoom {...props} />);

describe('<CreateChatRoom />', () => {
  it('Expect to have unit tests specified', () => {
    expect(true).toEqual(true);
  });

  it('should have a named value', () => {
    expect(renderedComponent.prop('value')).toEqual(props.value);
  });
});
