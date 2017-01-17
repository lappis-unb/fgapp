import 'react-native';
import React from 'react';
import MainMenu from '../components/main-menu.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <MainMenu/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

