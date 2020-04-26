import React, {useState} from "react";
import List from "../List/List";
import addSvg from "../../assets/img/add.svg";
import './AddButtonList.scss'
import Badge from "../Badge/Badge";


const AddList =({colors})=>{

const[visiblePopup, setVisiblePopup] = useState(false);
const[selectedColor, selectColor] = useState();

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
          <input className="field" type="text" placeholder="Название списка"/>
          <div className="add-list__popup-colors">


                  {
                      colors.map(color=>
                          <Badge
                          onClick={()=> selectColor(color.id)}
                          key={color.id}
                          color={color.name}
                          className={selectedColor === color.id && 'active'}
                          />)
                  }


          </div>
          <button className="button">Добавить</button>
        </div>
      }

            </div >
    )
    }


        ;
export default AddList;