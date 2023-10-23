import * as api from '../../utils/Api';
import {useState, useEffect} from 'react';
import './AddTask.css'


function AddTask(props) {
  const {list, setList} = props;

  const [textTask, setTextTask] = useState('');
  const userId = 26;
  
  function handleChange(e) {
    const value = e.target.value;

    setTextTask(value)
  }

  function handleClickAddtask(e) {
    e.preventDefault();
    
    const newList = list.slice();
    newList.push({id: 999, textTask: textTask, completed: false, userId: userId});
    
    setList(newList);

    /*api.addTask(textTask, false, userId)
      .then((listData) => {
        setList(listData);
      })
      .then((err) => {
        console.log(err)
      })*/
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