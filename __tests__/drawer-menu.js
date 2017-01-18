import 'react-native';
import React from 'react';
import DrawerMenu from '../components/drawer-menu.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <DrawerMenu/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
