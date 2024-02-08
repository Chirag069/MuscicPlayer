import axios from 'axios';
import {store} from '../Redux/store';
// import Store from '../Redux/store';

// const {Store: store} = Store();

const BASE_URL = 'https://b2b.paypocket.in/api/';
const Youtube_API_Key = 'AIzaSyALAhIiEWn2ndctXqQeB-1gAqfHa9yHF70';

const $http = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    //   api_key: 2581,
    Authorization: store.getState().AuthReducer.access_token
      ? `Bearer ${store.getState().AuthReducer.access_token}`
      : 'Bearer 9a8d644980ab4beb7295280a938551a8cacc8860d77460cd92297f7cb95ecf09',
  },
});

$http.interceptors.request.use(function async(config) {
  console.log('token', store.getState().AuthReducer.access_token);
  config.headers.Authorization = store.getState().AuthReducer.access_token
    ? `Bearer ${store.getState().AuthReducer.access_token}`
    : 'Bearer 9a8d644980ab4beb7295280a938551a8cacc8860d77460cd92297f7cb95ecf09';
  return config;
});

const $https = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    //   api_key: 2581,
    Authorization:
      'Bearer 9a8d644980ab4beb7295280a938551a8cacc8860d77460cd92297f7cb95ecf09',
  },
});

$https.interceptors.request.use(function async(config) {
  console.log('token', store.getState().AuthReducer.access_token);
  config.headers.Authorization =
    'Bearer 9a8d644980ab4beb7295280a938551a8cacc8860d77460cd92297f7cb95ecf09';
  return config;
});

const $httpFormData = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'multipart/form-data;',
    //   api_key: 2581,
    authorization: store.getState().AuthReducer.access_token
      ? `Bearer ${store.getState().AuthReducer.access_token}`
      : 'Bearer 9a8d644980ab4beb7295280a938551a8cacc8860d77460cd92297f7cb95ecf09',
  },
});

$httpFormData.interceptors.request.use(function (config) {
  console.log('token', store.getState().AuthReducer.access_token);
  config.headers.authorization = store.getState().AuthReducer.access_token
    ? `Bearer ${store.getState().AuthReducer.access_token}`
    : 'Bearer 9a8d644980ab4beb7295280a938551a8cacc8860d77460cd92297f7cb95ecf09';
  return config;
});

const $httpFormDatafixed = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'multipart/form-data;',
    //   api_key: 2581,
    authorization:
      'Bearer 9a8d644980ab4beb7295280a938551a8cacc8860d77460cd92297f7cb95ecf09',
  },
});

$httpFormDatafixed.interceptors.request.use(function (config) {
  console.log('token', store.getState().AuthReducer.access_token);
  config.headers.authorization =
    'Bearer 9a8d644980ab4beb7295280a938551a8cacc8860d77460cd92297f7cb95ecf09';
  return config;
});

const STATUS_CODE = {
  success: 200,
  successAction: 201,
  notFound: 404,
  badRequest: 400,
  accountSuspend: 401,
  invalid: 422,
  timeout: 408,
  userNotFound: 410,
  userBlocked: 403,
};

const api_error_code = {
  unauthorized: 401,
  accessDenied: 430,
  sessionExpired: 440,
  validationError: 400,
  emailNotVerified: 403,
  tokenExpire: 419,
  duplicateMove: 405,
};

const api_success_code = {
  postSuccess: 201,
  success: 200,
};

export default {
  axiosInstance: $http,
  axiosInstanceFixed: $https,
  axiosInstanceFormData: $httpFormData,
  axiosInstanceFormDataFixed: $httpFormDatafixed,
  Youtube_API_Key,
  statusCode: STATUS_CODE,
  api_error_code,
  api_success_code,
};
