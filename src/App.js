import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route, Link

} from "react-router-dom";
import Nav from './Nav';
import Contact from './Contact';
import About from './About';
import FutureEvents from './FutureEvents';
import PastEvents from './PastEvents';

import Blog from './Blog';


export default function App() {
  return (
    <div>

      <Router>
        <div className="App">
          <Nav />


          <Switch>

            <Route path="/about" exact component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" exact component={Home} />
            <Route path="/past-events" component={PastEvents} />
            <Route path="/future-events" component={FutureEvents} />
            <Route path="/blog" component={Blog} />


          </Switch>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        </div>
      </Router>
    </div>
  );
}

const Home = () => {
  return (

    <div >
      <div className='hero-image'>
        <img src={require('./images/spring.jpg')} alt="Spring leaves" style={{ width: "100%", height: "auto", boxShadow: '0 0 5px 0px ', marginTop: '80px' }} />
        <div className='hero-text'>
          <h1>WELCOME</h1>
          <h3>Welcome to Concorde singles and social club.<br></br> Strictly for the over 60's.</h3>
          <button className='homeButton'>About Us</button>
          <button className='homeButton'>Get in Touch</button>
        </div></div>

      <div className='about-us' style={{ paddingBottom: '20px', paddingTop: '30px' }}>
        <h2>A bit about us</h2>
        <p>We are like an extended family where friendships are often made for life. <br></br>So, come and give us a try and make some new friends and join a new family <br></br>… we don’t bite and you may even enjoy yourself.</p>

      </div>
      <div className='past-social-events'>
        <h2>Past social events</h2>
        <PastEvents /><br></br>
        <Link to='/past-events'><button className='homeButton'>Read our blog</button></Link>
      </div>
      <div className='contact-us'>
        <Contact />
      </div>
    </div>
  )
}


