import React from 'react';
import listSvg from './assets/img/list.svg';

function App() {
  return (
  <div className="todo">
    <div className="todo__sidebar">
     <ul className="todo__list">
       <li className="active">
         <i>
           <img src={listSvg} alt="List icon"/>
         </i>
         <span > Задачи</span>
       </li>

     </ul>

      <ul className="todo__list">
        <li>
          <i>
            <img src={listSvg} alt="List icon"/>
          </i>
          <span > Задачи</span>
        </li>

      </ul>

    </div>

    <div className="todo__tasks">


    </div>
  </div>
  );
}

export default App;
