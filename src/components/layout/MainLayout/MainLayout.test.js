import React from 'react';
import { shallow } from 'enzyme';
import  { MainLayout } from './MainLayout';

describe('MainLayout', () => {
  it('should render without crashing', function () {
    shallow(<MainLayout />);
  });
})
