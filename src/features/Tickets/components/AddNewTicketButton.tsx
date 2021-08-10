import React, {FC, useContext, useEffect, useRef} from 'react';
import {Store} from "../../../index";
import {observer} from "mobx-react";

interface AddNewTicketButtonProps {
}

const AddNewTicketButtonComponent: FC<AddNewTicketButtonProps> = () => {
    const buttonAdd = useRef<HTMLButtonElement | null>(null);
    const store = useContext(Store);
    const {startAddTicket, focusAddButtonRequired, showEdit, setFocusAddButtonRequired} = store.rootStore.ticketsStore;
    useEffect(() => {
        if (focusAddButtonRequired) {
            setFocusAddButtonRequired(false);
            buttonAdd.current?.focus();
        }
    }, [focusAddButtonRequired])
    return <>
        <button autoFocus={true} ref={btn => {
            if (btn) buttonAdd.current = btn;
        }} onClick={() => {
            startAddTicket();
        }} disabled={showEdit}>Dodaj nowy ticket
        </button>
    </>;
};
export const AddNewTicketButton = observer(AddNewTicketButtonComponent);