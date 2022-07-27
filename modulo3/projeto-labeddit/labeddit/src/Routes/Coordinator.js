export const goToCadastro = (navigate) => {
    navigate("/cadastro")
}

export const goToLogin = (navigate) => {
    navigate("/")
}

export const goToFeed = (navigate) => {
    navigate("/feed")
}

export const goToPosts = (navigate, id) => {
    navigate(`/posts/${id}`)
}