import listSvg from "../../assets/img/list.svg";
import React from "react";
import './List.scss'
const List = ({items}) =>{
    // const obj={a:1, b: 1}; //деструкторизация -взять свойста и превратить в переменные
    // const { a } = obj;
    return(
        <ul className="list">
            {
                items.map(item =>(
                    <li className={item.active ? 'active': ''}>
                    <i>
                        {item.icon ? (
                            item.icon
                        ) : (
                            <i className={`badge badge--${item.color}`}></i>
                        )}
                    </i>
                    <span>{item.name}</span>
                    </li>
                )
                )
            }
        </ul>
    );
};


export default List;