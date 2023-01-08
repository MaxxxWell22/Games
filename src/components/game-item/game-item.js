import React from "react";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { GameCover } from "../game-image/game-cover";
import { GameBuy } from "../game-buy/game-buy";
import { GameGenre } from "../game-genre/game-genre";
import { setCurrentGame } from "../../redux/games/games";
import './game-item.css'

export const GameItem = ({ game }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setCurrentGame(game));
        navigate(`/app/${game.title}`);
    };

    return (
        <div className="game-item" onClick={handleClick}>
            <GameCover image={game.image} />
            <div className="game-item__details">
                <span className="game-item__titile"><b>{game.title}</b></span>
                <div className="game-item__genre">
                    {game.genres.map((genre) => (
                        <GameGenre genre={genre} key={genre} />
                    ))}
                </div>
                <span className="game-description">{game.description}</span>
                <div className="game-item__buy">
                    <GameBuy game={game} />
                </div>
            </div>
        </div>
    );
};
