import { useSelector } from 'react-redux';
import { GameGenre } from '../game-genre/game-genre';
import { GameCover } from '../game-image/game-cover';
import { GameBuy } from '../game-buy/game-buy';
import './game-page.scss';

const GamePage = () => {
    const game = useSelector(state => state.game.currentGame);

    if (!game) return null

    return (
        <div className='game-page'>
            <h1 className='game-page__title'>{game.title}</h1>
            <div className='content'>
                <div className='game-page__left'>
                    <iframe
                        className='video'
                        width="95%"
                        height="450px"
                        src={game.video}
                        title="YouTube Video Player"
                        frameBorder='0'
                    ></iframe>
                </div>
                <div className='game-page__right'>
                    <GameCover image={game.image} />
                    <p className='p-description'>{game.description}</p>
                    <p className="secondary-text">Популярные метки этой игры:</p>
                    {game.genres.map((genre) => (
                        <GameGenre genre={genre} key={genre} />
                    ))}
                    <div className='game-page__buy-game'>
                        <GameBuy game={game} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { GamePage }