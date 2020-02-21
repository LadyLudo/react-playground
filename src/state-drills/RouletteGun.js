import React from 'react'

class RouletteGun extends React.Component {
    constructor() {
        super();
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }
    handleClick = () => {
        this.setState({spinningTheChamber: true})
        let timeout = setTimeout(() => {
            const newChamber = Math.floor(Math.random() * 8 + 1)
            this.setState({chamber: newChamber, spinningTheChamber: false})
        }, 2000)
    }
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    render() {
        return (
            <div>
                <p>{this.state.chamber}</p>
                <p>{this.state.chamber === this.props.bulletInChamber ? "BANG!!!" : (this.state.spinningTheChamber === true ? "Spinning..." : "You're safe!")}</p>
                <button onClick={this.handleClick}>Pull the Trigger!</button>
            </div>
        )
    }
}

export default RouletteGun