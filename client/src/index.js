import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

render(<App size="20" order="ASC" endpointUrl="http://localhost:8000/api" />, document.getElementById('app'));
