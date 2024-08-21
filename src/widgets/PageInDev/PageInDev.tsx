import {useTranslation} from "react-i18next";
import React, {memo} from "react";
import {Card} from "shared/ui/Card";
import {VStack} from "shared/ui/Stack";
import {Icon, IconSize} from "shared/ui/Icon/Icon";
import DevIcon from "shared/assets/icons/inDev.svg";
import {Text} from "shared/ui/Text/Text";

export const PageInDev = memo(() => {
    const {t} = useTranslation();

    return (
        <Card width={'max'} padding={'20'} maxHeight>
            <VStack gap={'10'} align={'center'} maxHeight justify={'center'}>
                <Icon
                    Svg={DevIcon}
                    size={IconSize.XL}
                    color={'primary'}
                />
                <Text
                    text={t('This Page is not ready now')}
                    theme={'gray'}
                    bold
                    size={'size_lm'}
                />
            </VStack>
        </Card>
    );
});
