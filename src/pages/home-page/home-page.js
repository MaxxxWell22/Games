import React from "react";
import { Link } from "react-router-dom";
import { GameItem } from "../../components/game-item/game-item";
import { GAMES } from "./data/data";
import './home-page.css';

const HomePage = () => {
    return (
        <div className="home_page">
            <Link className="home_page__child" to="/">{GAMES.map(game => <GameItem game={game} key={game.id} description={game.description} />)}</Link>
        </div>
    )
}

export { HomePage }