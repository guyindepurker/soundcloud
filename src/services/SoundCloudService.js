import axios from 'axios';
import { storageService } from './StorageService';
const USER_SEARCH_VIEW = 'search_view';
const USER_SEARCHES = 'history_DB';
const CLIENT_ID = 'ggX0UomnLs0VmW7qZnCzw';
const BASE_URL = `https://api.soundcloud.com/tracks?linked_partitioning=1&client_id=${CLIENT_ID}&limit=6`;
export const soundCloudService = {
  getSearchResults,
  getNextPageResults,
  getSearchView,
  getRecentSearch,
  saveSearchView,
  saveRecentSearch,
};

async function getSearchResults(query) {
  try {
    const res = await axios.get(`${BASE_URL}&q=${query}`);
    const searchResults = res.data;
    return searchResults;
  } catch (err) {
    throw err;
  }
}

async function getNextPageResults(nextPageUrl) {
  try {
    const res = await axios.get(nextPageUrl);
    const nextPageResults = res.data;
    return nextPageResults;
  } catch (err) {
    throw err;
  }
}

function saveRecentSearch(recentSearch) {
  const recentSearches = getRecentSearch();
  recentSearches.unshift(recentSearch);
  if (recentSearches.length > 5) {
    recentSearches.splice(5);
  }
  storageService.save(USER_SEARCHES, recentSearches);
  return recentSearches;
}

function saveSearchView(searchViewValue) {
  storageService.save(USER_SEARCH_VIEW, searchViewValue);
}

function getRecentSearch() {
  const recentSearch = storageService.load(USER_SEARCHES) || [];
  return recentSearch;
}

function getSearchView() {
  const searchView = storageService.load(USER_SEARCH_VIEW) || 'list';
  return searchView;
}
