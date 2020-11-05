import React from 'react';

const Form = ( {todos, setTodos, setInputText, inputText, setStatus} ) => {

    //here i can write js codes
    const inputTextHandler = (e) => {
        //get the value of the input
        //console.log(e.target.value)
        
        //update the state setInputText with the value of the input
        setInputText(e.target.value)
    };

    const submitTodohandler = (e) => {
        //dont let the page refresh onclick
        e.preventDefault();
        setTodos([
            ...todos, {
                text: inputText, 
                completed: false, 
                id: Math.random() * 1000
            }
        ]);
        setInputText("")
    }

    const statusHandler = (e) => {
        //get the status value
        //console.log(e.target.value);
        setStatus(e.target.value)
    }
    return (
        <form>
            <input 
                value={inputText} 
                onChange={inputTextHandler} 
                type="text" className="todo-input" 
            />
            <button onClick={submitTodohandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;