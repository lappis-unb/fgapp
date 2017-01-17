import 'react-native';
import React from 'react';
import MoreMenu from '../components/more-menu.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <MoreMenu/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

