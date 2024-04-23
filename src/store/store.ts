
import {create} from "zustand";

export const UserLogin = create<UserData>(() => ({
    phone: '',
    firstName: '',
    lastName: '',
    password: '',

}))

type UserData = {
    phone: string;
    firstName: string;
    lastName: string;
    password: string;
}

type UserAuth = {
    auth: boolean;
}
export const AuthUser = create<UserAuth>(() => ({
    auth: false,
}))
