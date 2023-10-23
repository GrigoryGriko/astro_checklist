import * as api from '../../utils/Api';
import {useState, useEffect} from 'react';
import Task from '../Task/Task';
import AddTask from '../AddTask/AddTask';


function Container() {
  const [list, setList] = useState([]);
  const [maxCountList, setMaxCountList] = useState(10);

  /*function listLimiter(list) {
    return list.slice().splice(0, maxCountList);
  }*/

  useEffect(() => {
    const oldList = JSON.parse(localStorage.getItem("todoList"));


    if (oldList) {
      setList(oldList);
    } else {
      api.getTodoList()
      .then((res) => {
        setList(res.todos);
        console.log(res.todos);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [])

  return (
    <div className="container__list">
      <AddTask />

      {list ? list.map((item, index) => (
        <Task
          key={`pl${item.id}`}
          item={item}
          list={list}
          setList={setList}
        />
      )) : ''}
    </div>
  )
}

export default Container;