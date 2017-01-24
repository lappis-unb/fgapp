import 'react-native';
import React from 'react';
import FgaNews from '../js/components/fga-news.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <FgaNews
      page={1}
      articles={[]}
      fetchArticles={() => []}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
