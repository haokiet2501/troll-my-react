import React from 'react'
import troll from '../imgs/troll.jpg'

const Todo = () => {
    return (
        <div className='todo-center'>
            <h3>Bất ngờ không ông già!!!</h3>
            <p>Có gì đâu mà tò mò</p>
            <div className="todo-img">
            <img src={troll} alt="" />
            </div>
        </div>
    )
}

export default Todo