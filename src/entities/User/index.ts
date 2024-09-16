export {
    getUserAuthData, getUserError
} from "./model/selectors/getUserAuthData/getUserAuthData";

export {
    getUserInited
} from "./model/selectors/getUserInited/getUserInited";

export {checkIsUserAuth} from './model/services/checkIsUserAuth/checkIsUserAuth';
export {logoutAuth} from './model/services/logoutUser/logoutUser'

export {
    userActions,
    userReducer
} from './model/slice/userSlice';

export type {
    User,
    UserSchema,
    AuthResponse
} from './model/types/user';