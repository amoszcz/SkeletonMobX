import { RootState } from '../../../app/rootState';
import { makeObservable, observable } from 'mobx';
import { AddNewTicketButtonViewStore } from '../components/AddNewTicketButton.viewstore';
import { Tickets } from './Tickets.domainstore';
import { EditTicketViewStore } from '../components/EditTicket.viewstore';
import { TicketsListViewStore } from '../components/TicketsList.viewstore';
import { Guid } from '../../../app/guid';
import { TicketElementViewStore } from '../components/TicketElement.viewstore';

export interface Ticket {
    name: string;
    content: string;
    guid: Guid;
}

export interface TicketsState {
    domain: Tickets;
}

export class TicketsStore implements TicketsState {
    domain: Tickets;
    views: {
        addNewTicketButton: AddNewTicketButtonViewStore;
        editTicket: EditTicketViewStore;
        ticketList: TicketsListViewStore;
        ticketElement: TicketElementViewStore;
    };

    constructor(private rootStore: RootState) {
        this.domain = new Tickets(this.rootStore);
        this.views = {
            addNewTicketButton: new AddNewTicketButtonViewStore(this.domain),
            editTicket: new EditTicketViewStore(this.domain),
            ticketList: new TicketsListViewStore(this.domain),
            ticketElement: new TicketElementViewStore(this.domain),
        };
        makeObservable(this, {
            domain: observable,
        });
    }
}
