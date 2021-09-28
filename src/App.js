import React from 'react';
import Templete from './components/Templete';
import Header from './components/Header';
import Content from './components/Content';
import Create from './components/Create';
import Dday from './components/Dday';
import { TodoProvider } from './TodoListContext';

function App() {
  return (
    <TodoProvider>
      <Templete>
        <Header />
        <Dday />
        <Content />
        <Create />
      </Templete>
    </TodoProvider>
  );
}

export default App;
