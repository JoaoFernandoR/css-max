import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// CSS
import './index.css'
// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'                                                                                                                   
import { faCoffee, faCheckSquare, faBars} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fab, faCoffee, faCheckSquare, faBars)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

