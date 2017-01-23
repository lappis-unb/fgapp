import { connect } from 'react-redux';
import { ArticleService } from '../services';
import FgaNews  from '../components/fga-news';

const mapStateToProps = (state) => ({
  articles: state.articles
});

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => {
    ArticleService.get(46)
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
  }
});

const FgaNewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (FgaNews);

export default FgaNewsContainer;