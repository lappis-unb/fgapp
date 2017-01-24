import { axios } from '../config';


const PROFILE_ID = 35;
const ORDER = 'name ASC';
const LIMIT = 20;
const PAGE = 1;

export default class ProfessorsService {

  static get(order=ORDER, limit=LIMIT, page=PAGE) {
    return axios.get(`/profiles/${PROFILE_ID}/members`, {
      params: {
        order,
        limit,
        page
      }
    });
  }

}