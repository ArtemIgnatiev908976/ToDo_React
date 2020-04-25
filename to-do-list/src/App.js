import React from 'react';
import listSvg from './assets/img/list.svg';
import List from './Components/List'

function App() {
  return (
  <div className="todo">
    <div className="todo__sidebar">
      <List />
    </div>

    <div className="todo__tasks">


    </div>
  </div>
  );
}

export default App;
