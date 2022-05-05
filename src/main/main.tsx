import './main.css'
import { useAuth } from '../config/firebase';
import { useEffect } from 'react'

export const Main = () => {

    useEffect(() => {
    document.title = "Home"
  }, [])

  const currentUser = useAuth();


  return (
    <div className = "main">
        <h1>Blovo este aplicatia de pe care poti comanda de la diferite restaurante la tine acasa</h1>
        {currentUser?
          <>
            <h2>Acum ca v-ati autentificat puteti continua pe pagina de restaurante</h2>
          </>
            :
          <>
            <h2>Pentru a vedea meniurile restaurantelor va trebui sa va autentificati cu un cont</h2>
          </>
          }
        

    </div>
  );
}
