import React, { FC, useContext } from 'react';
import { Store } from '../../../index';
import { observer } from 'mobx-react';

interface ConfirmProps {}

const ConfirmComponent: FC<ConfirmProps> = () => {
    const message = 'Czy na pewno?';
    const store = useContext(Store);
    const { confirm } = store.rootStore.confirmationStore.views;
    return (
        <>
            {confirm.visible && (
                <div
                    style={{
                        position: 'absolute',
                        width: '306px',
                        height: '114px',
                        background: '#fafafa',
                        border: '1px solid black',
                    }}
                >
                    <span>{message}</span>
                    <div>
                        <button
                            onClick={() => {
                                confirm.onYesClicked();
                            }}
                        >
                            Tak
                        </button>
                        <button
                            autoFocus={true}
                            onClick={() => {
                                confirm.onNoClicked();
                            }}
                        >
                            Nie
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
export const Confirm = observer(ConfirmComponent);
