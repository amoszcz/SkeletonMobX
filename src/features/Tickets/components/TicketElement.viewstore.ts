import { Tickets } from '../store/Tickets.domainstore';
import { Guid } from '../../../app/guid';

export class TicketElementViewStore {
    constructor(private domain: Tickets) {}

    onDeleteClicked = async (ticketGuid: Guid) => {
        await this.domain.removeTicket(ticketGuid);
    };
}
