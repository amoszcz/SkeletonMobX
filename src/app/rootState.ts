import { TicketsStore } from '../features/Tickets/store/Tickets.store';
import { LoadingPanelStore } from '../features/LoadingPanel/store/LoadingPanel.state';

export interface RootState {
    ticketsStore: TicketsStore;
    loadingPanelStore: LoadingPanelStore;
}

class RootStore implements RootState {
    public ticketsStore: TicketsStore;
    public loadingPanelStore: LoadingPanelStore;
    constructor() {
        this.ticketsStore = new TicketsStore(this);
        this.loadingPanelStore = new LoadingPanelStore(this);
    }
}

export const rootStore: RootState = new RootStore();
