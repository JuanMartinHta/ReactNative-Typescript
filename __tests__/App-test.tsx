import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import Home from '../src/view/layouts/app/Home/Home';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  renderer.create(<Home />);
});
