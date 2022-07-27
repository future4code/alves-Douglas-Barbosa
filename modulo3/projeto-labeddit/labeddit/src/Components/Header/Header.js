import React from 'react'
import { Container, LogoutButton, MiniLogo, StyledGoBack, StyledSpan } from './Styled'
import Logo from '../../Assets/Logo.svg'
import { goToLogin } from '../../Routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import GoBack from '../../Assets/GoBack.svg'

export default function Header() {
    const navigate = useNavigate()

    const clearToken = (navigate) => {
        localStorage.clear('token')
        goToLogin(navigate)
    }

    const conditionalButton = () => {
        if (window.location.pathname.includes("/feed")) {
            return <LogoutButton onClick={() => clearToken(navigate)}>Logout</LogoutButton>
        } else if (window.location.pathname.includes("/cadastro")) {
            return <LogoutButton onClick={()=>goToLogin(navigate)}>Entrar</LogoutButton>
        } else if (window.location.pathname.includes("/posts" || "/Posts")) {
            return <LogoutButton onClick={() => goToLogin(navigate)}>Logout</LogoutButton>
        }
    }

    const conditionalGoBack = () => {
        if (window.location.pathname.includes("/posts")) {
            return <StyledGoBack src={GoBack} />
        } else {
            return <StyledSpan></StyledSpan>
        }
    }

    return (
        <Container>
            {conditionalGoBack()}
            <MiniLogo src={Logo} />
            {conditionalButton()}
        </Container>
    )
}
