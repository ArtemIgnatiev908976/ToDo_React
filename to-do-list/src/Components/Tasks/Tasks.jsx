import React from "react";
import './Tasks.scss'
import editSvg from '../../assets/img/edit.svg'
import checkSvg from '../../assets/img/check.svg'

const Tasks = ({ list }) => {
    return (

        <div className="tasks">
            <h2 className="tasks__title">
                {list.name}
                <img src={editSvg} alt="Edit icon"/>

            </h2>


            <div className="tasks__items">

                {list.tasks.map(task => (
                    <div key={task.id} className="tasks__items-row">
                        <div className="checkbox">
                            <input id={`task-${task.id}`} type="checkbox" />
                            <label htmlFor={`task-${task.id}`}>
                                <img src={checkSvg} alt="Check icon"/>
                            </label>
                        </div>
                        <input readOnly value={task.text} />
                    </div>
                ))}
                   </div>
                   <p> 123123</p>

               </div>





    )
};

export default Tasks;