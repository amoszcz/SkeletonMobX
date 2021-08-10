import React, {FC, useContext} from 'react';
import {Store} from "../../../index";
import {observer} from "mobx-react";

interface LoadingPanelProps {
}

const LoadingPanelComponent: FC<LoadingPanelProps> = () => {
    const store = useContext(Store);
    const {isLoadingPanelVisible} = store.rootStore.loadingPanelStore.views.loadingPanel;
    return <>
        {isLoadingPanelVisible && <>Loading...</>}
    </>;
};
export const LoadingPanel = observer(LoadingPanelComponent);