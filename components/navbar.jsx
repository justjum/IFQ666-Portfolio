import { NavLink } from 'react-router-dom';
import Weather from './weather'

const Navbar = () => {
    return <>
        <nav className="navbar navbar-expand-xxl bg-light">
            <div className='container-fluid'>
                <a className="navbar-brand inactive" href="#">Jum Portfolio</a>
                <div className='navbar-nav'>
                <NavLink 
                        to='/'
                        className={({ isActive, isPending }) =>
                            isPending ? "nav-link pending" : isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Home
                    </NavLink>
                
                    <NavLink 
                        to='about'
                        className={({ isActive, isPending }) =>
                            isPending ? "nav-link pending" : isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to='webdev'
                        className={({ isActive, isPending }) =>
                            isPending ? "nav-link pending" : isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Web App Dev
                    </NavLink>
                    <NavLink 
                        to='music'
                        className={({ isActive, isPending }) =>
                            isPending ? "nav-link pending" : isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Music
                    </NavLink>
                    <NavLink 
                        to='images'
                        className={({ isActive, isPending }) =>
                            isPending ? "nav-link pending" : isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Images
                    </NavLink>
                </div>
                    
            </div>
            <Weather />
            
            
        </nav>
    </>
}

export default Navbar;
