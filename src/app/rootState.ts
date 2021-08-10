import {TicketsStore} from "../features/Tickets/store/Tickets.store";
import {LoadingPanel} from "../features/LoadingPanel/store/LoadingPanel.state";

export interface RootState {
    ticketsStore:TicketsStore;
    loadingPanelStore: LoadingPanel;
}

class RootStore implements RootState{
    public ticketsStore:TicketsStore;
    public loadingPanelStore: LoadingPanel;
    constructor() {
        this.ticketsStore = new TicketsStore(this);     
        this.loadingPanelStore = new LoadingPanel(this);
    }
}

export const rootStore:RootState = new RootStore();