import { NavLink } from 'react-router-dom';
import Weather from './weather'

const Navbar = () => {
    return <>
        <nav className="navbar">
            <Weather />
            <NavLink 
                to='/'
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
            >
                Home
            </NavLink>
        
            <NavLink 
                to='about'
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
            >
                About
            </NavLink>
            <NavLink 
                to='webdev'
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
            >
                Web App Dev
            </NavLink>
            <NavLink 
                to='music'
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
            >
                Music
            </NavLink>
            <NavLink 
                to='images'
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
            >
                Images
            </NavLink>
        </nav>
    </>
}

export default Navbar;
