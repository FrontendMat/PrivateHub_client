import {classNames} from "shared/lib/classNames/classNames";
import cls from './ChartDataPanel.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {HStack, VStack} from "shared/ui/Stack";
import {Text} from "shared/ui/Text/Text";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";
import {ChartPanelData} from "../../types/сhart";
import {mockPieData} from "shared/ui/Charts";

interface ChartDataPanelProps {
    className?: string;
    data?: ChartPanelData[];
    isLoading?: boolean;
    barChart?: boolean;
}

export const ChartDataPanel = memo((props: ChartDataPanelProps) => {
    const {
        className,
        isLoading,
        barChart = false,
        data
    } = props;
    const {t} = useTranslation();
    
    if (isLoading) {
        return (
            <VStack 
                className={classNames(cls.ChartDataPanel, {}, [className])}
                justify={'center'}
                gap={'10'} 
                align={'center'}
            >
                <Skeleton width={40} height={16} border={'4px'}/>
                <Skeleton width={40} height={16} border={'4px'}/>
                <Skeleton width={40} height={16} border={'4px'}/>
                <Skeleton width={40} height={16} border={'4px'}/>
                <Skeleton width={40} height={16} border={'4px'}/>
            </VStack>
        )
    }

    return (
        <VStack 
            className={classNames(cls.ChartDataPanel, {}, [className])}
            max
            align={'start'}
            justify={'center'}
            gap={'10'}
        >
            {data?.map((e) => (
                <HStack key={e.id} gap={'4'} className={cls.item} align={'center'}>
                    <div 
                        style={{backgroundColor: String(e.color), height: 10, minWidth: 10, borderRadius: 4}}
                    />
                    {barChart ?
                        <>
                            <Text
                                size={'size_s'}
                                className={cls.text}
                                text={e.label + ':'}
                            />
                            <Text
                                size={'size_s'}
                                className={cls.text}
                                text={String(e.value)}
                                bold
                            />
                        </> 
                        :
                        <Text
                            size={'size_s'}
                            className={cls.text}
                            text={e.label}
                        />
                    }
                </HStack>
            ))}
        </VStack>
    );
});
