import React from 'react';
import '../styles/styles.css';
import Navbar from '../components/Navbar';

function Home() {
    return (


    <div>

      <Navbar />
    
      <div className="home-container">
          <h1> Seja Bem-vindo !!</h1>
          <p>Esta é a sua aplicação de gestão de finanças. Utilize o menu para navegar.</p> 

        </div>

      
    </div>
    );
}


export default Home;