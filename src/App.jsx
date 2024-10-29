import { useState } from 'react'
import './App.css'
import '../stylesheets/styles.css'
import {
  BrowserRouter as Router, 
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
import AppLayout from '../routes/AppLayout';
import Home from '../components/home';
import About from '../components/about';
import Music from '../components/music';
import WebDev from '../components/webdev';
import Images from '../components/images';

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
        <Router>
            <Routes>
                <Route  
                    path='/'
                    element={<AppLayout />}
                >
                    <Route
                      index
                      element={<Home />}
                    />

                    <Route  
                        path='/about'
                        element={<About />}
                    />
                    <Route  
                        path='/webdev'
                        element={<WebDev />}
                    />
                    <Route  
                        path='/music'
                        element={<Music />}
                    />
                    <Route  
                        path='/images'
                        element={<Images />}
                    />
                </Route>
            </Routes>
        </Router>
    </>
  )
}

export default App
