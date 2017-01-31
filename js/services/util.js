export function getLastPageFromHeaderLink(link) {
  const params = link.split(/\&/);
  const pages = params.filter(page => page.match(/page=/))
                      .map(page => page.replace(/page=/, ''));
  const lastPage = pages.map(value => parseInt(value))
                        .sort()
                        .reverse() [0];
  return lastPage;
}
