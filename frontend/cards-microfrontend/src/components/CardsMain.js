import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function CardsMain({ cards, onAddPlace, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  const imageStyle = { backgroundImage: `url(${currentUser.avatar})` };

  return (
    <main className="content">
      <section className="add place__section">
        <button className="add place__add-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="places page__section">
        <ul className="places__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default CardsMain;