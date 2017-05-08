import { COMMON_DEFAULTS } from '../config/initial-state';
import { BASE_URL } from '../config/axios';

export function getLastPageFromHeaderLink(link="") {
  if (!link || link.length === 0 || !link.match(/page=\d+/g)) return COMMON_DEFAULTS.lastPage;

  const pages = link.match(/page=\d+/g)
  const lastPage = pages.map(page => parseInt(page.replace(/page=/, '')))
                        .sort()
                        .reverse() [0];
  return lastPage;
}

export function getFirstImageFromBody(body) {
  const imageRegex = /(<img.+?src=")(.+?)(".+?>)/gim;

  match = imageRegex.exec(body);

  let link = "";

  if(match){
    link = match[2];
    if(link.indexOf('http:') !== 0){
      link = BASE_URL + link;
    }
  }
  else{
    link = "";
  }

  return link;
}