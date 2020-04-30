export const checkAndInsertUser = async (userData) => {
    try {
        return await fetch('/db/user/', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            },
        })
    } catch (error) {
        return error
    }
}