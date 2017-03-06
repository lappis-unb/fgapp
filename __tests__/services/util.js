import { getLastPageFromHeaderLink } from '../../js/services/util';
import { COMMON_DEFAULTS } from '../../js/config/initial-state';

const HEADERS_LINK = '<http://portal/api/v1/profiles/35/members?page=7>; rel="last", <http://portal/api/v1/profiles/35/members?page=2>; rel="next"';

it('return the last page link value', () => {
  const lastPage = getLastPageFromHeaderLink(HEADERS_LINK);
  expect(lastPage).toEqual(7);
});

it('return COMMON_DEFAULTS.lastPage when given an invalid link', () => {
  let lastPage = getLastPageFromHeaderLink(undefined);
  expect(lastPage).toEqual(COMMON_DEFAULTS.lastPage);

  lastPage = getLastPageFromHeaderLink(null);
  expect(lastPage).toEqual(COMMON_DEFAULTS.lastPage);

  lastPage = getLastPageFromHeaderLink("");
  expect(lastPage).toEqual(COMMON_DEFAULTS.lastPage);

  lastPage = getLastPageFromHeaderLink('<http://portal/api/v1/profiles/35/members?>; rel="last"');
  expect(lastPage).toEqual(COMMON_DEFAULTS.lastPage);

  lastPage = getLastPageFromHeaderLink('<http://portal/api/v1/profiles/35/members?NOT_PAGE=7>; rel="last"');
  expect(lastPage).toEqual(COMMON_DEFAULTS.lastPage);
});
