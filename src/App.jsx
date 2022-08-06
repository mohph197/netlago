import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Interests from './components/Interests';
import Register from './components/Register';
import Navigation from "./components/Navigation";
import SignIn from './components/SignIn';
import Map from './components/Map';
import Event from './components/Event';

function App() {
	return (
		<Routes>
			<Route exact path='/' element={<Home />} />
			<Route exact path='/SignIn' element={<SignIn />} />
			<Route exact path='/Register' element={<Register />} />
			<Route exact path='/Interests' element={<Navigation section={<Interests />} />} />
			<Route exact path='/Map' element={<Navigation section={<Map />} />} />
			<Route exact path='/Event/:eventId' element={<Event />} />
		</Routes>
		// <Map />
	);
}

export default App;
