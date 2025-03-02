import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {
  return (
    <section className='List'>
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className= 'List-cards'>
        {props.cards.map((card) => {
        return <Card
                  title={card.title}
                  content= {card.content} 
                  key= {'card' + card.id} />
        })}
        <button type="button" className="List-add-button">
              + Add Random Card
        </button>
      </div>
    </section>
  );
}

export default List;