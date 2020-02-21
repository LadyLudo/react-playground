import React from 'react'


class Tabs extends React.Component {
    static defaultProps = { tabs: [] };
    constructor() {
        super();
        this.state= {
            currentTabIndex: 0
        }
    }

    generateButtons = () => {
       return ( this.props.tabs.map((button, index) => (
                <button key={index} onClick={() => this.handleButtonClick(index)}>{button.name}</button>
        ))
       )}
    handleButtonClick = (index) => {
        this.setState({currentTabIndex: index})
    }
    openContent = () => {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
            <div className='content'>
                {currentTab.content}
            </div>
        )
    }

    render() {

        return (
            <div>
                {this.generateButtons()}
                {!!this.props.tabs.length && this.openContent()}
            </div>
        )
    }
}

export default Tabs