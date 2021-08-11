import { RootState } from '../../../app/rootState';
import { makeObservable, observable } from 'mobx';
import { waitUntil } from '../../../app/waitUntil';

export enum ConfirmationState {
    NoDecision,
    Yes,
    No,
}
export class Confirmation {
    visible: boolean = false;
    state: ConfirmationState = ConfirmationState.NoDecision;

    constructor(private rootStore: RootState) {
        makeObservable(this, {
            visible: observable,
            state: observable,
        });
    }

    confirm = async () => {
        this.visible = true;
        this.state = ConfirmationState.NoDecision;
        await waitUntil(() => this.state !== ConfirmationState.NoDecision);
        this.visible = false;
        return this.state;
    };
    makeConfirm = () => {
        this.visible = false;
        this.state = ConfirmationState.Yes;
    };
    makeReject = () => {
        this.visible = false;
        this.state = ConfirmationState.No;
    };
}
