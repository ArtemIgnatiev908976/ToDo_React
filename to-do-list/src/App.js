import React, {useState} from 'react';
import listSvg from './assets/img/list.svg';
import addSvg from './assets/img/add.svg';
import List from './Components/List/List'
import AddList from "./Components/AddList/AddList";
import DB from './assets/db.json'

function App() {
  const[value, setValue] = React.useState('Hello');


  return (
  <div className="todo">
    <div className="todo__sidebar">

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

<AddList colors={DB.colors}/>

    </div>
    <div className="todo__tasks">

    </div>
  </div>
  );
}

export default App;
