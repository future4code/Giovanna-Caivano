export const goBack = (history) => {
    history.goBack();
};

export const goToLoginPage = (history) => {
    history.push("/login");
};

export const goToHomePage = (history) => {
    history.push("/");
};

export const goToListTripsPage = (history, isAdmin) => {
    const whoAmI = isAdmin ? 'admin5489' : 'user'
    history.push(`/viagens/${whoAmI}`);
};

export const goToTripDetailsPage = (history, id) => {
    history.push(`/detalhes/${id}`);
};

export const goToApplicationFormPage = (history) => {
    history.push("/inscrever");
};

export const goToUserSubscription = (history) => {
    history.push("/adcrusuario");
};

export const goToCreateTripPage = (history) => {
    history.push("/adcviagem");
};