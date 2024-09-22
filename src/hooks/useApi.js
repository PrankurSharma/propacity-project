import { CONSTANTS } from "../data/Constants";

export default function useApi() {
    // this is a custom hook that handles different api call types. So, the logic gets re-used without having to write the api logic again and again.
    //Currently, only get logic is being used in this project but I have made all the logics accessible.
    function apiRequest(method, url, body = undefined) {
        url = CONSTANTS.BASE_URL + url;
        return new Promise((resolve, reject) => {
            fetch(url, {
                method,
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then((res) => {
                    if (res.error) {
                        reject(new Error(res.error.message));
                    }
                    else {
                        resolve(res);
                    }
                })
                .catch(reject);
        });
    }

    function get(url) {
        return apiRequest('GET', url);
    }

    function post(url, data) {
        return apiRequest('POST', url, data);
    }

    function put(url, data) {
        return apiRequest('PUT', url, data);
    }

    function del(url, data) {
        return apiRequest('DELETE', url);
    }

    return { get, post, put, del };
}