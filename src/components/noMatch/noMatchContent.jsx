import React from 'react';
import { NavLink } from 'react-router-dom';

function ErrorContent() {
    return (
        <section className='error_page'>
            <h1 className='error_page_title'>404</h1>
            <h2 className='error_page_subtitle'>Oups ! La page que vous demandez n'existe pas.</h2>
            <NavLink title='Acceuil' end to='/home' className='error_page_link'>retourner sur la page d'acceuil</NavLink>
        </section>
    )
}

export default ErrorContent;