import { Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import NavDemo from './components/NavDemo';
import Home from './views/Home';
import Footer from './components/footer/Footer';

function App() {
	return (
		<div className='flex flex-col min-h-screen'>
			{/* <Navbar /> */}
			<NavDemo/>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
