const baseUrl = 'https://dummyjson.com/';

const countLimit = "?limit=10&skip=0";

function _getResponseData(res) {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  }
  return res.json();
}
  
export function getTodoList() {
  return fetch(`${baseUrl}todos${countLimit}`, {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json'
    },
  }).then(res => _getResponseData(res))
}

export function addTask(id, todo, completed, userId) {
  return fetch(`${baseUrl}todos`, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  }).then(res => _getResponseData(res))
}