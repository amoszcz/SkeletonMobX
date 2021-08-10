import {RootState} from "../../../app/rootState";
import {makeObservable, observable} from "mobx";

export class LoadingPanel {
    visible:boolean = false
    
    constructor(private rootStore:RootState) {
       makeObservable(this,{visible:observable})
    }
    
    show = () => {
        this.visible = true;
    }
    
    hide = () => {
        this.visible = false;
    }
}