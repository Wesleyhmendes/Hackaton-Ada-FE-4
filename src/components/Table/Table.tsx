import { useContext } from 'react';
import WorkerContext from '../../context/WorkersContext';
import * as S from './Table.styles';

function Table() {
  const { filteredWorkers } = useContext(WorkerContext);
  return (
    filteredWorkers ? (
      <S.Section>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Localidade</th>
              <th>Idade</th>
              <th>Departamento</th>
              <th>Gênero</th>
            </tr>
          </thead>
          <tbody>
            { filteredWorkers?.map((worker, i) => (
              <tr key={ i }>
                <td>{ worker.nome }</td>
                <td>{ worker.localidade }</td>
                <td>{ worker.idade }</td>
                <td>{ worker.departamento }</td>
                <td>{ worker.genero }</td>
              </tr>
            )) }
          </tbody>
        </table>
      </S.Section>
    ) : (<S.H3>Nenhum colaborador encontrado</S.H3>)
  );
}

export default Table;
