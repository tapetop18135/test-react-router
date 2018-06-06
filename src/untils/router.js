import React , {Component , PropTypes} from 'react'

 

export default class Router extends Component{
    static childContextTypes = {
        onPathChange : PropTypes ,
        Cpath : PropTypes
    }


    getChildContext = () => {
        return {
            onPathChange : this.onPathChange ,
            Cpath : this.state.Cpath
        }
    }

    getCurrentPath = () => {
        return (window.location.pathname)
    }

    
    state = {
        Cpath : this.getCurrentPath()
    }

    onPathChange = (path) => {
        window.history.pushState(null,'',path)
        this.setState({Cpath : this.getCurrentPath()})
    }

    render(){
        // console.log(this.state.Cpath)
        return this.props.children
    }
}
