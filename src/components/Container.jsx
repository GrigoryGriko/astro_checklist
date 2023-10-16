import * as api from '../utils/Api';
import {useState, useEffect} from 'react';


function Container() {
  const [list, setList] = useState('нет данных');
  api.getTodoList()
    .then((res) => {
      setList(res);
    })
    .catch((err) => {
      console.log(err);
    })

  useEffect(() => {
    console.log(list);
  }, [list])

  return (
    <div className="container__list">
      {list}
    </div>
  )
}

export default Container;