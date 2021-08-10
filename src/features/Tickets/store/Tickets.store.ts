import {RootState} from "../../../app/rootState";
import {makeObservable, observable} from "mobx";
import {AddNewTicketButtonViewStore} from "../components/AddNewTicketButton.viewstore";
import {Tickets} from "./Tickets.domainstore";
import {EditTicketViewStore} from "../components/EditTicket.viewstore";
import {TicketsListViewStore} from "../components/TicketsList.viewstore";

export interface Ticket {
    name: string;
    content: string;
}


export interface TicketsState {
    domain: Tickets;
}

export class TicketsStore implements TicketsState {
    domain: Tickets;
    views: {
        addNewTicketButton: AddNewTicketButtonViewStore,
        editTicket: EditTicketViewStore,
        ticketList: TicketsListViewStore
    }

    constructor(private rootStore: RootState) {
        this.domain = new Tickets(this.rootStore);
        this.views = {
            addNewTicketButton: new AddNewTicketButtonViewStore(this.domain),
            editTicket: new EditTicketViewStore(this.domain),
            ticketList: new TicketsListViewStore(this.domain)
        }
        makeObservable(this, {
            domain: observable,
        });
    }
}