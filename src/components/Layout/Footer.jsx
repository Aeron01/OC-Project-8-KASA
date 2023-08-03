import React from 'react';
import logoFooter from '../../styles/assets/logo-kasa-footer.png';

function Footer() {
    return (
        <footer className='footer'>
            <img src={logoFooter} alt="logo-kasa" className='footer_logo' />
            <span className='footer_text'>© 2020 Kasa. All right reserved</span>
        </footer>
    )
}

export default Footer;