import React from 'react';

function Blog(props) {
    const sidebar = (
        <ul>
            {props.events.map((event) => <li key={this.event.title}></li>
            )}
        </ul>
    );
    const content = props.events.map((event) =>
        <div key={this.event.id}>
            <h3>{this.event.title}</h3>
            <p>{this.event.date}</p>
            <p>{this.event.description}</p>
        </div>
    );
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

export default Blog;
