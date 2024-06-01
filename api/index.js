import { useCookie } from '#app';
import { useFetch } from '#app';
import * as user from './user.js';
import * as order from './order.js';
import * as portfolio from './portfolio.js';

const apis = { user, order, portfolio };

const insertApi = (controller, api) => {
  const output = {};
  const _controller = { ...controller };
  Object.getOwnPropertyNames(_controller).forEach((el) => {
    const fn = _controller[el];
    output[el] = async (data, headers = {}, params = {}) =>
      await fn(api, data, headers, params);
  });
  return output;
};

export default defineNuxtPlugin((nuxtApp) => {
  const cookiz = useCookie('user_token');
  const baseURL = process.env.BASE_URL || 'http://localhost:8080';

  const api = async (method, url, data, headers = {}, params = {}) => {
    const token = cookiz.value;
    // console.log('token', cookiz)

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
      headers['Access-Control-Allow-Origin'] = '*';
    }

    try {
    //   const { status, data:result, error } = await $fetch(url, {
    //     method,
    //     baseURL,
    //     body: method.toLowerCase() === 'get' ? null : data,
    //     params: method.toLowerCase() === 'get' ? data : params,
    //     headers
    //   });

      const result2 = await $fetch(url, {
        method,
        baseURL,
        body: method.toLowerCase() === 'get' ? null : data,
        params: method.toLowerCase() === 'get' ? data : params,
        headers
      });

    //   if (error) {
    //     throw error;
    //   }

      console.log("result", result2)
      return result2;
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') console.error(error);
      throw error;
    }
  };

  api.get = (url, data, params = {}) => api('get', url, data, {}, params);
  api.post = (url, data, headers = {}, params = {}) => api('post', url, data, headers, params);
  api.put = (url, data, headers = {}, params = {}) => api('put', url, data, headers, params);
  api.delete = (url, data, headers = {}, params = {}) => api('delete', url, data, headers, params);

  Object.keys(apis).forEach((name) => {
    api[name] = insertApi(apis[name], api);
  });

  nuxtApp.provide('api', api);
});
