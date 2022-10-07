import jwt_decode from 'jwt-decode'

export const checkAuth = ({setIsValid}) => {
    const validToken = localStorage.getItem('validToken');

        if (validToken !== null) {
            const parseToken = JSON.parse(validToken);
            // console.log(parseToken)
            const user = JSON.parse(localStorage.getItem('user'))
            const currentDate = new Date()
            if (user !== null) {
                const decodedToken = jwt_decode(user.accessToken)
                const expired = (decodedToken.exp * 1000 < currentDate.getTime())
                if (!expired) {
                    setIsValid(parseToken['valid']);
                } else {
                    setIsValid(false)
                    localStorage.setItem('validToken', JSON.stringify({ valid: false }))
                    localStorage.setItem('user', JSON.stringify(null))
                }
            }
            else {
                setIsValid(false)
            }
        } else {
            setIsValid(false)
        }
}