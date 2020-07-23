export const fetchAPI = ({ url, method }) => {
  return fetch(url, method)
    .then(res => res.json);
};
