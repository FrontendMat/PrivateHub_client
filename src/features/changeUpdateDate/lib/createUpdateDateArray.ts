import {ListBoxItems} from "shared/ui/ListBox/ListBox";

export const createUpdateDateArray = (n: number) => {
    const array: ListBoxItems[] = [];

    for (let i = 1; i <= n; i++) {
        array.push({value: i, content: i.toString()})
    }
    return array;
}