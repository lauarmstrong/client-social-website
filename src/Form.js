import React from 'react';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { title: '' };
    }
    handleChange(event) {
        this.setState({ title: event.target.value })
    }
    render() {
        this.title = this.state.title
        return (
            <form>
                <input value={this.title} onChange={this.handleChange} />
            </form>
        )
    }
}


export default Form;