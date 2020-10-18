import axios from "axios";
import localStorage from "../Utils/LocalStorage";

const getAuthToken = (options) => {
    let result = {};
    const dataUser = localStorage().get("auth");
    if (options.token && dataUser && dataUser.token) {
        result = {
            Authorization: "Bearer " + dataUser.token,
        };
    }
    result["Content-Type"] = options.formData
        ? "multipart/form-data"
        : "application/json";
    return result;
};

const collectResponse = (response, options, status) => {
    return {
        response: response?.data,
        type: response?.status,
        message:
            (response?.status && options.message[response.status]) || false,
        headers: response?.headers,
        key: options.key,
        group: options.group,
        ...status,
    };
};

const serviceApi = async (options) => {
    let axiosConfig = {
        baseURL: process.env.REACT_APP_BASE_URL,
        timeout: 100000,
        cancelToken: options.cancelToken,
    };

    axiosConfig.headers = getAuthToken(options);
    const instance = axios.create(axiosConfig);
    return await instance(options)
        .then((res) => {
            return options.resType
                ? res
                : res?.data &&
                      collectResponse(res, options, {
                          success: true,
                          error: false,
                      });
        })
        .catch((err) => {
            return options.resType
                ? err.response
                : collectResponse(err.response, options, {
                      success: false,
                      error: true,
                  });
        });
};

export default serviceApi;
