import React from 'react';
import { useParams } from 'react-router-dom';
import Collapser from '../../components/collapser/Collapser'
import Carousel from '../../components/carousel/Carousel';
import RatingScale from '../../components/ratingScale/RatingScale';
import QueryLogements from '../../api/fetch';
import Error from '../error/Error';


function HousingPage(){
    const housings = QueryLogements()
    
    const {id} = useParams()
    const housing = housings.find(housing => housing.id === id)
    if (!housing) {
        return <Error message="Le logement n'existe pas !" />
    }

    return (
        <section key={housing.id} className='housing_page'>
            <Carousel
                img={housing.pictures}
            />

            <div className='housing_page_header'>
                <article className='housing_page_header_infos'>
                    <h1 className='housing_page_header_infos_title'>{housing.title}</h1>
                    <h2 className='housing_page_header_infos_subtitle'>{housing.location}</h2>
                    <div className='housing_page_header_infos_tags'>
                        {housing.tags.map((tag, i) => (
                            <p key={i} className='housing_page_header_tags_infos_tag'>{tag}</p>
                        ))}
                    </div>
                </article>

                <article className='housing_page_header_hoster'>
                        <div className='housing_page_header_hoster_infos'>
                            <p className='housing_page_header_hoster_infos_name'>{housing.host.name}</p>
                            <img className='housing_page_header_hoster_infos_img' src={housing.host.picture} alt="host-cover" />
                        </div>
                        <RatingScale
                            scaleValue={housing.rating}
                        />
                </article>
            </div>

            <article className='housing_page_collapses'>
                <div className='housing_page_collapses_content'>
                    <Collapser
                        title="Description"
                        content={housing.description}
                    />
                </div>
                <div className='housing_page_collapses_content'>
                    <Collapser
                        title="Équipements"
                        content={
                            <ul>
                            {
                            housing.equipments.map((equipment, i) => 
                                <li key={i}> {equipment}</li>
                            )}
                            </ul>
                        }
                    />
                </div>
            </article>
        </section>
    )
}

export default HousingPage;