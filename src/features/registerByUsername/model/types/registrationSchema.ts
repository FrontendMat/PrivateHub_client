export interface RegistrationSchema {
    username: string;
    lastname: string;
    email: string;
    password: string;
    isLoading: boolean;
    error?: string;
}