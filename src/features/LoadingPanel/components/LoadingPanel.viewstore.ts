import { LoadingPanel } from '../store/LoadingPanel.domainstore';
import { computed, makeObservable } from 'mobx';

export class LoadingPanelViewStore {
    get isLoadingPanelVisible() {
        return this.domain.visible;
    }
    constructor(private domain: LoadingPanel) {
        makeObservable(this, { isLoadingPanelVisible: computed });
    }
}
