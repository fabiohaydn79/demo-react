import { ReactNode, createContext, useContext, useReducer } from 'react';
import { personReducer } from '../reducer/Person.reducer'
import { Person, GlobalPersonType, PersonState } from '../model/Person.model';

const initialState: PersonState = {
    personList: [],
    personEdit: {} as Person,
  };

const GlobalContext = createContext<GlobalPersonType>({
    state: initialState,
    dispatch: () => {}
  });

export const useGlobalContext = () => useContext(GlobalContext);

export const PersonProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(personReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};