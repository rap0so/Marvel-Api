import axios from 'axios';

import { API_URL } from 'consts/api';

import { TgetDataByTypeProps } from './types';

const API_KEY = process.env.REACT_APP_MARVEL_API_KEY;

const request = axios.create({
  baseURL: API_URL,
  params: {
    apikey: API_KEY,
    limit: '30',
    orderBy: 'name',
  },
  responseType: 'json',
});

export const getDataByType = ({
  name = '',
  id = '',
  type,
}: TgetDataByTypeProps) => request.get(`${type}${id || name}`);

export default request;
