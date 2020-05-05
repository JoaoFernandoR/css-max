import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Bootstrap 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'                                                                                                                   
import { faCoffee, faCheckSquare,} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fab, faCoffee, faCheckSquare)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

