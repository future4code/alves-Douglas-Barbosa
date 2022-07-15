export const goToLoginPage = (navigate) => {
    navigate("/loginPage")
}

export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToListTrips = (navigate) => {
    navigate("/listTripsPage")
}

export const goToListApplication = (navigate) => {
    navigate("/applicationFormPage")
}

export const goToAdminHomePage = (navigate) => {
    navigate("/adminHomePage")
}

export const goToTripDetailsPage = (navigate, id) => {
    navigate(`/tripdetails/${id}`);
  } 

  export const goToCreateTripPage = (navigate) => {
    navigate('/createTripPage')
  }