
import React , {PropTypes}from 'react'

const handleClick = (to,onPathChange) => {
    return ((e) => {
        e.preventDefault()
        onPathChange(to)})
}

const AddclassName = (classN,to,path) => {
    // c.log(to , path)
    if(to === path){
        classN = classN + " active"
    }
    return classN
} 


const Link = (props,context) => {
    return(
        <a className={AddclassName(props.className , props.to , context.Cpath)} 
        onClick={handleClick(props.to ,context.onPathChange)}  href="#">{props.children}</a>
    )
}

Link.contextTypes = {
    onPathChange : PropTypes ,
    Cpath : PropTypes
}

export default Link