import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RouletteGun from './state-drills/RouletteGun'


ReactDOM.render(<RouletteGun bulletInChamber={8} />, document.getElementById('root'));


