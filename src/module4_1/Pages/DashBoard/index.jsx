import React from 'react'
import Content from '../../Components/content'
import { Navbar, Sidebar } from '../../Components/navbar'
import  "./index.css"
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

export default function Dashboard() {
   const token = useSelector(state => state.product.token)
    const hisory = useHistory()
    if(!token){
        hisory.push("/")
    }
        return (
        <div className="dashboard">
            <div className="side-bar">
                <Sidebar />
            </div>
            <div className="content">
                <Navbar />
                <Content />
            </div>
        </div>
    )
}
