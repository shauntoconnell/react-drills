import React from 'react';

export default function NewTask(props) {
  const {handleChange, addToList, userInput} = props;

  return (
    <div>
      <input value={userInput} onChange={e => handleChange(e.target.value)}/>
      <button onClick={e => addToList(userInput)}>Add</button>
    </div>
  )
}