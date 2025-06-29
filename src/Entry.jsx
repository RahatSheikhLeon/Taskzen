import { Outlet } from "react-router-dom"
export function Entry() {
    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    )
}