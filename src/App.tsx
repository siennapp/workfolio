import React from 'react';
import styled from 'styled-components';
import ItemList from './components/ItemList';
import MainBg from './components/MainBg';

const Wrap = styled.div`
  width: 100vw; 
  height: 100vh; 
  overflow-x: hidden;
  overflow-y: auto;

`
const Board = styled.div`
  width: 100%; 
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 992px) {
        display: block; 
        height: auto; 
    }
  
`
function App() {
  return (
    <Wrap>
      <Board>
       <MainBg />
       <ItemList />
      </Board>
    </Wrap>
  );
}

export default App;
