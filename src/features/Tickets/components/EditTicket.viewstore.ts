import { Tickets } from '../store/Tickets.domainstore';
import { computed, makeObservable } from 'mobx';

export class EditTicketViewStore {
    get isEditVisible() {
        return this.domain.showEdit;
    }

    get ticketName() {
        return this.domain.editedTicket.name;
    }
    get ticketContent() {
        return this.domain.editedTicket.content;
    }

    constructor(private domain: Tickets) {
        makeObservable(this, {
            isEditVisible: computed,
            ticketName: computed,
            ticketContent: computed,
        });
    }

    onTicketNameInputChange = (value: string) => {
        return this.domain.changeTicketName(value);
    };

    onTicketContentInputChange = (value: string) => {
        return this.domain.changeTicketContent(value);
    };

    onSaveTicketClicked = async () => {
        await this.domain.saveTicket();
    };
}
