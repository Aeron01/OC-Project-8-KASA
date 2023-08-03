import React from 'react';
import Collapse from '../Collapser/Collapse';

function AboutContent(){

    const content = [
        {
            "title":"Fiabilité",        
            "content":"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aus logements, et toutes informations sont régulièrement vérifiées par nos équipes."
        },
        {
            "title":"Respect",
            "content":"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            "title":"Service",
            "content":"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },
        {
            "title":"Sécurité",
            "content":"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        },
    ];
    return (
        <section className='about_collapses'>
            <div className='about_collapses_content'>
                <Collapse            
                    title={content.map("title")}
                    content={content.map("content")}
                />
            </div>
        </section>
    )
}

export default AboutContent;