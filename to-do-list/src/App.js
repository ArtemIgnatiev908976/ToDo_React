import React from 'react';
import listSvg from './assets/img/list.svg';
import Index from './Components/List'

function App() {
  return (
  <div className="todo">
    <div className="todo__sidebar">
      <Index items={[
        {
          icon:  <img src={listSvg} alt="Index icon"/>,
          name: 'Все задачи',
          active:true
        }
      ]
      }
      />
      <Index items={[
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
          name: 'Фильмы и сериалы'
        },
      ]
      }
      />




    </div>
    <div className="todo__tasks">


    </div>
  </div>
  );
}

export default App;
