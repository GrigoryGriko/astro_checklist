import * as api from '../../utils/Api';
import {useState, useEffect} from 'react';
import PointList from '../PointList/PointList';


function Container() {
  const [list, setList] = useState([]);
  api.getTodoList()
    .then((res) => {
      setList(res);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })

  /*useEffect(() => {
    console.log(list);
  }, [list])*/

  return (
    <div className="container__list">
      {list ? list.map((item, index) => (
        <PointList
          key={`pl${item.id}`}
          item={item}
        />
      )) : ''}
    </div>
  )
}

export default Container;