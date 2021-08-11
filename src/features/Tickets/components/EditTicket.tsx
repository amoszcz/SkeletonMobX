import React, { FC, useContext } from 'react';
import { Store } from '../../../index';
import { observer } from 'mobx-react';

interface EditTicketProps {}

const EditTicketComponent: FC<EditTicketProps> = ({}) => {
    const store = useContext(Store);
    const {
        isEditVisible,
        onSaveTicketClicked,
        onTicketContentInputChange,
        onTicketNameInputChange,
        ticketContent,
        ticketName,
    } = store.rootStore.ticketsStore.views.editTicket;
    return (
        <>
            {isEditVisible && (
                <>
                    Nazwa:{' '}
                    <input
                        autoFocus={true}
                        value={ticketName}
                        onChange={(e) => {
                            onTicketNameInputChange(e.target.value);
                        }}
                    />
                    Opis:{' '}
                    <textarea
                        value={ticketContent}
                        onChange={(e) => {
                            onTicketContentInputChange(e.target.value);
                        }}
                    />
                    <button
                        onClick={async () => {
                            await onSaveTicketClicked();
                        }}
                    >
                        Zapisz
                    </button>
                </>
            )}
        </>
    );
};
export const EditTicket = observer(EditTicketComponent);
