import React from 'react'


class Bomb extends React.Component {
    constructor() {
        super();
        this.state= {
            count: 0
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState( {count: this.state.count + 1})
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return(
            <div>
                <p>{this.state.count >= 8 ? clearInterval(this.interval) : this.state.count}</p>
                <p>{this.state.count >= 8 ? "BOOM!!!" : (this.state.count % 2 === 0 ? "tick"  : "tock")}</p>
            </div>
        )
    }
}

export default Bomb