import React , {PropTypes} from 'react'


const Route = (props,context) => {
    // debugger
    return( <div>{showContent(props,props.path,context.Cpath)}</div>)
}   

const showContent = (props,path,CurrentP) => {
    if(path === CurrentP){
        return (<div>{React.createElement(props.component)}</div>)
    }
}


Route.contextTypes = {
    Cpath : PropTypes
}

export default Route
