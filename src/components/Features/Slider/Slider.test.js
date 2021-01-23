import React from 'react';
import { shallow } from 'enzyme';
import { Slider } from './Slider';

const mockData = {
  other: {
    dream_world: {
      front_default: 'link',
    },
  },
};

describe('Slider', () => {
  it('should render without crashing', function () {
    shallow( <Slider images={mockData} />);
  });
});
