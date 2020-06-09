import React from "react";
import { ReviewerListItem } from './ReviewerListItem'

export const ReviewerList = ( product ) => {
    const listOfReviewers = [{}]

    return (
        <>
            {listOfReviewers && listOfReviewers.map(reviewer => 
                <ReviewerListItem reviewer product />
            )}
        </>
    )
}