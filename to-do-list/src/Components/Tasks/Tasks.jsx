import React from "react";
import './Tasks.scss'
import editSvg from '../../assets/img/edit.svg'
import checkSvg from '../../assets/img/check.svg'

const Tasks = () => {
    return (

        <div className="tasks">
            <h2 className="tasks__title">
                Фронтенд
                <img src={editSvg} alt="Edit icon"/>

            </h2>


            <div className="tasks__items">

               <div className="tasks__items-row">

                   <div className="checkbox">
                       <input id="check" type="checkbox"/>
                       <label htmlFor="check">
                           <img src={checkSvg} alt="Check icon"/>

                       </label>

                   </div>
                   <p> 123123</p>

               </div>

            </div>
        </div>


    )
};

export default Tasks;