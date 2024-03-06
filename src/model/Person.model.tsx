import { ReactNode } from "react";

export interface Person {
    id: string;
    nome: string;
    idade: string;
    telefone: string;
    email: string;    
}

export interface PersonState {
  personList: Person[];
  personEdit?: Person;
}

export type PersonAction = 
  | { type: 'ADD_PERSON'; person: Person; }
  | { type: 'EDIT_PERSON'; person: Person }
  | { type: 'REMOVE_PERSON'; personId: string };

export interface PersonProviderProps {
    children: ReactNode;
}

export interface GlobalPersonType {
  state: PersonState;
  dispatch: React.Dispatch<PersonAction>;
}