import { createContext } from 'react';


export const todosContext = createContext<any>({});

export const TodosProvider = todosContext.Provider;
