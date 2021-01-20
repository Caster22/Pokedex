import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from './Homepage';

describe('Homepage', () => {
  it('should render without crashing', function () {
    shallow(<Homepage />);
  });
});
