import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
	return (
		<Router>
			{''}
			<Navbar />
			<Routes>
				<Route path='/' exact Component={Home} />
			</Routes>
		</Router>
	);
}

export default App;
