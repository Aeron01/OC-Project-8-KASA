import React from 'react';
import Collapse from '../Layout/Collapse';

function AboutContent(){
    return (
        <section className='about_collapses'>
            <div className='about_collapses_content'>
                <Collapse
                    title="Fiabilité"
                    content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aus logements, et toutes informations sont régulièrement vérifiées par nos équipes."
                />
            </div>
        </section>
    )
}

export default AboutContent;