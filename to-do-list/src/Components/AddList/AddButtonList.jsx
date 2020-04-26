import React, {useState} from "react";
import List from "../List/List";
import addSvg from "../../assets/img/add.svg";
import './AddButtonList.scss'

const AddListButton =()=>{

const[visiblePopup, setVisiblePopup] = useState(false);

    return(
        <div className="add-list">
        <List
            onClick={()=> alert(1)}
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
        <h1>123</h1>
        </div>
      }

            </div >
    )
    }


        ;
export default AddListButton;