import {useCallback, useState} from "react";

export function useGetModals () {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [text, setText] = useState('');

    const setAlertText = useCallback((value: string) => {
        setText(value)
    }, [])

    const onSuccess = useCallback(() => {
        setIsSuccess(true)
    }, [])

    const openModal = useCallback(() => {
        setIsSuccess(false)
        setIsAddModalOpen(!isAddModalOpen)
    }, [isAddModalOpen])

    const openEditModal = useCallback(() => {
        setIsSuccess(false)
        setIsEditModalOpen(!isEditModalOpen)
    }, [isEditModalOpen])

    return {
        isSuccess,
        text,
        isAddModalOpen,
        isEditModalOpen,
        openModal,
        onSuccess,
        openEditModal,
        setAlertText
    }
}