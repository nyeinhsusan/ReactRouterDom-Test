import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    const ActiveBtn={
        'border-bottom' : '3px solid red','margin-top':'5px'
    }
    return (
        <div>
            <NavLink to='/' style={({isActive})=>isActive ? ActiveBtn : undefined} className="btn m-10 gap-3"><button>Home</button></NavLink>
            <NavLink to='/about' style={({isActive})=> isActive ? ActiveBtn : undefined} className="btn m-3" ><button>About</button></NavLink>
            <NavLink to='/Blog' style={({isActive})=> isActive ? ActiveBtn : undefined} className="btn m-3"><button>Blog</button></NavLink>
        </div>
    )
}

export default Navigation
