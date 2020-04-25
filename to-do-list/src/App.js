import React from 'react';
import listSvg from './assets/img/list.svg';
import addSvg from './assets/img/add.svg';
import List from './Components/List/List'

function App() {
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
      <List items={[
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
      <List items={[
        {
          className: "list__add-button",
          icon: <img src={addSvg} alt="Index icon" />,
          name: 'Добавить список'
        },
      ]
      }
            isRemovable
      />


    </div>
    <div className="todo__tasks">

    </div>
  </div>
  );
}

export default App;
