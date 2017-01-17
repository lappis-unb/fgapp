import 'react-native';
import React from 'react';
import FgaNews from '../components/fga-news.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <FgaNews/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
