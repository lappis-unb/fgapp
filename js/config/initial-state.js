import {
  ALL,
  AEROESPACIAL,
  AUTOMOTIVA,
  ELETRONICA,
  ENERGIA,
  SOFTWARE
} from './professor-communities';

export default {
  articles: {
    page: 1,
    lastPage: Infinity,
    data: [],
    error: false
  },

  professors: {
    clearListView: false,
    currentCourse: ALL,
    error: false,

    [ALL]: {
      data: [],
      page: 1,
      lastPage: Infinity
    },

    [AEROESPACIAL]: {
      data: [],
      page: 1,
      lastPage: Infinity
    },

    [AUTOMOTIVA]: {
      data: [],
      page: 1,
      lastPage: Infinity
    },

    [ELETRONICA]: {
      data: [],
      page: 1,
      lastPage: Infinity
    },

    [ENERGIA]: {
      data: [],
      page: 1,
      lastPage: Infinity
    },

    [SOFTWARE]: {
      data: [],
      page: 1,
      lastPage: Infinity
    }
  },

  pages: {
    actualPage: 'FgaNews'
  }
};