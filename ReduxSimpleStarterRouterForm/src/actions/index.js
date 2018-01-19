import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=13fgw35gewrbser9gjse9rg834gj34gg';

export function fetchPosts() {
  const request = axios.get(`${URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
