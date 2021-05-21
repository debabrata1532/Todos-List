
import React from 'react'
import {Listitem} from '../components/Listitem';

export const Todos = (props) => {
    return (
        <div>
            <h3 className="text-center my-3">Todos List</h3>
          
             { props.List.length===0? <div className="container">No Todos Found</div> :
               props.List.map((todo) => {
                 return (  
                <div className="container">
                    <Listitem todos ={todo} key={todo.sno} onDelete={props.onDelete}/>
                </div> )
           
                
                
              
                
    }) 
} 
        </div>
    )
}

