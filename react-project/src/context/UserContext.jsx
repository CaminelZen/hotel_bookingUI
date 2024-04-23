import  {createContext, useEffect, useState} from "react";
import PropTypes from 'prop-types';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [token, setToken] = useState (localStorage.getItem("hotelBookingToken"));

    useEffect (() => {
        const fetchUser = async () => {
            const requestOptions = {
                method: "GET",
                Headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            };
            const response = await fetch ("/users", requestOptions);

            if (!response.ok) {
                setToken(null);   
            } else {
                // Corrected: Set the updated token value
                localStorage.setItem("hotelBookingToken", token);
            }
            
        };
        fetchUser();
    }, [token]);

    return (
        <UserContext.Provider value={[token, setToken]}>
            {props.children}
        </UserContext.Provider>
    )
};
UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};