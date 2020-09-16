import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToLoginPage } from "../router/goToPages";

const useProtectedPage = (goToPageFunction) => {
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");
    
        if (token) {
            goToPageFunction()
        } else {
            goToLoginPage(history)
        }
    }, []);
}
 
export default useProtectedPage;