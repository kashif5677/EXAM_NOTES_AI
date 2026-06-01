
import axios from "axios"
import { setUserData } from "../redux/userSlice.js"
import { serverUrl } from "../App.jsx";

export const getCurrentUser = async (dispatch) => {
    try {
        const result = await axios.get(serverUrl + "/api/user/currentuser", {
            withCredentials: true
        })
        console.log(result.data);
        dispatch(setUserData(result.data))
    } catch (error) {
        console.error(error.response?.status);
        console.error(error.response?.data);
        console.error(error.message);
        // Don't throw - user just not authenticated, that's ok
        if (error.response?.status === 401) {
            dispatch(setUserData(null))
        }
    }
}

export const generateNotes = async (payload) => {
    try {
        const result = await axios.post(serverUrl + "/api/notes/generate-notes", payload, { withCredentials: true })
        console.log(result.data);
        return result.data
    } catch (error) {
        console.log(error);
        throw error
    }
}