import React from 'react';
import { render } from 'enzyme';

import LoadingIndicator from '../index';

describe('<LoadingIndicator />', () => {
  it('should render a loading indicator', () => {
    const renderedComponent = render(<LoadingIndicator />);
    // find all child divs
    expect(renderedComponent.find('section').length).toBe(1);
  });
});
