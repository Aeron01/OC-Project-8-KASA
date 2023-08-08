import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../components/pages/home';
import About from '../components/pages/about';
import NoMatch from '../components/pages/noMatch';
import Housing from '../components/pages/housing';

function IndexRoutes () {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/housing/:id' element={<Housing />} />
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRoutes;