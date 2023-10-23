const baseUrl = 'https://dummyjson.com/';

function _getResponseData(res) {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  }
  return res.json();
}
  
export function getTodoList() {
  return fetch(`${baseUrl}todos`, {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json'
    },
  }).then(res => _getResponseData(res))
}

export function addTask(userId, id, title, completed) {
  return fetch(`${baseUrl}todos`, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  }).then(res => _getResponseData(res))
}