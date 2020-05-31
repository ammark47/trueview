export const insertNewReview = async (review) => {
    try {
        return await fetch('/db/reviews/create', {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.error(error)
    }
}