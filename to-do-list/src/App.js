import React, {useState, useEffect} from 'react';
import listSvg from './assets/img/list.svg';
import addSvg from './assets/img/add.svg';
<<<<<<< HEAD
import axios from  'axios'
import {List, AddList, Tasks} from "./Components";
=======
import List from './Components/List/List'
import AddList from "./Components/AddList/AddList";
import Tasks from "./Components/Tasks/Tasks";
>>>>>>> parent of e2340d3... Перенес подключение компонентов в один  файл
import DB from './assets/db.json'

function App() {


  const [lists, setLists] = useState(null);
  const [colors, setColors] = useState(null);
  // const [lists, setLists] = useState(DB.lists.map(item => {
  //   item.color =
  //       DB.colors.filter(color=> color.id === item.colorId)[0].name;  //фильтруем весь массив если совпадает пихаем его туда
  //   console.log(item);
  //   return item;
  // }));   //после вызова возращает массив из двух элементов с помощью деструктуризации


  useEffect(() => {
    axios.get('http://localhost:3001/lists?_expand=color').then(({ data }) => {
          setLists(data);
        });
    axios.get('http://localhost:3001/colors').then(({ data }) => {
      setColors(data);
    });
  }, []);
  //хук вызовет при изменнении чего-то





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
      <List

          items={lists}
          onRemove={()=>{alert(123)}}
             isRemovable
      />

<AddList onAdd={onAddList} colors={colors}/>

    </div>
    <div className="todo__tasks">

    <Tasks />

    </div>
  </div>
  );
}

export default App;
