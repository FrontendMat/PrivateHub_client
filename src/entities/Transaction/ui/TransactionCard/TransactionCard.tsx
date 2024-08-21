import {classNames} from "shared/lib/classNames/classNames";
import cls from './TransactionCard.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Card} from "shared/ui/Card";
import {Text} from "shared/ui/Text/Text";
import {HStack} from "shared/ui/Stack";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import EyeIcon from "shared/assets/icons/eye.svg";
import {Icon, IconSize} from "shared/ui/Icon/Icon";

interface TransactionCardProps {
    className?: string
}

export const TransactionCard = memo((props: TransactionCardProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();

    return (
        <Card
            theme={'background'}
            padding={'20'}
            className={classNames(cls.TransactionCard, {}, [className])}
        >
            <HStack align={'center'} gap={'40'}>
                <HStack align={'center'} gap={'10'}>
                    <Text text={'Category: '} bold theme={'gray'}/>
                    <Text text={'2300'} bold theme={'normal'} />
                </HStack>
                <Icon Svg={EyeIcon} size={IconSize.S} color={'gray'} pointer/>
            </HStack>
            {/*<HStack>*/}
            {/*    <Text text={'Category'}/>*/}
            {/*    <Text*/}
            {/*        theme={'green'}*/}
            {/*        size={'size_l'}*/}
            {/*        text={'36000'}*/}
            {/*        bold*/}
            {/*    />*/}
            {/*</HStack>*/}
            {/*<Button max theme={ButtonTheme.BACKGROUND}>More</Button>*/}
        </Card>
    );
});
