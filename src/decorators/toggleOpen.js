import React, { Component } from 'react'
//decorator === HOC(Higher Order Component)
export default (CustomComponent) => class DecoratedComponent extends Component {

    constructor(props) {
        super()

        this.state = {
            isOpen: false
        };
    }

    toggleOpen = (ev) => {
        if (ev && ev.preventDefault) ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return <CustomComponent {...this.props} isOpen = {this.state.isOpen} toggleOpen = {this.toggleOpen}/>
    }
}