import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from './Homepage';
import { Provider } from 'react-redux';
import { store} from '../../../redux/store';

describe('Homepage', () => {
  it('should render without crashing', function () {
    shallow(<Provider store={ store }> <Homepage /> </Provider>);
  });
});
