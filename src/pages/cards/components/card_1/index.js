import React from 'react';
import './style.css';

const Card1 = () => {
    const cards_list = [
        {
            title: '01',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias maxime numquam est incidunt provident corrupti saepe voluptatum sapiente nihil aperiam?',
            color: '#EB4ECB',
        },
        {
            title: '02',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias maxime numquam est incidunt provident corrupti saepe voluptatum sapiente nihil aperiam?',
            color: '#9F3CB3',
        },
        {
            title: '03',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias maxime numquam est incidunt provident corrupti saepe voluptatum sapiente nihil aperiam?',
            color: '#4F309F',
        },
    ];

    return (
        <div id="card-1">
            <div className='container'>
                {cards_list.map((card, index) => (
                    <div key={index} className='card'>
                        <div
                            className='circle'
                            style={{ backgroundColor: card.color }}>
                            <h2 className='title'>{card.title}</h2>
                        </div>
                        <div className='content'>
                            <p className='description'>{card.description}</p>
                            <a
                                href='#!'
                                className='btn'
                                style={{ backgroundColor: card.color }}>
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card1;
