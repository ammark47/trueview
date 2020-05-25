import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export const Reviewer = () => {
    const user = useSelector(state => state.postgres_user)

    return (
        <>
            <Link className="btn btn-secondary" to="/reviewer/create_review">
                Create Review
            </Link>
        </>
    )
}