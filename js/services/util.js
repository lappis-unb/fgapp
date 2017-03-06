import { COMMON_DEFAULTS } from '../config/initial-state';

export function getLastPageFromHeaderLink(link="") {
  if (!link || link.length === 0 || !link.match(/page=\d+/g)) return COMMON_DEFAULTS.lastPage;

  const pages = link.match(/page=\d+/g)
  const lastPage = pages.map(page => parseInt(page.replace(/page=/, '')))
                        .sort()
                        .reverse() [0];
  return lastPage;
}
