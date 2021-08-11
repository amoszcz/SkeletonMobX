import React, { FC, useContext } from 'react';
import { Ticket } from '../store/Tickets.store';
import { Store } from '../../../index';
import { observer } from 'mobx-react';

interface TicketElementProps {
    ticket: Ticket;
}

const TicketElementComponent: FC<TicketElementProps> = ({ ticket }) => {
    const store = useContext(Store);
    const ticketElement = store.rootStore.ticketsStore.views.ticketElement;
    return (
        <>
            <div
                style={{
                    textAlign: 'left',
                    height: '80px',
                    position: 'relative',
                    border: '1px solid #ccc',
                    background: 'yellow',
                }}
            >
                <span style={{ position: 'absolute', top: '1px', left: '10px', fontSize: '12px' }}>
                    <label></label>
                    <span>{ticket.name}</span>
                </span>
                <span style={{ position: 'absolute', top: '40px', left: '10px' }}>
                    <label></label>
                    <span>{ticket.content}</span>
                </span>
                <button
                    onClick={async () => {
                        await ticketElement.onDeleteClicked(ticket.guid);
                    }}
                >
                    Usuń
                </button>
            </div>
        </>
    );
};
export const TicketElement = observer(TicketElementComponent);
