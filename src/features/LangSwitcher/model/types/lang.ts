import {ReactNode} from "react";

export type Language = 'ua' | 'en';

export type LanguageMap = {
    [key in Language]: {
        text: ReactNode;
        icon: ReactNode;
    };
};