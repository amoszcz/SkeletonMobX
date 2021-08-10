import {Tickets} from "../store/Tickets.domainstore";
import {computed, makeObservable} from "mobx";

export class TicketsListViewStore {
    get tickets() {
        return this.domain.tickets
    }

    constructor(private domain: Tickets) {
        makeObservable(this,{
            tickets:computed,
        })
    }
}