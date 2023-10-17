import * as api from '../../utils/Api';
import {useState, useEffect} from 'react';
import PointList from '../PointList/PointList';


function Container() {
  const [list, setList] = useState([]);
  


  useEffect(() => {
    const oldList = JSON.parse(localStorage.getItem("todoList"));

    if (oldList) {
      setList(oldList);
    } else {
      api.getTodoList()
      .then((res) => {
        setList(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [])

  return (
    <div className="container__list">
      {list ? list.map((item, index) => (
        <PointList
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