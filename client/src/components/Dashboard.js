import React from 'react'
import Sidebar from './Sidebar'
import {Container} from 'react-bootstrap'
export default function Dashboard({id}) {
    return (
        <div className="d-flex" style={{height:'100vh'}}>
            <Sidebar id={id}/>
            This is a Dashboard
        </div   >
    )
}
