import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToLoginPage } from "../router/goToPages";

const useProtectedPage = (functionParam) => {
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");
    
        if (token) {
            functionParam()
        } else {
            goToLoginPage(history)
        }
    }, [history]);
}
 
export default useProtectedPage;