import React, {FC, useContext} from 'react';
import {Store} from "../../../index";
import {observer} from "mobx-react";

interface LoadingPanelProps {
}

const LoadingPanelComponent: FC<LoadingPanelProps> = () => {
    const store = useContext(Store);
    const visible = store.rootStore.loadingPanelStore.visible;
    return <>
        {visible && <>Loading...</>}
    </>;
};
export const LoadingPanel = observer(LoadingPanelComponent);