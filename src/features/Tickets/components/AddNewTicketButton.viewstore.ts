import { Tickets } from '../store/Tickets.domainstore';
import { computed, makeObservable } from 'mobx';

export class AddNewTicketButtonViewStore {
    get isFocusRequired() {
        return this.tickets.focusAddButtonRequired;
    }

    get isAddButtonDisabled() {
        return this.tickets.showEdit;
    }

    constructor(private tickets: Tickets) {
        makeObservable(this, {
            isFocusRequired: computed,
            isAddButtonDisabled: computed,
        });
    }

    onResetFocusRequired = () => {
        this.tickets.setFocusAddButtonRequired(false);
    };

    onAddNewTicketClicked = () => {
        this.tickets.startAddTicket();
    };
}
