import { connect } from 'react-redux';
import ArticleService from '../services/article-service';
import FgaNews  from '../components/fga-news';
import {
  getLastPageFromHeaderLink,
  getFirstImageFromBody
} from '../services/util';

const mapStateToProps = (state) => ({
  articles: state.articles.data,
  page: state.articles.page,
  lastPage: state.articles.lastPage,
  error: state.articles.error
});

const mapDispatchToProps = (dispatch) => ({

  fetchArticles(page, currentLastPage) {
    if (page >= currentLastPage) {
      return;
    }

    ArticleService.get(
      ArticleService.defaults.parentID,
      page
    )
    .then((response) => {
      const articles = response.data.articles.map(article => ({
        id: article.id,
        body: article.body,
        title: article.title,
        created_at: article.created_at,
        authorName: article.setting ? "por " + article.setting.author_name : ""
      }));

      const lastPage = getLastPageFromHeaderLink(response.headers.link);

      dispatch({
        type: 'ADD_ARTICLES',
        articles,
        lastPage
      });
    })
    .catch(error => {
      dispatch({
        type: 'SET_ARTICLES_ERROR',
        error: true
      })
    });
  },

  updatePage(nextPage) {
    dispatch({
      type: 'UPDATE_ARTICLES_PAGE',
      page: nextPage
    })
  },

  updateError(error) {
    dispatch({
      type: 'SET_ARTICLES_ERROR',
      error
    })
  }

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
