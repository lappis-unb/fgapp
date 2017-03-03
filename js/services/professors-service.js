import axios from '../config/axios';
import { getLastPageFromHeaderLink } from './util';

const ORDER = 'name ASC';
const LIMIT = 20;
const PAGE = 1;

export default class ProfessorsService {

  static async get(courseId, page=PAGE, order=ORDER, limit=LIMIT) {
    const data = await axios
      .get(`/profiles/${courseId}/members`, {
        params: {
          order,
          limit,
          page
        }
      })
      .then((response) => {
        const people = response.data.people.map(professor => {
          return {
            id: `${courseId}/${professor.id}`,
            name: professor.name,
            image: professor.image,
            additional_data: professor.additional_data,
            course_id: courseId
          }
        })

        const lastPage = getLastPageFromHeaderLink(response.headers.link);

        return {
          professors: people,
          lastPage
        };
      });

    return data;
  }

}
