import React, { FC, useContext } from 'react';
import { TicketElement } from './TicketElement';
import { Store } from '../../../index';
import { observer } from 'mobx-react';

interface TicketsListProps {}

const TicketsListComponent: FC<TicketsListProps> = () => {
    const store = useContext(Store);
    const { tickets } = store.rootStore.ticketsStore.views.ticketList;
    return (
        <>
            Lista Ticketów:
            <div style={{ width: '100%' }}>
                {tickets.map((ticket) => (
                    <TicketElement ticket={ticket} />
                ))}
            </div>
        </>
    );
};
export const TicketsList = observer(TicketsListComponent);
