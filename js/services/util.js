import { COMMON_DEFAULTS } from '../config/initial-state';

export function getLastPageFromHeaderLink(link="") {
  if (!link || link.length === 0) return COMMON_DEFAULTS.lastPage;

  const params = link.split(/\&/);
  const pages = params.filter(page => page.match(/page=/))
                      .map(page => page.replace(/page=/, ''));
  const lastPage = pages.map(value => parseInt(value))
                        .sort()
                        .reverse() [0];
  return lastPage;
}
