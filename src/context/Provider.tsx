import { useState } from 'react';
import Context from './WorkersContext';

type ProviderProps = {
  children: React.ReactNode;
};

export default function WorkerProvider({ children }: ProviderProps) {
  const [filteredWorkers, setFilteredWorkers] = useState<any>();

  const value = {
    filteredWorkers,
    setFilteredWorkers,
  };
  return (
    <Context.Provider value={ value }>
      { children }
    </Context.Provider>
  );
}
