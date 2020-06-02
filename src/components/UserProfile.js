import React from 'react'
import { Link } from 'react-router-dom'

export const UserProfile = ({ user }) => (
    <div>
        {user && 
            (<div>
                <h1>Customer</h1>
                <h2> Name {user.profile.name}</h2>
                <p>Credits</p>
                <h2>Recent Chats</h2>
            </div>)
        }
        {user &&
            <div>
                <Link className="btn btn-secondary" to="/customer-chat">
                    Customer Chat
                </Link>
            </div>
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