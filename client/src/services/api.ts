import axios from "axios";
import { API_URLS } from "../constants";

export const callLoginApi = async (data: Object) => {
    const response = await axios.post(API_URLS.login, data, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });

    return response.data;
};

export const callSignupApi = async (data: Object) => {
    const response = await axios.post(API_URLS.signup, data, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });

    return response.data;
};

export const callCheckAuthApi = async () => {
    const response = await axios.get(API_URLS.checkAuth);

    return response.data;
};

export const callGetArticlesApi = async () => {
    const response = await axios.get(API_URLS.getArticles);

    return response.data;
};

export const callGetArticleByIdApi = async (id: string) => {
    const response = await axios.get(`${API_URLS.getArticles}/${id}`);

    return response.data;
};