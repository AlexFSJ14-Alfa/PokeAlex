import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage, SearchPage } from './pages';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<HomePage />} />
				
				<Route path='search' element={<SearchPage />} />
			</Route>

            <Route path='*' element={<Navigate to='/' />} /> {/*trate de mandar a llamar la informacion de los pokemons pero me frustre :(*/}
		</Routes>
	);
};
{/*aqui se crea una anidacion de ruta y ocupamos un au */}
