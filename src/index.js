import React from 'react';
import { createRoot } from 'react-dom/client';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css';

const rootDiv = document.getElementById('root');
const root = createRoot(rootDiv);

root.render(<CounterApp value={5} />);
//root.render(<PrimeraApp saludo="Hola-Alejo" />);