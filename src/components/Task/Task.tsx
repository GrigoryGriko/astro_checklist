import * as api from '../../utils/Api';
import {useState, useEffect} from 'react';
import './Task.css'


function Task(props) {
  const {userId, id, title, completed} = props.item;
  const {list, setList} = props;

  function saveMark(id) {
    const newList = list.slice();

    newList.map((item, index, arr) => {
      if (arr[index].id === id) {
        return arr[index].completed = !arr[index].completed;
      } else {
        return item;
      }
    })

    setList(newList);
  }
  
  useEffect(() => { 
    localStorage.setItem("todoList", JSON.stringify(list))
  }, [list])

  return (
    <div className="container__item">
      <input 
        type="checkbox"
        defaultChecked={completed}
        onChange={() => saveMark(id)}
      ></input>
      &nbsp;
      <p className="container__name">
        {id}. {title}
      </p>
    </div>
  )
}

export default Task;