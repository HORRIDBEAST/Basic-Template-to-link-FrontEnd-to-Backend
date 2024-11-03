import { createContext, useContext, useState } from "react";
import axios from 'axios';

const BASE_URL = "http://localhost:5082/api/v1/";
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    const addIncome = async (income) => {
        try {
            const response = await axios.post(`${BASE_URL}add-income`, income);
            if (response && response.data) {
                setIncomes(prevIncomes => [...prevIncomes, response.data]);
            } else {
                setError("Failed to add income: No data received.");
            }
        } catch (err) {
            setError(err.response ? err.response.data.message : "An error occurred");
        }
    };

    return (
        <GlobalContext.Provider value={{ addIncome, incomes, error }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
