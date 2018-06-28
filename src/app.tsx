import './index.html';
import './style.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Main } from './components/main/main';
import { Notes } from './notes';
const notes = new Notes();

ReactDOM.render(<Main notes={notes} />, document.getElementById('root'));
