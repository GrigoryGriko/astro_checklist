function _getResponseData(res) {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  }
  return res.json();
}
  
export function getTodoList() {
  return fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json'
    },
  }).then(res => _getResponseData(res))
}