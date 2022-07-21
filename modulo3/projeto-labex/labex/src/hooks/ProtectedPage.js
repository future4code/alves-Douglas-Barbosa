import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminHomePage, goToLoginPage } from "../routes/Coordinator";

export const ProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token === null ) {
            goToLoginPage(navigate)
        } else if (token === true) {
            goToAdminHomePage(navigate)
        }
    }, [navigate])
}