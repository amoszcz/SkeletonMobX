import { Confirmation } from './Confirmation.domainstore';
import { RootState } from '../../../app/rootState';
import { ConfirmViewStore } from '../components/Confirm.viewstore';

export class ConfirmationStore {
    domain: Confirmation;
    views: {
        confirm: ConfirmViewStore;
    };

    constructor(private rootStore: RootState) {
        this.domain = new Confirmation(rootStore);
        this.views = { confirm: new ConfirmViewStore(this.domain) };
    }
}
