import React, {useState} from 'react';
import listSvg from './assets/img/list.svg';
import addSvg from './assets/img/add.svg';
import List from './Components/List/List'
import AddList from "./Components/AddList/AddList";
import DB from './assets/db.json'

function App() {
  const [lists, setLists] = useState(DB.lists.map(item => {
    item.color =
        DB.colors.filter(color=> color.id === item.colorId)[0].name;  //фильтруем весь массив если совпадает пихаем его туда
    console.log(item);
    return item;
  }));   //после вызова возращает массив из двух элементов с помощью деструктуризации
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

          items={lists}
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
