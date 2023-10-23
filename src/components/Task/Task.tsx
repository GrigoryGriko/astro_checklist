import * as api from '../../utils/Api';
import {useState, useEffect} from 'react';
import './Task.css'


function Task(props) {
  const {userId, id, todo, completed} = props.item;
  const {num, list, setList} = props;

  function saveMark(num) {
    const newList = list.slice();

    newList.map((item, index, arr) => {
      if (index === num - 1) {
        return arr[index].completed = !arr[index].completed;
      } else {
        return item;
      }
    })

    setList(newList);

    /*
    const newList = list.slice();

    newList.map((item, index, arr) => {
      if (arr[index].id === id) {
        return arr[index].completed = !arr[index].completed;
      } else {
        return item;
      }
    })
    */
  }

  return (
    <div className="container__item">
      <input 
        type="checkbox"
        defaultChecked={completed}
        onChange={() => saveMark(num)}
      ></input>
      &nbsp;
      <p className="container__name">
        {num}. {todo}
      </p>
    </div>
  )
}

export default Task;