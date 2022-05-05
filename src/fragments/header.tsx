import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { useAuth } from '../config/firebase';


export const Header = () => {

  const currentUser = useAuth();
  const navigate = useNavigate();

  const Logout = () => {
   auth.signOut()
   .then(() => navigate('/'))
   .catch(error => console.log(error));
  }
 
  return (
    <header>

<nav>

    <ul id="meniu">
        <li>
        <div className="shadow"><Link to = "/">Home</Link></div>
            
        </li>
        <li>
        <div className="shadow"><Link to = "/restaurants">Restaurante</Link></div>
        </li>
        <li>
        {currentUser?
          <>
            <div className="shadow"><Link to = "/profile" className = 'shadow'>Profil</Link></div>
          </>
            :
          <>
            <div className="shadow"><Link to = "/login" className = 'shadow'>Login</Link></div>
          </>
          }
        
            
        </li>
        <li>
        {currentUser?
          <>
            <div className="shadow" onClick={() => Logout()}>Log Out</div>
          </>
            :
          <>
            <div className="shadow"><Link to = "/register" className = 'shadow'>Register</Link></div>
          </>
          }
        </li>
    </ul>
</nav>
</header>
  );
}
