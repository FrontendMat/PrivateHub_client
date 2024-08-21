import React, {memo, VFC} from "react";
import {Icon, IconSize} from "shared/ui/Icon/Icon";
import {Text} from "shared/ui/Text/Text";
import {HStack} from "shared/ui/Stack";


interface LangSwitcherItemProps {
    icon: VFC<React.SVGProps<SVGSVGElement>>;
    text?: string;
}

export const LangSwitcherItem = memo((props: LangSwitcherItemProps) => {
    const {
        text,
        icon
    } = props;

    return (
        <HStack gap={'10'} align={'center'} max>
            <Icon Svg={icon} size={IconSize.M}/>
            {text &&
                <Text text={text} size={'size_m'} bold/>
            }
        </HStack>
    );
});
