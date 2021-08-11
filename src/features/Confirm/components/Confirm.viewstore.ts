import { Confirmation, ConfirmationState } from '../store/Confirmation.domainstore';
import { computed, makeObservable } from 'mobx';

export class ConfirmViewStore {
    get visible() {
        return this.domain.visible;
    }

    constructor(private domain: Confirmation) {
        makeObservable(this, { visible: computed });
    }

    onYesClicked = () => {
        this.domain.makeConfirm();
    };

    onNoClicked = () => {
        this.domain.makeReject();
    };
}
