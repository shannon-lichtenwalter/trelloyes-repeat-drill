import React from 'react';
import List from './List';
import './App.css';

function App(props) {
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>  
      <div className='App-list'>
        {props.lists.map(items => {
        const searchIds= items.cardIds
        return <List
        header={items.header} 
        cards= { searchIds.map(letter => {
                return props.allCards[letter]
              })
            }
        key= {items.id} />})}
      </div>
    </main>
  );
}

export default App;