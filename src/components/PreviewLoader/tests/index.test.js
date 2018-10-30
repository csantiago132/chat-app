import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { List } from 'react-content-loader';
import PreviewLoader from '../PreviewLoader';

Enzyme.configure({ adapter: new Adapter() });

const renderedComponent = shallow(<PreviewLoader />);

describe('<PreviewLoader />', () => {
  it('Renders a content preview', () => {
    expect(renderedComponent.contains(<List />)).toBe(true);
  });
});
