import React from 'react';

export default function Todo(props) {
  return (
    <div>
      {props.list.map((e,i) => (
        <div>
          <h3 key={i}>{e}</h3>
          <button onClick={e => props.delete(e.target.key)}>x</button>
        </div>
      ))}
    </div>
  )
}