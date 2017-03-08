import 'react-native';
import React from 'react';
import Article from '../js/components/article.js';
import { BASE_URL } from '../js/config/axios';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import store from './../js/config/store';
import { Provider } from 'react-redux';

describe('Component Article', () => {
  const testProps = {
    title: 'Test title',
    body: '<img src="/unb-gama/imagens/imagens.png" />',
    date: '2016/04/04 10:10:10',
    authorName: 'Test Author'
  }


  it('renders correctly', () => {
    const tree = renderer.create(
      <Article {...testProps} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('parses images src with internal links', () => {
    const image = '<img src="/some/site/image.png"/>';
    const article = new Article(testProps);

    const parsedImage = article.parseImageLink(image);

    expect(parsedImage).toBe(`<img src="${BASE_URL}/some/site/image.png"/>`);
  });

  it ('wont change the src of external pages', () => {
    const image = '<img src="https://some.other.site/imagens.png />';
    const article = new Article(testProps);

    const parsedImage = article.parseImageLink(image);

    expect(parsedImage).toBe(image);
  });
});
