import React from 'react';

function Footer() {
    var date= new Date();
    let year= date.getFullYear();
  return <div className="footer">
            <h4>Copyright @ {year}</h4>
         </div>;
}

export default Footer;
