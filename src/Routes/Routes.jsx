import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Error from '../pages/Error';
import Housing from '../pages/Housing';

function IndexRoutes () {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/housing/:id' element={<Housing />} />
                <Route path='/' element={<Home />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRoutes;