import * as api from '../../utils/Api';
import {useState, useEffect} from 'react';
import './DeleteTasks.css'


function DeleteTasks(props) {
  const {list, setList} = props;

  function handleClickDeleteTasks(e) {
    e.preventDefault();

    api.deleteTasks(id)
      .then((listData) => {
        const newList = list.slice();
        newList.push(listData);

        setList(newList);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <form className="container__input-deletetasks">
      <button 
        className="container__button-deletetasks"
        onClick={(e) => handleClickDeleteTasks(e)}  
      >
        Удалить завершенные задачи
      </button>
    </form>
  )
}

export default DeleteTasks;