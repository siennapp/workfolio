import React from 'react';
import styled from 'styled-components';
import ItemList from './components/ItemList';
import MainBg from './components/MainBg';

const Wrap = styled.div`
  top: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
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
