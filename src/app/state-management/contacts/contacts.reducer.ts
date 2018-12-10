import { Action } from "@ngrx/store";
import { ActionTypes } from "./contacts.actions";
import { Contact } from "src/models/Contact";

export const initialState = getDefaultContacts();

// managing contacts state
export function contactsReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.Increment: {
            var newClient = new Contact();
            newClient.Name = "Pera";
            state.push(newClient);
            return state;
        }

        case ActionTypes.Decrement: {
            state.splice(-1, 1);

            return state;
        }

        case ActionTypes.Reset:
            return [];

        default:
            return state;
    }
}

// getting default contacts
export function getDefaultContacts() {
    let contacts = [];
    let contact1Path = "/assets/icons/people/gentleman.svg";
    let contact1 = new Contact(
        contact1Path,
        getImageTitle(contact1Path),
        "Nikola Nikolic",
        new Date(),
        "Born in New York"
    );

    let contact2Path = "/assets/icons/people/girl.svg";
    let contact2 = new Contact(
        contact2Path,
        getImageTitle(contact2Path),
        "Jovana Jovanovic",
        new Date(),
        "Born in Singapur"
    );

    let contact3Path = "/assets/icons/people/wonder-women.svg";
    let contact3 = new Contact(
        contact3Path,
        getImageTitle(contact3Path),
        "Ema Emic",
        new Date(),
        "Born in Peking"
    );

    contacts.push(contact1, contact2, contact3);

    return contacts;
}

// getting of image title of contact
export function getImageTitle(ImagePath: string) {
    let splitPath = ImagePath.split("/");
    let path = "";
    if (splitPath != null) {
        path = splitPath[splitPath.length - 1];
        path = path.split(".")[0];
    }

    return path;
}
