export const goBack = (history) => {
    history.goBack();
};

export const goToLoginPage = (history) => {
    history.push("/login");
};

export const goToHomePage = (history) => {
    history.push("/");
};

export const goToAdminListTripsPage = (history) => {
    history.push(`/viagens/admin`);
};

export const goToUserListTripsPage = (history) => {
    history.push(`/viagens/user`);
};

export const goToTripDetailsPage = (history, id) => {
    history.push(`/detalhes/${id}`);
};

export const goToApplicationFormPage = (history, id) => {
    history.push(`/inscrever/${id}`);
};

export const goToCreateTripPage = (history) => {
    history.push("/adcviagem");
};