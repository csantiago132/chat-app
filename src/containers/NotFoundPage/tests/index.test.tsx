import * as Enzyme from 'enzyme';
import * as React from 'react';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import NotFound from '../NotFound';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const renderedComponent = Enzyme.shallow(<NotFound />);

describe('<NotFound />', () => {
  it('should render the Page Not Found text', () => {
    expect(renderedComponent.contains(<h1>404 Page Template</h1>)).toEqual(
      true
    );
  });
});
