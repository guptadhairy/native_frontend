import axios from "axios";

const serverUrl = "https://native-todo-5ulh.onrender.com/api/v1";

export const login = (email, password) => async(dispatch) => {
    try {
        dispatch({type: "loginRequest"});

        const {data} = await axios.post(`${serverUrl}/login`, {email, password},{
            headers: {
                "Content-Type": "application/json",
            },
        });
        dispatch({type: "loginSuccess", payload: data});
    } catch (error) {
        dispatch({type: "loginFailure", payload: error.response.data.message});
    }
};
export const logout = () => async(dispatch) => {
    try {
        dispatch({type: "logoutRequest"});
        await axios.get(`${serverUrl}/logout`);
        dispatch({type: "logoutSuccess"});
    } catch (error) {
        dispatch({type: "logoutFailure", payload: error.response.data.message});
    }
};
export const loadUser = () => async(dispatch) => {
    try {
        dispatch({type: "loadUserRequest"});

        const {data} = await axios.get(`${serverUrl}/me`);
        dispatch({type: "loadUserSuccess", payload: data});
    } catch (error) {
        dispatch({type: "loadUserFailure", payload: error.response.data.message});
    }
};

export const addTask = (title, description) => async(dispatch) => {
    try {
        dispatch({type: "addTaskRequest"});

        const {data} = await axios.post(`${serverUrl}/newtask`, {title, description}, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        dispatch({type: "addTaskSuccess", payload: data.message});
    } catch (error) {
        dispatch({type: "addTaskFailure", payload: error.response.data.message});
    }
};

export const updateTask = (taskId) => async(dispatch) => {
    try {
        dispatch({type: "updateTaskRequest"});
        const {data} = await axios.get(`${serverUrl}/task/${taskId}`);
        dispatch({type: "updateTaskSuccess", payload: data.message});
    } catch (error) {
        dispatch({type: "updateTaskFailure", payload: error.response.data.message});
    }
};

export const deleteTask = (taskId) => async(dispatch) => {
    try {
        dispatch({type: "deleteTaskRequest"});
        const {data} = await axios.delete(`${serverUrl}/task/${taskId}`);
        dispatch({type: "deleteTaskSuccess", payload: data.message});
    } catch (error) {
        dispatch({type: "deleteTaskFailure", payload: error.response.data.message});
    }
};

export const updateProfile = (formData) => async(dispatch) => {
    try {
        dispatch({type: "updateProfileRequest"});
        const {data} = await axios.put(`${serverUrl}/updateprofile`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        dispatch({type: "updateProfileSuccess", payload: data.message});
    } catch (error) {
        dispatch({type: "updateProfileFailure", payload: error.response.data.message});
    }
}