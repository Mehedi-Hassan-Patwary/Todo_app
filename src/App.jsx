import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
//import TodoItem1 from "./components/TodoItem1";
//import TodoItem2 from "./components/TodoItem2";
//import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";


function App() {

      const todoItems =[
        {
        name :'Buy Milk',
        dueDate: '4/5/6'
      },
        {
        name :'Go to College',
        dueDate: '4/5/6'
      },
        {
        name :'Mehedi Hassan',
        dueDate: '4/5/6'
      }
    ];

  return (
      <center class='todo-container'> 

          <AppName/>
          <AddTodo></AddTodo>
          <TodoItems todoItems={todoItems}></TodoItems>



   </center>
  )
}

export default App;
