import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export function Logout() {
      const navigate = useNavigate();
      const logOutUser = JSON.parse(localStorage.getItem('loggedInUser')) || null
      console.log('delete Item:', logOutUser)
      localStorage.removeItem('loggedInUser');

      useEffect(() => {
            if (logOutUser === null) {
                  navigate('/login')
            }
      })


      return;
}