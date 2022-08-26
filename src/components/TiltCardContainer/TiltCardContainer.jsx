import './TiltCardContainer.css';
import { Component } from 'react';
import { TiltCard } from 'components';
import { withFetchData } from 'hoc/withFetchData';

/* Container Component ------------------------------------------------------ */

class TiltCardContainer extends Component {
  state = {
    // props → derived state
    cards: this.props.data,
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
                options={{ 'max-glare': 0.2, perspective: 600 }}
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

// 고차 컴포넌트
export default withFetchData(TiltCardContainer, '/tilt-cards');
