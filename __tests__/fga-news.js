import 'react-native';
import React from 'react';
import FgaNews from '../js/components/fga-news.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import store from './../js/config/store';
import { Provider } from 'react-redux';

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <FgaNews
        page={1}
        articles={[]}
        fetchArticles={() => []}
      />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
