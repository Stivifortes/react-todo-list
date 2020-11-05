import React, {useState, useEffect} from 'react';
import './App.css';
//Components importing
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  
  //Managing state
  const [inputText, setInputText] = useState(" ");
  const [todos, setTodos] = useState ([]);
  const [status, setStatus] = useState ("all");
  const [filteredTodos, setFilteredTodos] = useState ([]);

  //Use Effect
  useEffect (()=> {
    const filterHandler = () => {
      switch (status){
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        
        default:
          setFilteredTodos(todos);
          break;
        
      }
    }
    filterHandler();
  }, [todos, status]);

 
  
  return (
    <div className="App">
      <header>
        <h1>Todo List React</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText} 
        inputText={inputText}
        setStatus={setStatus}
      />
      <TodoList 
      setTodos={setTodos} 
      todos={todos}
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
