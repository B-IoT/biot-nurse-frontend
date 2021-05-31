import axios from 'axios';

export const URL = 'https://api.b-iot.ch:8080';
export const API = axios.create({ baseURL: URL });
export const REFETCH_INTERVAL = 4000;
export const TOKEN_LIFETIME = 6 * 24 * 60 * 60 * 1000;

/**
 * Set the token
 */
export function fetchToken() {
  const token = localStorage.getItem('token');
  API.defaults.headers.common = { Authorization: 'Bearer ' + token };
}

/**
 * Request the authentication token
 */
export async function authenticate(username: string, password: string) {
  fetchToken();

  const credentials = {
    username: username,
    password: password,
  };

  try {
    const { data } = await API.post('/oauth/token', credentials);
    localStorage.setItem('token', data);
    localStorage.setItem('tokenDate', Date.now().toString());
    API.defaults.headers.common = { Authorization: 'Bearer ' + data };

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

/**
 * Get all items matching the category.
 */
export async function getItemsByCategory(category: string) {
  fetchToken();

  const params = {
    params: {
      category: category,
    },
  };

  try {
    const { data } = await API.get('api/items', params);
    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

/**
 * Get the item with the following id.
 *
 * @param {number} itemID the id of the item
 */
export async function getItem(itemID: number) {
  fetchToken();

  try {
    const { data } = await API.get(`api/items/${itemID}`);
    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

/**
 * Get the list of categories having at least one item.
 */
export async function getCategories() {
  fetchToken();

  try {
    const { data } = await API.get(`api/items/categories`);
    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
