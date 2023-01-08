import './game-description.css'

export const GameDescription = ({game}) => {
    return (
        <span className="game-description_item">{game.description}</span>
    )
}
