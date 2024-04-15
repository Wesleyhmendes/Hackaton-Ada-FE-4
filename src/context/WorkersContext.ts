import { Dispatch, SetStateAction, createContext } from 'react';
import WorkerType from '../interfaces/workerInterface';

type WorkerContextType = {
  filteredWorkers: WorkerType[] | undefined;
  setFilteredWorkers: React.Dispatch<any>;
};

const WorkerContext = createContext({} as WorkerContextType);

export default WorkerContext;
