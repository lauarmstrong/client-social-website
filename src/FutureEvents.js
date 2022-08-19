import React from 'react';
import './PastEvents.css';

const FutureEvents = () => {
    const events = [{
        title: 'Meal before the club',
        date: 'Tuesday 17th March. ',
        description: '',
        image: "require('./images/curling.png')",
    },
    {
        title: 'Afternoon Tea at Manor Nursury',
        date: 'Thursday 19th March',
        description: 'Tea and cakes to satisfy your sweet tooth.',
        image: '',
    },
    {
        title: 'Turkish meal at Mezze in Bognor',
        date: 'Friday 20th March',
        description: 'Experience the flavours from where Europe meets Asia.',
        image: '',
    },
    {
        title: 'TBC',
        date: '',
        description: '',
        image: '',
    },
    {
        title: 'TBC',
        date: '',
        description: '',
        image: '',
    },
    ]




    const event = events.map((event, index) => {
        return (
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', justifyContent: 'center spaceAround', marginTop: '100px' }}>

                <div key={index} className='event-box' >


                    <div className='event-text' style={{ float: 'right', width: '100%', borderTop: 'solid gray 1px' }}>
                        <img src={event.image} alt={event.title} style={{ float: 'left' }} />
                        <h3 id='event-title'>{event.title}</h3>
                        <br></br>

                        <p id='event-date'>{event.date}</p>
                        <p id='event-description'>{event.description} </p>
                    </div>
                </div>

            </div>
        )
    })
    const alertMessage = alert('CORONAVIRUS: In light of the current situation with Coronavirus, the committee has taken the decision to suspend Tuesday meeting until further notice. Please stay safe and may we meet again soon.')
    return (
        <div>
            {alertMessage}
            {event}
        </div>
    )

}

export default FutureEvents;