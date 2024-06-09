import { createContext } from "react";

type StateContextType = {
    email: string,
    name: string,
    updateUserDetails: (email: string, name: string) => void
}

export const stateContextValues: StateContextType = {
	email: "",
	name: "",
	updateUserDetails: (email: string, name: string): void => {
		stateContextValues.email = email;
        stateContextValues.name = name;
	}
};

export const StateContext = createContext<StateContextType>(stateContextValues);