export const goToCadastro = (navigate) => {
    navigate("/cadastro")
}

export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToFeed = (navigate) => {
    navigate("/")
}

export const goToPosts = (navigate, id) => {
    navigate(`/posts/${id}`)
}