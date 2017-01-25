import { connect } from 'react-redux';
import { ArticleService } from '../services';
import FgaNews  from '../components/fga-news';

const mapStateToProps = (state) => ({
  articles: state.articles.data,
  page: state.articles.page,
  lastPage: state.articles.lastPage
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
          authorName: article.setting.author_name
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
      });
    }
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