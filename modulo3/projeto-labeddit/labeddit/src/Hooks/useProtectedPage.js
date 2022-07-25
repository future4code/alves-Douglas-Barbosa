import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

export const ProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token === null ) {
            goToLoginPage('')
        } else if (token === true) {
            goToAdminHomePage('')
        }
    }, [navigate])
} 