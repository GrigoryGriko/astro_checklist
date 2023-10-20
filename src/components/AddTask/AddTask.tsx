import * as api from '../../utils/Api';
import {useState, useEffect} from 'react';
import './AddTask.css'


function AddTask() {
  const [textTask, setTextTask] = useState('');
  
  function handleChange(e) {
    const value = e.target.value;

    setTextTask(value);
  }

  function handleClickAddtask(e) {
    e.preventDefault();
  }

  return (
    <form className="container__input">
      <input 
        type="text"
        value={textTask}
        onChange={(e) => handleChange(e)}
      ></input>

      <button 
        className="container__button-addtask"
        onClick={(e) => handleClickAddtask(e)}  
      >
        Добавить задачу
      </button>
    </form>
  )
}

export default AddTask;