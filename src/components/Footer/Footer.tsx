import React from 'react';

const Footer = () => {
  return (
    <section id="expirience">
      <div className="container mx-auto p-4 space-y-5">
        <hr />
        <p className="text-center">Designed and Created by Bartosz Sołga COPYRIGHT@{new Date().getFullYear()}</p>
      </div >
    </section>
  );
};

export default Footer;