import { getCallParams, makeCall } from "../../../utils/services";

export async function login(email: string, password: string,) {
    const body = {
        email: email,
        pwd: password,
    };
    try {
        const callParams = await getCallParams("POST", body);
        const response: any = await makeCall("loginurl", callParams);
        return response;
    } catch (error: any) {
        throw error;
    }
}