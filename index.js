import Button from './components/Button.js';

const buttons = document.querySelectorAll('[data-js=Button]');

buttons.forEach(Button);

import fetchPotter from './fetchPotter.js';
fetchPotter();
