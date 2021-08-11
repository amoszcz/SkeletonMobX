import { TicketsStore } from '../features/Tickets/store/Tickets.store';
import { LoadingPanelStore } from '../features/LoadingPanel/store/LoadingPanel.state';
import { ConfirmationStore } from '../features/Confirm/store/Confirmation.store';

export interface RootState {
    ticketsStore: TicketsStore;
    loadingPanelStore: LoadingPanelStore;
    confirmationStore: ConfirmationStore;
}

class RootStore implements RootState {
    public ticketsStore: TicketsStore;
    public loadingPanelStore: LoadingPanelStore;
    public confirmationStore: ConfirmationStore;
    constructor() {
        this.ticketsStore = new TicketsStore(this);
        this.loadingPanelStore = new LoadingPanelStore(this);
        this.confirmationStore = new ConfirmationStore(this);
    }
}

export const rootStore: RootState = new RootStore();
