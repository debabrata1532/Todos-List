import React from 'react'

export const Listitem = ({todos, onDelete}) => {
    return (
        <div>
            {/* <pre>{todos.sno}</pre> */}
             <h4> {todos.title} </h4>
           <p>{todos.desc}</p>
           <button className="btn btn-danger btn-sm" onClick={() => onDelete(todos)}>Delete</button>
           <hr />
        </div>
    )
}
