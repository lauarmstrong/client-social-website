import React from 'react';
import './PastEvents.css';

class PastEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            date: '',
            description: '',
            image: '',
        }
        this.addEvent = this.addEvent.bind(this);

    }
    addEvent() {
        this.setState({ title: '' })
    }
    render() {
        const events = [{
            title: 'Globe Theatre in London',
            date: 'Saturday 14th March',
            description: 'A great trip to the capital for a tour around the Globe Theatre a wonder around the Borough Market and a view of St Pauls Cathedral.',
            image: require('./images/london.jpg'),
        },

        {
            title: 'Curling at selsey',
            date: 'Saturday 16th November. ',
            description: 'If your skill is pushing a wheeled frisbee across the floor and onto a target, then you too could take part in Curling!!!!. ',
            image: require('./images/curling.png'),
        },
        {
            title: 'Ten pin bowling',
            date: 'Sunday 10th. November.',
            description: 'An entertaining evening with Girls versus Boys resulted in a win for the fairer sex who accepted victory with their usual subdued celebration.',
            image: require('./images/bowling.jpg'),
        },
        {
            title: 'Trip to Brighton Pavilion',
            date: 'X',
            description: 'A very enjoyable day out in Brighton, enjoying the opulence of this magnificent building. Lunch and a trip through the North Laines ended another succesful outing.',
            image: require('./images/brighton.jpg'),
        },
        {
            title: 'Cricket on the beach',
            date: 'X',
            description: 'X',
            image: require('./images/cricket.jpg'),
        },

        ]




        const event = events.map((event) => {
            return (
                <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', justifyContent: 'center spaceAround' }}>

                    <div key={event.title} className='event-box' style={{ borderTop: 'solid gray 1px', display: 'flex' }}>


                        <div style={{ float: 'left' }}>
                            <img src={event.image} alt={event.title} style={{ height: '400px', width: '400px', padding: '20px' }} />
                        </div>

                        <div className='event-text' style={{ flex: '1', paddingTop: '60px' }}>
                            <h3 id='event-title'>{event.title}</h3><br></br>
                            <p id='event-date'>{event.date}</p>
                            <p id='event-description'>{event.description} </p>
                        </div>
                    </div>

                </div>
            )
        })
        return <div>{event}</div>


    }
}

export default PastEvents;