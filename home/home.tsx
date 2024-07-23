import React, { useEffect } from 'react';

// @ts-ignore
import { addButtonClickEvents } from './script.js';

// @ts-ignore
import { addPanolens } from './panolens/config.js';

import './home.css';

const Home: React.FC = () => {
  useEffect(() => {
    addButtonClickEvents();
    // addPanolens();

    // Limpeza opcional
    return () => {
      const buttons = document.querySelectorAll('button');
      buttons.forEach(button => {
        button.onclick = null;
      });
    };
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="landing">
          <div className="img-container"></div>
        </div>

        <div className="block story">
          <h2>Máquinas importantes para a <span className='marker'>história da Unicamp</span></h2>

          <div className="gallery">
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
          </div>
        </div>

        <div className="block meeting">
          <h2>Conheça a <div className='meet-the-logo'></div></h2>

          <div className="gallery">
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
          </div>
        </div>

        <div className="block ratings">
        </div>

        <div className="block scheduling">
          <h2>Agende sua visita</h2>

          <p>Sua visita será em: </p>

          <div className="options">
            <button className='selected' type="button"><i className="fa-solid fa-person"></i> Individual</button>
            <button type="button"><i className="fa-solid fa-people"></i> Grupo pequeno</button>
            <button type="button"><i className="fa-solid fa-people-group"></i> Grupo grande</button>
          </div>

          <div className="forms">
            <div className="form individual selected">
              <h3>Individual</h3>
              
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
    
            <div className="form grupo-pequeno">
              <h3>Grupo pequeno</h3>
    
              <p>Lorem ipsum dolor sit amet: </p>

              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              
              <form action="#" method="post">
      
              </form>
            </div>
    
            <div className="form grupo-grande">
              <h3>Grupo grande</h3>
    
              <p>Lorem ipsum dolor sit amet: </p>

              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>

              <form action="#" method="post">
    
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
