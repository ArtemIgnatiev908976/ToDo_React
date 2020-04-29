import React, {useState, useEffect} from 'react';
import listSvg from './assets/img/list.svg';
import addSvg from './assets/img/add.svg';
import {List, AddList, Tasks} from "./Components";
import DB from './assets/db.json';
import axios from 'axios';

function App() {

  const [lists, setLists] = useState(null);
  const [colors, setColors] = useState(null);

  useEffect(() => {
    axios
        .get('http://localhost:3001/lists?_expand=color&_embed=tasks')
        .then(({ data }) => {
          setLists(data);
        });
    axios.get('http://localhost:3001/colors').then(({ data }) => {
      setColors(data);
    });
  }, []);






  // const [lists, setLists] = useState(DB.lists.map(item => {
  //   item.color =
  //       DB.colors.filter(color=> color.id === item.colorId)[0].name;  //фильтруем весь массив если совпадает пихаем его туда
  //   console.log(item);
  //   return item;
  // }));   //после вызова возращает массив из двух элементов с помощью деструктуризации
  const[value, setValue] = React.useState('Hello');
//спред взяли массив и прикрутили новый массив конкьютинация добавляем новое изменение в конец списка







const onAddList = obj => {
  const newList = [...lists, obj];
 setLists(newList);
};



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
      {lists ? (
          <List
              items={lists}
              onRemove={id => {
                const newLists = lists.filter(item => item.id !== id);
                setLists(newLists);
              }}
              isRemovable
          />
      ) : (
          'Загрузка...'
      )}
      <AddList onAdd={onAddList} colors={colors} />

    </div>
    <div className="todo__tasks">{lists && <Tasks list={lists[1]} />}</div>
  </div>
  );
}

export default App;
