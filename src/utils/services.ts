import strings from "../global/constants/Strings";
import urls from "../global/constants/UrlConstants";



export const handleCheckApiStatus = async (error: any) => {
    if (error.status === 401) {

        return true;
    }
    // Checks if the error code is 403  -> Logout the user
    if (
        error.status === 403
    ) {
        return false;
    }
    return false;
};

// Authenticated Call Headers
export const getCallParams = async (methodType: string, body?: any) => {
    const accessToken = "Bearer " + "token";
    return {
        method: methodType,
        headers: await getHeaderObject(
            accessToken,
            strings.applicationJSON
        ),
        body: JSON.stringify(body),
    };
};

export async function getSearchedCallParams(methodType: string, body?: any) {
    const accessToken = "Bearer " + "token";
    return {
        method: methodType,
        headers: await getHeaderObject(
            accessToken,
            strings.applicationJSON
        ),
        body: body,
    };
}

export async function getAccessToken(
    methodType: string,
    body?: any,
    token?: string
) {
    const accessToken = "Bearer " + token;
    return {
        method: methodType,
        headers: await getHeaderObject(
            accessToken,
            strings.applicationJSON
        ),
        body: JSON.stringify(body),
    };
}

// Unauthenticated Call Headers
export const getNoAuthCallParams = (methodType: string, body?: any) => {
    return {
        method: methodType,
        headers: strings.applicationJSON,
        body: JSON.stringify(body),
    };
};

export const getFileCallParams = async (body: any) => {
    const accessToken = "Bearer " + "token";
    return {
        method: "POST",
        headers: await getHeaderObject(
            accessToken,
            strings.multipartForm
        ),
        body: body,
    };
};

export const getDeleteCallParams = async (body: any = {}) => {
    const accessToken = "Bearer " + "token";
    return {
        method: "POST",
        headers: await getHeaderObject(
            accessToken,
            strings.applicationJSON
        ),
        body: JSON.stringify(body),
    };
};

export const getNoAuthFileCallParams = (body: any) => {
    return {
        method: "POST",
        headers: strings.multipartForm,
        body: body,
    };
};

export async function getHeaderObject(
    accessToken: string,
    contentType: any,
) {
    try {
        if (accessToken) {
            return {
                ...contentType,
                Authorization: accessToken,
            };
        }
        // history.push(urls.landingViewPath);
        return null;
    } catch (error: any) {
        throw error;
    }
}

export const makeCall = async (
    callName: string,
    callParams: any,
    convertToJSON: boolean = true,
    param: boolean = false
) => {
    try {
        let call = fetch(callName, callParams);
        let timeout = param === true ? getTimeOnPromise() : getTimeoutPromise();
        const response: any = await Promise.race([timeout, call]).catch((error) => {
            throw error;
        });
        let json;
        if (convertToJSON) {
            json = await response.json();
        }
        if (response && response.ok) {
            return json;
        }
        throw json;
    } catch (error: any) {
        if (await handleCheckApiStatus(error)) {
            // return history.push(urls.landingViewPath);
        }
        throw error;
    }
};

export const getTimeoutPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(
            () =>
                reject({
                    error: true,
                    message: "Something went wrong. Please reload the page.",
                }),
            30000 // 30 Seconds
        );
    });
};

export const getTimeOnPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(
            () =>
                reject({
                    error: true,
                    message: "You are fetching large data.",
                }),
            300000 //  6mins
        );
    });
};

export const fetchDocument = async (
    url: string,
    methodType: string,
    bodyObject?: any
) => {
    try {
        const requestOption = await getCallParams(methodType, bodyObject);
        const response = await fetch(url, requestOption);
        if (response.ok) {
            return response.blob();
        } else {
            return response.text().then((text) => {
                const data = text && JSON.parse(text);
                const error = (data && data.errorMessage) || response.statusText;
                return Promise.reject(error);
            });
        }
    } catch (error: any) {
        throw error;
    }
};

export const makeCallFile = async (callName: string, callParams: any) => {
    try {
        let call = fetch(callName, callParams);
        let timeout = getTimeoutPromise();
        const response: any = await Promise.race([timeout, call]).catch((err) => {
            throw err;
        });
        if (response && response.ok) {
            return response.blob();
        } else {
            throw response.blob();
        }
    } catch (error: any) {
        throw error;
    }
};


