import axios from "axios";
import dotenv from "dotenv";
import qs from "qs";

dotenv.config();

const { MTA_API_URL } = process.env;

export const getInstance = (method, token = null, config = {}) => {
  let options = {
    ...config,
    baseURL: MTA_API_URL,
    method,
  };

  options.headers = {
    ...(options.headers || {}),
    Accept: "application/json"
  };

  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: "Bearer " + token,
    };
  }

  return axios.create(options);
};

export const request = (
  method,
  apiUrl,
  token = null,
  data = null,
  config = {}
) => {
  let request = {};

  if (data) {
    if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
      request.data = data;
    }

    if (method === 'GET' || method === 'DELETE') {
      const params = qs.stringify(data);
      apiUrl += "?" + params;
    }
  }

  request.url = apiUrl;

  const instance = getInstance(method, token, config);

  return instance(request).then((res) => {
    if (res.status === 401) {
      //retry with new login token
      return {
        success: false,
        error: "Login Required",
      };
    }

    return res.data;
  });
};

export const get = (apiUrl, token = null, data = null, config = {}) => {
  return request("GET", apiUrl, token, data, config);
};

export const post = (apiUrl, token = null, data = null, config = {}) => {
  return request("POST", apiUrl, token, data, config);
};

export const put = (apiUrl, token = null, data = null, config = {}) => {
  return request("PUT", apiUrl, token, data, config);
};

export const patch = (apiUrl, token = null, data = null, config = {}) => {
  return request("PATCH", apiUrl, token, data, config);
};

export const del = (apiUrl, token = null, data = null, config = {}) => {
  return request("DELETE", apiUrl, token, data, config);
};
