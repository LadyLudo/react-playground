import React from 'react'

class HelloWorld extends React.Component {
    constructor() {
        super();
        this.state = {
            who: 'world'
        }
    }
    setWho = (event) => {
        this.setState({
            who: event.target.name
        })
    }
    render() {
        return(
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.setWho} name='world'>World</button>
                <button onClick={this.setWho} name='friend'>Friend</button>
                <button onClick={this.setWho} name='React'>React</button>

            </div>
        )
    }
}

export default HelloWorld