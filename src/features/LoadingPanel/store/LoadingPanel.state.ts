import {RootState} from "../../../app/rootState";
import { makeObservable, observable} from "mobx";
import {LoadingPanel} from "./LoadingPanel.domainstore";
import {LoadingPanelViewStore} from "../components/LoadingPanel.viewstore";

export class LoadingPanelStore {
    domain:LoadingPanel;
    views:{
        loadingPanel:LoadingPanelViewStore
    }


    constructor(private rootStore: RootState) {
        this.domain = new LoadingPanel(this.rootStore);
        this.views = {
            loadingPanel:new LoadingPanelViewStore(this.domain)
        }
        makeObservable(this, {domain:observable})
    }

   
}
