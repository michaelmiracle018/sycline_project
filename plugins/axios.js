import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {
  const baseDomain = 'http://localhost:8000/v1';

  const baseURL = `${baseDomain}`;
  const instance = axios.create({
    baseURL
  });
  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('accesstoken');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
  
      return config;
    },
  
    (error) => {
      return Promise.reject(error);
    }
  );
  return {
      provide: { 
          axios: instance
      },
  }
})




// export default instance;