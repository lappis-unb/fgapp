import {
  ALL,
  AEROESPACIAL,
  AUTOMOTIVA,
  ELETRONICA,
  ENERGIA,
  SOFTWARE
} from './professor-communities';

export const COMMON_DEFAULTS = {
  page: 1,
  lastPage: Infinity,
  data: []
}

export default {
  articles: {
    page: COMMON_DEFAULTS.page,
    lastPage: COMMON_DEFAULTS.lastPage,
    data: COMMON_DEFAULTS.data,
    error: false
  },

  professors: {
    currentCourse: ALL,
    error: false,

    [ALL]: {
      data: COMMON_DEFAULTS.data,
      page: COMMON_DEFAULTS.page,
      lastPage: COMMON_DEFAULTS.lastPage
    },

    [AEROESPACIAL]: {
      data: COMMON_DEFAULTS.data,
      page: COMMON_DEFAULTS.page,
      lastPage: COMMON_DEFAULTS.lastPage
    },

    [AUTOMOTIVA]: {
      data: COMMON_DEFAULTS.data,
      page: COMMON_DEFAULTS.page,
      lastPage: COMMON_DEFAULTS.lastPage
    },

    [ELETRONICA]: {
      data: COMMON_DEFAULTS.data,
      page: COMMON_DEFAULTS.page,
      lastPage: COMMON_DEFAULTS.lastPage
    },

    [ENERGIA]: {
      data: COMMON_DEFAULTS.data,
      page: COMMON_DEFAULTS.page,
      lastPage: COMMON_DEFAULTS.lastPage
    },

    [SOFTWARE]: {
      data: COMMON_DEFAULTS.data,
      page: COMMON_DEFAULTS.page,
      lastPage: COMMON_DEFAULTS.lastPage
    }
  },

  pages: {
    actualPage: 'FgaNews'
  }
};