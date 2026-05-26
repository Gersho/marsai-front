import { useState } from "react"
import { AuthContext } from "./AuthContext"

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem('user')
    );
    const [user, setUser] = useState(
        isLoggedIn ? JSON.parse(localStorage.getItem('user')) : null
    );
    const [isAdmin, setIsAdmin] = useState(
        isLoggedIn ? user?.roles.includes('admin') : false
    );
    const [isJury, setIsJury] = useState(
        isLoggedIn ? user?.roles.includes('jury') : false
    );

    function login(data) {
        localStorage.setItem('user', JSON.stringify(data))
        setIsLoggedIn(true)
        setUser(data)
        if (data.roles.includes('admin')) {
            console.log("admin yes");
            setIsAdmin(true);
        }
        if (data.roles.includes('jury')) {
            console.log("jury yes");
            setIsJury(true);
        }
    }

    function logout() {
        localStorage.removeItem('user')
        setIsLoggedIn(false);
        setUser(null);
        setIsAdmin(false);
        setIsJury(false);
    }

    return (
        <AuthContext.Provider value=
            {{
                isLoggedIn,
                isAdmin,
                isJury,
                user,
                login,
                logout
            }}>
            {children}
        </AuthContext.Provider>
    )
}