
import  { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store/store';
import App from './App';

import './index.scss';     

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement); 

root.render( 
    // <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider> 
    // </React.StrictMode>
);
