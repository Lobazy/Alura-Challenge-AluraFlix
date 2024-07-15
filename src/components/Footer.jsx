import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Desenvolvido por Vitória. Créditos ao video do Matheus Battist.</p>
      </div>
    </footer>
  );
};

export default Footer;