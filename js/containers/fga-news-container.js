import { connect } from 'react-redux';
import ArticleService from '../services/article-service';
import FgaNews  from '../components/fga-news';

const mapStateToProps = (state) => ({
  articles: state.articles.data,
  page: state.articles.page,
  lastPage: state.articles.lastPage,
  error: state.articles.error
});

const mapDispatchToProps = (dispatch) => ({

  fetchArticles(page, currentLastPage) {
    if (page < currentLastPage) {
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

        const link = response.headers.link;
        const lastPage = link.split(/\&/)
                             .filter(page => page.match(/page=/))
                             .map(page => page.replace(/page=/, ''))
                             .map(value => parseInt(value))
                             .sort()
                             .reverse() [0];

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
      })
    }
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

const FgaNewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (FgaNews);

export default FgaNewsContainer;
