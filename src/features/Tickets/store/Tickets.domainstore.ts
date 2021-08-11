import { RootState } from '../../../app/rootState';
import { waitASecond } from '../../../mocks/Mocks';
import { Ticket } from './Tickets.store';
import { computed, makeObservable, observable } from 'mobx';
import { Guid } from '../../../app/guid';

export const EmptyTicket = () => ({ content: '', name: '', guid: Guid.NewGuid() } as Ticket);
export class Tickets {
    _editedTicket: Ticket = EmptyTicket();
    get editedTicket() {
        return this._editedTicket;
    }
    _focusAddButtonRequired: boolean = false;
    get focusAddButtonRequired() {
        return this._focusAddButtonRequired;
    }
    _showEdit: boolean = false;
    get showEdit() {
        return this._showEdit;
    }
    _tickets: Ticket[] = [];
    get tickets() {
        return this._tickets;
    }

    constructor(private rootStore: RootState) {
        makeObservable(this, {
            _editedTicket: observable,
            _tickets: observable,
            _showEdit: observable,
            _focusAddButtonRequired: observable,
        });
    }
    startAddTicket = () => {
        this._editedTicket = EmptyTicket();
        this._showEdit = true;
    };

    changeTicketName = (name: string) => {
        this._editedTicket.name = name;
    };
    changeTicketContent = (content: string) => {
        this._editedTicket.content = content;
    };

    setFocusAddButtonRequired = (required: boolean) => {
        this._focusAddButtonRequired = required;
    };

    saveTicket = async () => {
        const ticket = this.editedTicket;
        const simulateSaveToBackend = waitASecond as (ticketToSave: Ticket) => Promise<void>;
        this.rootStore.loadingPanelStore.domain.show();
        await simulateSaveToBackend(ticket);
        this.rootStore.loadingPanelStore.domain.hide();
        this._tickets.push(ticket);
        this._showEdit = false;
        this._focusAddButtonRequired = true;
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
