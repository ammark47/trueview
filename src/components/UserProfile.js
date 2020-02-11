import React from 'react'
import Navigation from './Navigation'


export default ({ user }) => (
    <div>
        {user && 
            (<div>
                <h1>Customer</h1>
                <h2> Name {user.profile.name}</h2>
                <p>Credits</p>
                <h2>Recent Chats</h2>
            </div>)
        }
        {!user && 
            (<div>
                <h1>Customer</h1>
                <h2> </h2>
                <p>Credits</p>
                <h2>Recent Chats</h2>
            </div>)
        }
        
    </div>
)