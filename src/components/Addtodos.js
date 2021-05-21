// import React from 'react';
// import './js/addtodos';
import React, { useState } from 'react';

export const Addtodos = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e)=> {

        e.preventDefault();
        if(!title  || !desc){
            alert("Title and Description cannot be blank");
        }
        else{
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }

    //    if(localStorage.getItem['todos'==null]){
    //        let itemsarray = [];
    //        itemsarray.push(title,desc);
    //        localStorage.setItem['todos', json.stringify(itemsarray)];
    //    }
    //    else{

    //    }

    }
    return (
        <div className="container my-3">
            <pre><h3><b>Add Todos</b></h3></pre> 
            <form  onSubmit={submit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Title</span>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} id="title" placeholder="Title" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Description</span>
                    <input type="text" className="form-control" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
        
    )
}

