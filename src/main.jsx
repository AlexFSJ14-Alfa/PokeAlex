import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter> {/*aqui se manda a llamar el router del buscador en este caso devemos instalarlo Jairo yo utilize el npm i react-router-dom@6 */}
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
