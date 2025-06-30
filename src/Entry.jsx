import { Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react"
export function Entry() {

    const navigate = useNavigate()
    const getLoggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || null

    // console.log(getLoggedInUser)
    useEffect(() => {
        if (getLoggedInUser == null) {
            navigate('/login')
        }
    }, [])


    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    )
}