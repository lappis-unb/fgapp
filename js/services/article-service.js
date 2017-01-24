import { axios } from '../config';

const PARENT_ID = 46,
      LIMIT = 20,
      PAGE = 1;

export default class ArticleService {
  static get defaults() {
    return {
      parentID: PARENT_ID,
      limit: LIMIT,
      page: PAGE
    }
  }

  static get(parentId=PARENT_ID, page=PAGE, limit=LIMIT) {
    return axios.get('articles', {
      params: {
        parent_id: parentId,
        page,
        limit
      }
    });
  }
}
