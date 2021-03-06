import React, { useState, useEffect } from "react";
import { ReviewerListItem } from './ReviewerListItem1'
import { useDispatch } from 'react-redux'
import { getReviewersForProduct } from '../models/reviews'
import { useParams } from "react-router-dom"
import useFetch from 'use-http'
import { LoadingIndicator } from "stream-chat-react";

export const ReviewerList = ( ) => {
    const { productId } = useParams()
    const { loading, error, data = [] } = useFetch("/db/reviews/" + productId, [])

    return (
        <>
            {loading && <LoadingIndicator />}
            {data && data.map(review => 
                <ReviewerListItem {...review} key={review.id} />
            )}
        </>
    )
}