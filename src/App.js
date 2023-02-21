import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import { HomePage } from "./pages/home-page/home-page";
import { Header } from "./components/Header/header";
import { GamePage } from "./components/game-item/game-page/game-page";
import { store } from "./redux";
import { OrderPage } from "./pages/order-page/order-page";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route exact path="/app/:title" element={<GamePage />} />
                        <Route exact path="/order" element={<OrderPage />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
