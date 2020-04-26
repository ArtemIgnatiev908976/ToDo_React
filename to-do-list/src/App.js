import React, {useState} from 'react';
import listSvg from './assets/img/list.svg';
import addSvg from './assets/img/add.svg';
import List from './Components/List/List'
import AddListButton from "./Components/AddButtonLixt";

function App() {
  const[value, setValue] = React.useState('Hello');


  return (
  <div className="todo">
    <div className="todo__sidebar">
      <button onClick={()=>{setValue('Archakov Blog')}}> Обновить</button>
      <List items={[
        {
          icon:  <img src={listSvg} alt="Index icon"/>,
          name: 'Все задачи',
          active:true
        }
      ]
      }
      />
      <List

          items={[
        {
          color: "green",
          name: 'Покупки'
        },

        {
          color: "blue",
          name: 'Фронтенд'
        },
        {
          color: "pink",
          name: 'Фильмы и сериалы',
          active: true
        },
      ]
      }
             isRemovable
      />

<AddListButton/>

    </div>
    <div className="todo__tasks">

    </div>
  </div>
  );
}

export default App;
