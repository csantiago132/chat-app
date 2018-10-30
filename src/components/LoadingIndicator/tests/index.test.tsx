import * as Enzyme from 'enzyme';
import * as React from 'react';
import * as enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import LoadingIndicator from '../LoadingIndicator';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const renderedComponent = Enzyme.shallow(<LoadingIndicator />);

describe('<LoadingIndicator />', () => {
  it('should render a section', () => {
    expect(renderedComponent.find('section').length).toBe(1);
  });
});
