import {StateSchema} from "app/providers/StoreProvider";

export const getRegistrationEmail = (state: StateSchema) => state?.registrationForm?.email || '';
export const getRegistrationUsername = (state: StateSchema) => state?.registrationForm?.username || '';
export const getRegistrationPassword = (state: StateSchema) => state?.registrationForm?.password || '';
export const getRegistrationError = (state: StateSchema) => state?.registrationForm?.error;
export const getRegistrationIsLoading = (state: StateSchema) => state?.registrationForm?.isLoading;