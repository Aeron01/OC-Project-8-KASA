import React from 'react';
import Card from '../../components/card/Card'
import QueryLogements from '../../api/fetch';
import { useNavigate } from 'react-router-dom';

function DisplayCards() {
    const housings = QueryLogements()
    const navigate = useNavigate();

    if(housings === null) {
        navigate("/error");
        return (<></>)
    }

    return (
        <section className='housings_container'>
            <ul className='housings_list'>
                {housings.map(({id, title, cover}) => (
                    <Card
                        key={id}
                        id={id}
                        title={title}
                        cover={cover}
                    />
                ))}
            </ul>
        </section>
    )
}

export default DisplayCards;