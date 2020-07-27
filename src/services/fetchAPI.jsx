const NO_BODY = ['GET', 'DELETE'];

export default function fetchAPI(url, method, body) {
  // if(method === 'GET'){
  //   return fetch(url) 
  //     .then(res => res.json());
  // }
  //coding with Ryan...this looks much better
  return fetch(url, {
    method,
    headers: NO_BODY.includes(method) ? {} : { 'Content-Type': 'application/json' },
    body: NO_BODY.includes(method) ? null : body
  })
    .then(res => res.json());
}
