import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import { Todos } from "./components/Todos";
// import { Listitem } from './components/Listitem';
import React, { useState, useEffect } from 'react';
import { Addtodos } from './components/Addtodos';
import {About } from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";


function App() {
  let initList;

  if (localStorage.getItem('list') === null) {
    initList = [];
  }
  else {
    initList = JSON.parse(localStorage.getItem('list'));
  }

  // Insert todos code 
  let addTodo = (title, desc) => {
    if (List.length === 0) {
      var sno = 1;
    }
    else {
       sno = List[List.length - 1].sno + 1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc
    };
    setList([...List, mytodo]);
    console.log(mytodo);


  }



  // Delete todos code 
  const onDelete = (todos) => {
    console.log('onDelete func^ called', todos);
    setList(List.filter((e) => {
      return e !== todos;
    }));
    localStorage.setItem('list', JSON.stringify(List));
  }


  const [List, setList] = useState(initList);
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(List));

  }, [List])

  return (
    <>
      <Router>


        <Header title="Todos List" item="todos" logo={logo} />


        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>

                <Addtodos addTodo={addTodo} />
                <Todos List={List} onDelete={onDelete} />
              </>
            )
          }}>

          </Route>
          <Route exact path="/about">
            <About />
          </Route>


        </Switch>

      </Router>


    </>
  );
}

export default App;
