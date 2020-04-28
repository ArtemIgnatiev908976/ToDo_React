import React, {useState} from "react";
import List from "../List/List";
import addSvg from "../../assets/img/add.svg";
import './AddList.scss'
import Badge from "../Badge/Badge";
import closeSvg from '../../assets/img/close.svg'






const AddList =({colors, onAdd})=>{

const[visiblePopup, setVisiblePopup] = useState(false);
const[selectedColor, selectColor] = useState(colors[0].id);
const [inputValue, setInputValue] = useState('');
const  addList=()=>{
    if (!inputValue){  //Проверка на пустое значение
        alert('Введите название списка');
        return;
    }
    const color = colors.filter(c => c.id === selectedColor)[0].name;
    onAdd( {
        "id": Math.random(),
        "name": inputValue,
        color
        // "color": color
    });
    onClose();

};


//функция нажатия на крестик
        const onClose = () => {
            setVisiblePopup(false); //Скрывает форму при добавлении нового списка
            setInputValue(''); //очистка текста при добавлении
            selectColor(colors[0].id); //очистка цвета при добавлении
        };



console.log(inputValue);

    return(
        <div className="add-list">
        <List
            onClick={()=>setVisiblePopup(true)}
            items={[
                {
                    className: "list__add-button",
                    icon: <img src={addSvg} alt="Index icon" />,
                    name: 'Добавить список'
                },
            ]
            }
        />

      { visiblePopup &&

      <div className="add-list__popup">
          <img onClick={onClose} src={closeSvg} alt="Close button" className="add-list__popup-close-btn"/>
          <input onChange={e => setInputValue(e.target.value)} value={inputValue} className="field" type="text" placeholder="Название списка"/>
          <div className="add-list__popup-colors">
                  {colors.map(color=>
                          <Badge
                          onClick={()=> selectColor(color.id)}
                          key={color.id}
                          color={color.name}
                          className={selectedColor === color.id && 'active'}
                          />)}


          </div>
          <button onClick={addList} className="button">Добавить</button>
        </div>
      }

            </div >
    )
    }


        ;
export default AddList;