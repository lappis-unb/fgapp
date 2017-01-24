import 'react-native';
import React from 'react';
import OpenEmail from '../components/open-email.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <OpenEmail/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
