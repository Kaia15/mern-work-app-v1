import React, { useContext, useState, useEffect, createContext } from "react"

const AuthContext = createContext({})

const AuthProvider = ({children}) => {
    const [isLoggingIn, setIsLoggingIn]  = useState(false)
    const [isLoggedOut, setIsLoggedOut] = useState(false)
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [validToken, setValidToken] = useState(false);
    const [tasks, setTasks] = useState([])
    const [taskId, setTaskId] = useState("")
    const [isValid, setIsValid] = useState(false)
    const [startAlarm, setStartAlarm] = useState(false)
    const [alarm, setAlarm] = useState([])
    const [allConversations, setAllConversations] = useState([])
    const [currentChat, setCurrentChat] = useState(null)

    return (<AuthContext.Provider value = {{isLoggingIn, setIsLoggingIn, isLoggedOut, setIsLoggedOut, user, setUser,
                                            profile, setProfile, validToken, setValidToken, tasks, setTasks, taskId, 
                                            setTaskId, isValid, setIsValid, startAlarm, setStartAlarm, alarm, setAlarm,
                                            allConversations, setAllConversations, currentChat, setCurrentChat}}>
        {children}
    </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }