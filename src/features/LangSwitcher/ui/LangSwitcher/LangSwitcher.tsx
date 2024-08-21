import { useTranslation } from 'react-i18next';
import React, {memo, useCallback, useState, useMemo} from 'react';
import UkraineIcon from "shared/assets/icons/flags/ukraine.svg";
import UKIcon from "shared/assets/icons/flags/unitedKingdom.svg";
import { ListBox, ListBoxItems } from "shared/ui/ListBox/ListBox";
import { LangSwitcherItem } from "../LangSwitcherItem/LangSwitcherItem";
import {Language, LanguageMap} from "../../model/types/lang";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();
    const languageMap: LanguageMap = useMemo(() => (
        {
            ua: {
                text: <LangSwitcherItem text="Українська" icon={UkraineIcon} />,
                icon:<LangSwitcherItem icon={UkraineIcon} />,
            },
            en: {
                text: <LangSwitcherItem text="English" icon={UKIcon} />,
                icon: <LangSwitcherItem icon={UKIcon} />
            }
        }
    ), []);

    let initialLang = (localStorage.getItem('i18nextLng'));
    if (initialLang === 'uk-UA') {
        initialLang = 'en'
    }

    const [currentLang, setCurrentLang] = useState<Language>(initialLang as Language);

    const currentFlag = useMemo(() => languageMap[currentLang]?.icon, [languageMap, currentLang]);

    const itemsList: ListBoxItems[] = useMemo(() => [
        {
            id: '1',
            value: 'ua',
            content: languageMap.ua.text
        },
        {
            id: '2',
            value: 'en',
            content: languageMap.en.text
        },
    ], []);

    const handleChangeLanguage = useCallback(async (value: Language) => {
        await i18n.changeLanguage(value);
        setCurrentLang(value);
    }, [i18n]);

    return (
        <ListBox<Language>
            clear
            direction={'right'}
            className={className}
            value={currentFlag}
            items={itemsList}
            onChange={handleChangeLanguage}
        />
    );
});