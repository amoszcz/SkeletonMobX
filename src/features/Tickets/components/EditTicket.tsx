import React, {FC, useContext} from 'react';
import {Store} from "../../../index";
import {observer} from "mobx-react";

interface EditTicketProps {
}

const EditTicketComponent: FC<EditTicketProps> = ({}) => {
    const store = useContext(Store);
    const {showEdit, editedTicket, changeTicketName,changeTicketContent,saveTicket} =store.rootStore.ticketsStore;    
    return <>
        {showEdit && <>
            Nazwa: <input autoFocus={true} value={editedTicket.name} onChange={e => {
            changeTicketName(e.target.value)
        }
        }/>
            Opis: <textarea value={editedTicket.content} onChange={e => {
            changeTicketContent(e.target.value) 
        }
        }/>
            <button onClick={async () => {
                await saveTicket();
            }}>Zapisz
            </button>
        </>}

    </>;
};
export const EditTicket = observer(EditTicketComponent);