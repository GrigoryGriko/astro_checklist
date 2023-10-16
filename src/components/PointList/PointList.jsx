import * as api from '../../utils/Api';
import {useState, useEffect} from 'react';


function PointList(props) {
  const {userId, id, title, completed} = props.item;

  return (
    <div className="container__item">
      <p>{userId}, {id}, {title}, {completed}</p>
    </div>
  )
}

export default PointList;