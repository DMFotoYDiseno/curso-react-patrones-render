import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
/* import { ChangeAlertWithStorageListener } from '../ChangeAlert';  */
import { ChangeAlert } from '../ChangeAlert'; 

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
    sincronizeTodos,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter  
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        /> 
        </TodoHeader>

      <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          searchText={searchValue}
          /*setSearchValue={setSearchValue}
          addTodo={addTodo}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
          openModal={openModal}
          setOpenModal={setOpenModal}*/

          onError={() => <TodosError />}
          onLoading={() => <TodosLoading />}
          onEmptyTodos={() => <EmptyTodos />}
          onEmptySearchResults={(searchText)=><p>No hay resultados para {searchText}</p>}
        >
          {/* {todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}  
              onComplete={() => {}}
              onDelete={()=> {}}
            />  
            )} */}

          {todo => ( 
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}
        </TodoList>
      
      {!!openModal && (
        <Modal>
          <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      {/* <ChangeAlertWithStorageListener
        sincronize={sincronizeTodos}
      />   */}
      <ChangeAlert
        sincronize={sincronizeTodos}
      />  
    </React.Fragment>
  );
}

export default App;