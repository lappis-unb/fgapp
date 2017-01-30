import 'react-native';
import React from 'react';
import Article from '../js/components/article.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import store from './../js/config/store';
import { Provider } from 'react-redux';

it('renders correctly', () => {
  const tree = renderer.create(
    <Article
      title={"lala"}
      body={"<img src=\"/unb-gama/imagens/imagens.png\" />"}
      date={"2016/04/04 10:10:10"}
      authorName={"vitor"}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('parses correctly', () => {
  let article = new Article({title: "lala", body: "<img src=\"/unb-gama/imagens/imagens.png\" />", date: "2016/04/04 10:10:10", authorName: "vitor"});

  expect(article.state.parsedBody).toBe("<img src=\"https://fga.unb.br/unb-gama/imagens/imagens.png\" />");
});
