import { PersonAction, PersonState } from "../model/Person.model";
import { obterId, removeSpChars } from '../utils/helpers';

export const personReducer = (state: PersonState, action: PersonAction): PersonState => {  
    switch (action.type) {
      case 'ADD_PERSON':      
        return {
          personList: [
            ...(
              action.person.id 
              ? state.personList.filter((person) => person.id !== action.person.id) 
              : state.personList
            ),
            { 
              id: action.person.id, 
              nome: action.person.nome, 
              idade: action.person.idade,
              telefone: action.person.telefone,
              email: action.person.email
            }
          ],                     
          personEdit: {id: obterId(), nome:'', idade: '', telefone: '', email:''}
        };
      case 'EDIT_PERSON':      
        const telefone = removeSpChars(action.person.telefone);
        const clonePerson = { ...action.person };
        const personEdit = {...clonePerson, telefone};
        return {
          personList: state.personList.filter((person) => person.id !== action.person.id),
          personEdit
        };
      case 'REMOVE_PERSON':
        return {
          personList: state.personList.filter((person) => person.id !== action.personId),
        };
      default:
        return state;
    }
  };