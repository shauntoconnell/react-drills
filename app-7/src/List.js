import React from 'react';

import Todo from './Todo';

export default function List(props) {
  const mappedList = props.list.map((task,index) => {
    return (
      <Todo key={index} task={task} />
    )
  })

  return (
    <div>
      {mappedList}
      {/* {props.list.map((e,i) => <h3 key={i}>{e}</h3>)} */}
    </div>
  )
}