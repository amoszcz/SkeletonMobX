import React, { FC, useContext, useEffect, useRef } from 'react';
import { Store } from '../../../index';
import { observer } from 'mobx-react';

interface AddNewTicketButtonProps {}

const AddNewTicketButtonComponent: FC<AddNewTicketButtonProps> = () => {
    const buttonAdd = useRef<HTMLButtonElement | null>(null);
    const store = useContext(Store);
    const { isAddButtonDisabled, isFocusRequired, onAddNewTicketClicked, onResetFocusRequired } =
        store.rootStore.ticketsStore.views.addNewTicketButton;

    useEffect(() => {
        if (isFocusRequired) {
            onResetFocusRequired();
            buttonAdd.current?.focus();
        }
    }, [isFocusRequired]);

    return (
        <>
            <button
                autoFocus={true}
                ref={(btn) => {
                    if (btn) buttonAdd.current = btn;
                }}
                onClick={() => {
                    onAddNewTicketClicked();
                }}
                disabled={isAddButtonDisabled}
            >
                Dodaj nowy ticket
            </button>
        </>
    );
};
export const AddNewTicketButton = observer(AddNewTicketButtonComponent);
