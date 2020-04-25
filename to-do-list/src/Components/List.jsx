import listSvg from "../assets/img/list.svg";
import React from "react";

const List = () =>{
    return(
        <ul className="todo__list">
            <li className="active">
                <i>
                    <img src={listSvg} alt="List icon"/>
                </i>
                <span > Задачи</span>
            </li>
        </ul>
    )
};


export default List;