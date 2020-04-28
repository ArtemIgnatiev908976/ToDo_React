import React from "react";
import './Tasks.scss'
import editSvg from '../../assets/img/edit.svg'

const Tasks =() =>{
    return(

            <div className="tasks">
                <h2 className="tasks__title">
                    Фронтенд
                    <img src={editSvg} alt="Edit icon"/>

                </h2>
            </div>


    )
};

export default Tasks;