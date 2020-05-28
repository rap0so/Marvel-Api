import axios from 'axios';

import { API_URL } from 'consts/api';

const API_KEY = process.env.REACT_APP_MARVEL_API_KEY;

const request = axios.create({
  baseURL: API_URL,
  params: {
    apikey: API_KEY,
    limit: '30',
  },
  responseType: 'json',
});

export const getCharacter = ({ name = '' }) =>
  request.get(`characters?nameStartsWith=${name}`);

export const getSeriesFromCharacter = ({ id = '' }) =>
  request.get(`characters/${id}/series`);

export default request;
