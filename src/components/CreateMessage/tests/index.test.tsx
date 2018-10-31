import * as Enzyme from 'enzyme';
import * as React from 'react';
import * as enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import CreateMessage from '../CreateMessage';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const props = {
  value: 'test value'
};

const renderedComponent = Enzyme.shallow(<CreateMessage {...props} />);

describe('<CreateMessage />', () => {
  it('Expect to have unit tests specified', () => {
    expect(true).toEqual(false);
  });

  it('should have a value', () => {
    expect(renderedComponent.prop('value')).toEqual(props.value);
  });
});
