import React from "react";
import List from "./List/List";
import addSvg from "../assets/img/add.svg";

const AddListButton =()=>
        (
       <List
        items={[
        {
            className: "list__add-button",
            icon: <img src={addSvg} alt="Index icon" />,
            name: 'Добавить список'
        },
        ]
        }
       />
        );
export default AddListButton;