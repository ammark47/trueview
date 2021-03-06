import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export const Reviewer1 = () => {
    const user = useSelector(state => state.postgres_user)

    return (
        <>
            <Link className="btn btn-secondary" to="/reviewer/create-review">
                Create Review
            </Link>
            <Link className="btn btn-secondary" to="/reviewer/pending-chat-requests">
                Pending Requests
            </Link>
        </>
    )
}