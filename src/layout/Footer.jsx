import React from 'react';
import './index.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer_container-logo'>
                <img src='/assets/logo-kasa-footer.png' alt="logo-kasa" className='footer_container-logo_logo' />
                <span className='footer_container-logo_text'>© 2020 Kasa. All right reserved</span>
            </div>
        </footer>
    )
}

export default Footer;