import { RootState } from '../../../app/rootState';
import { waitASecond } from '../../../mocks/Mocks';
import { Ticket } from './Tickets.store';
import { makeObservable, observable } from 'mobx';
import { Guid } from '../../../app/guid';

export const EmptyTicket = () => ({ content: '', name: '', guid: Guid.NewGuid() } as Ticket);
export class Tickets {
    editedTicket: Ticket = EmptyTicket();
    focusAddButtonRequired: boolean = false;
    showEdit: boolean = false;
    tickets: Ticket[] = [];

    constructor(private rootStore: RootState) {
        makeObservable(this, {
            editedTicket: observable,
            tickets: observable,
            showEdit: observable,
            focusAddButtonRequired: observable,
        });
    }
    startAddTicket = () => {
        this.editedTicket = EmptyTicket();
        this.showEdit = true;
    };

    changeTicketName = (name: string) => {
        this.editedTicket.name = name;
    };
    changeTicketContent = (content: string) => {
        this.editedTicket.content = content;
    };

    setFocusAddButtonRequired = (required: boolean) => {
        this.focusAddButtonRequired = required;
    };

    saveTicket = async () => {
        const ticket = this.editedTicket;
        const simulateSaveToBackend = waitASecond as (ticketToSave: Ticket) => Promise<void>;
        this.rootStore.loadingPanelStore.domain.show();
        await simulateSaveToBackend(ticket);
        this.rootStore.loadingPanelStore.domain.hide();
        this.tickets.push(ticket);
        this.showEdit = false;
        this.focusAddButtonRequired = true;
    };

    removeTicket = async (ticketGuid: Guid) => {
        const ticketIndex = this.tickets.findIndex((t) => t.guid === ticketGuid);
        if (ticketIndex < 0) return;

        const confirm = this.rootStore.confirmationStore.domain;
        const userConfirmed = await confirm.confirm();
        if (!userConfirmed) return;
        const simulateSaveToBackend = waitASecond as (ticketGuid: Guid) => Promise<void>;
        this.rootStore.loadingPanelStore.domain.show();
        await simulateSaveToBackend(ticketGuid);
        this.rootStore.loadingPanelStore.domain.hide();
        this.tickets.splice(ticketIndex, 1);
    };
}
