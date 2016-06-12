import React, { Component, PropTypes } from 'react'
import stores  from '../stores'
import ArticleList from './ArticleList'

class AppContainer extends Component {
    state = {
        articles: stores.articles.getAll()
    }

    componentDidMount() {
        stores.articles.addChangeListener(this.handleChange)
        stores.comments.addChangeListener(this.handleChange)
    }

    componentWillUnmount() {
        stores.articles.removeChangeListener(this.handleChange)
        stores.comments.removeChangeListener(this.handleChange)
    }

    handleChange = () => {
        this.setState({
            articles: stores.articles.getAll()
        })
    }

    render() {
        return <ArticleList articles = {this.state.articles} />
    }
}

export default AppContainer