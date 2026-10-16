import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';


export default function App() {
    return(
        <>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} /> 
            </Routes>
            <Footer />
        </>
    );
}