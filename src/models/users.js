export const checkAndInsertUser = async (userData) => {
    try {
        const response = await fetch('/db/users/', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            },
        })

        return response.json()
    } catch (error) {
        return error
    }
}