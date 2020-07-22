export const fetchAPI = ({ url }) => {
  return fetch(url)
    .then(res => res.json);
};
