import './restaurants.css'
import { useAuth } from '../config/firebase';
import { useEffect } from 'react'

export const Restaurants = () => {

    useEffect(() => {
    document.title = "Restaurante"
  }, [])

    const currentUser = useAuth();

  return (
    
      <div className='restaurants'>
    {currentUser?
        <>
    <div className="container">
    <div className="menu">
      <h2 className="menu-group-heading">
      McDonald's
      </h2>
      <div className="menu-group">
        <div className="menu-item">
          <img className="menu-item-image" src="https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/Hamburger.png?itok=srqMdB2U" alt="Hamburger"/>
          <div className="menu-item-text">
            <h3 className="menu-item-heading">
              <span className="menu-item-name">Hamburger</span>
              <span className="menu-item-price">4,70 LEI</span>
            </h3>
            <p className="menu-item-description">
              Descrierea Hamburger-ului
            </p>
          </div>
        </div>
        <div className="menu-item">
          <img className="menu-item-image" src="https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/Cheeseburger.png?itok=blQwdL_0" alt="Cheeseburger"/>
          <div className="menu-item-text">
            <h3 className="menu-item-heading">
              <span className="menu-item-name">Cheeseburger</span>
              <span className="menu-item-price">4,90 LEI</span>
            </h3>
            <p className="menu-item-description">
              Descrierea Cheeseburger-ului
            </p>
          </div>
        </div>
      </div>
      <h2 className="menu-group-heading">
        KFC
      </h2>
      <div className="menu-group">
        <div className="menu-item">
          <img className="menu-item-image" src="https://ro.assets.kfcapi.com//fit-in/640x0/products/images/8_crispy_strips.png" alt="CRISPY"/>
          <div className="menu-item-text">
            <h3 className="menu-item-heading">
              <span className="menu-item-name">8 CRISPY STRIPS</span>
              <span className="menu-item-price">25.00 LEI</span>
            </h3>
            <p className="menu-item-description">
              Descrierea 8 CRISPY STRIPS-urilor
            </p>
          </div>
        </div>
        <div className="menu-item">
          <img className="menu-item-image" src="https://ro.assets.kfcapi.com//fit-in/640x0/products/images/8_hot_wings.png" alt="WINGS"/>
          <div className="menu-item-text">
            <h3 className="menu-item-heading">
              <span className="menu-item-name">8 HOT WINGS</span>
              <span className="menu-item-price">18.50 LEI</span>
            </h3>
            <p className="menu-item-description">
              Descrierea HOT WINGS-urilor
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
          :
        <>
          <h2 className='restaurantslogin'>Pentru a vedea meniurile restaurantelor va trebui sa va autentificati cu un cont</h2>
        </>
        }
    </div>
  );
}