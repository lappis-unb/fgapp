import { axiosInstance } from '../config';

export default class ArticleService {
  static get(parentId, limit=20, page=1) {
    return axiosInstance.get('articles', {
      params: {
        parent_id: parentId,
        limit,
        page
      }
    });
  }
}
