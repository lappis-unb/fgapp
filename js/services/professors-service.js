import axios from '../config/axios';

const ORDER = 'name ASC';
const LIMIT = 20;
const PAGE = 1;

export default class ProfessorsService {

  static get(id, order=ORDER, limit=LIMIT, page=PAGE) {
    return axios.get(`/profiles/${id}/members`, {
      params: {
        order,
        limit,
        page
      }
    });
  }

}
