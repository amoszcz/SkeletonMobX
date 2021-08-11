import { RootState } from '../../../app/rootState';
import { makeObservable, observable } from 'mobx';
import { waitUntil } from '../../../app/waitUntil';

export enum ConfirmationState {
    NoDecision,
    Yes,
    No,
}
export class Confirmation {
    _visible: boolean = false;
    get visible() {
        return this._visible;
    }
    _state: ConfirmationState;
    get state() {
        return this._state;
    }

    constructor(private rootStore: RootState) {
        this._state = ConfirmationState.NoDecision;
        makeObservable(this, {
            _visible: observable,
            _state: observable,
        });
    }

    confirm = async (): Promise<boolean> => {
        this._visible = true;
        this._state = ConfirmationState.NoDecision;
        await waitUntil(() => this._state !== ConfirmationState.NoDecision);
        this._visible = false;
        return (this._state as ConfirmationState) === ConfirmationState.Yes;
    };
    makeConfirm = () => {
        this._visible = false;
        this._state = ConfirmationState.Yes;
    };
    makeReject = () => {
        this._visible = false;
        this._state = ConfirmationState.No;
    };
}
