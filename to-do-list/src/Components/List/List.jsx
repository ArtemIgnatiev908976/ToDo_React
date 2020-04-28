import listSvg from "../../assets/img/list.svg";
import React from "react";
import './List.scss'
import classNames from 'classnames';
import Badge from '../Badge/Badge'
import  removeSvg from '../../assets/img/remove.svg'


const List = ({items, isRemovable, onClick}) =>{
    // const obj={a:1, b: 1}; //деструкторизация -взять свойста и превратить в переменные
    // const { a } = obj;
    return(
        <ul onClick={onClick} className="list">
            {
                items.map((item, index) =>(
                    <li key={index}
                        className={classNames(item.className, {active: item.active})}>
                        {/*//передаем строчку которая содержит текст с помощью библиотеки classesnames*/}
                        <i>{item.icon ? (item.icon) : (<Badge color={item.color} />)}</i>
                    <span>{item.name}</span>
                        {isRemovable && <img className="list__remove-icon" src={removeSvg} alt="Remove icon"/> }

                    </li>
                )
                )
            }
        </ul>
    );
};


export default List;