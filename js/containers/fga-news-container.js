import { connect } from 'react-redux';
import { ArticleService } from '../services';
import FgaNews  from '../components/fga-news';

const mapStateToProps = (state) => ({
  articles: state.articles.data,
  page: state.articles.page
});

const mapDispatchToProps = (dispatch) => ({

  fetchArticles(page) {
    ArticleService.get(
      ArticleService.defaults.parentID,
      page
    )
    .then(response => response.data)
    .then((response) => {
      const articles = response.articles.map(article => ({
        id: article.id,
        body: article.body,
        title: article.title,
        created_at: article.created_at
      }));

      dispatch({
        type: 'ADD_ARTICLES',
        articles
      });
    });
  },

  updatePage(nextPage) {
    dispatch({
      type: 'UPDATE_ARTICLES_PAGE',
      page: nextPage
    })
  }
});

const FgaNewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (FgaNews);

export default FgaNewsContainer;