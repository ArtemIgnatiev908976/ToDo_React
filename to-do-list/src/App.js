import React, {useState, useEffect} from 'react';
import listSvg from './assets/img/list.svg';
import addSvg from './assets/img/add.svg';
import {List, AddList, Tasks} from "./Components";
import DB from './assets/db.json';
import axios from 'axios';

function App() {





  const [lists, setLists] = useState(DB.lists.map(item => {
    item.color =
        DB.colors.filter(color=> color.id === item.colorId)[0].name;  //фильтруем весь массив если совпадает пихаем его туда
    console.log(item);
    return item;
  }));   //после вызова возращает массив из двух элементов с помощью деструктуризации
  const[value, setValue] = React.useState('Hello');
//спред взяли массив и прикрутили новый массив конкьютинация добавляем новое изменение в конец списка



  useEffect(()=>{
    axios.get('http://localhost:3001/lists?_expend=color').then(({data}) => {
      console.log(data)
    });
  },[]);





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

<AddList onAdd={onAddList} colors={DB.colors}/>

    </div>
    <div className="todo__tasks">

    <Tasks />

    </div>
  </div>
  );
}

export default App;
