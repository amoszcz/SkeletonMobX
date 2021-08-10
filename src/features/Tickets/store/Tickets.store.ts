import {RootState} from "../../../app/rootState";
import {makeObservable, observable} from "mobx";
import {waitASecond} from "../../../mocks/Mocks";

export interface Ticket {
    name: string;
    content: string;
}

export const EmptyTicket = {content: '', name: ''} as Ticket;

export interface TicketsState {
    tickets: Ticket[];
    showEdit:boolean;
    focusAddButtonRequired:boolean;
    editedTicket:Ticket;
    startAddTicket:()=>void;
    changeTicketName:(name:string)=>void;
    changeTicketContent:(content:string)=>void;
    saveTicket:()=>Promise<void>;
}

export class TicketsStore implements TicketsState{
    editedTicket: Ticket = EmptyTicket;
    focusAddButtonRequired: boolean = false;
    showEdit: boolean = false;
    tickets: Ticket[] = [];
    
    constructor(private rootStore:RootState) {
        makeObservable(this,{
            editedTicket:observable,
            focusAddButtonRequired:observable,
            showEdit:observable,
            tickets:observable
        });
    }
    
    startAddTicket = () => {
        this.editedTicket = EmptyTicket;
        this.showEdit = true;        
    }

    changeTicketName = (name:string)=>{
        this.editedTicket.name = name;
    }
    changeTicketContent = (content:string)=>{
        this.editedTicket.content = content;
    }
    
    setFocusAddButtonRequired = (required:boolean)=>{
        this.focusAddButtonRequired = required;
    }
    
    saveTicket =  async () => {
        const ticket = this.editedTicket;
        const simulateSaveToBackend = waitASecond as (ticketToSave:Ticket)=>Promise<void>;
        this.rootStore.loadingPanelStore.show();
        await simulateSaveToBackend(ticket);
        this.rootStore.loadingPanelStore.hide()
        this.tickets.push(ticket);
        this.showEdit = false;
        this.focusAddButtonRequired = true;
    }
    
}