import './TiltCardContainer.css';
import { Component } from 'react';
import { TiltCard } from 'components';

/* -------------------------------------------------------------------------- */

export class TiltCardContainer extends Component {
  state = {
    cards: [
      { id: 'card-vanilla', text: 'Vanilla Tilt Card' },
      { id: 'card-jquery', text: 'jQuery Tilt Card' },
      { id: 'card-react', text: 'React Tilt Card' },
    ],
  };

  handleRemoveCard = (id) => {
    this.setState({
      ...this.state,
      cards: this.state.cards.filter((card) => card.id !== id),
    });
  };

  render() {
    const { cards } = this.state;

    return (
      <div className="tiltCardContainer" lang="en">
        <div className="tiltCardContainer__buttonGroup">
          {cards.map(({ id, text }) => (
            <button
              key={id}
              type="button"
              className="tiltCardContainer__button"
              onClick={() => this.handleRemoveCard(id)}
            >
              {text} 제거
            </button>
          ))}
        </div>
        <ul className="tiltCardContainer__list">
          {cards.map((card) => (
            <li key={card.id}>
              <TiltCard
                card={card}
                options={{ 'max-glare': 0.2, 'perspective': 600 }}
              >
                {card.text}
              </TiltCard>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
