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
              <th>Classe Social</th>
              <th>Departamento</th>
              <th>Escolaridade</th>
              <th>Etnia</th>
              <th>Gênero</th>
            </tr>
          </thead>
          <tbody>
            { filteredWorkers?.map((worker) => (
              <tr key={ worker.id }>
                <td>{ worker.nome }</td>
                <td>{ worker.classe_social }</td>
                <td>{ worker.departamento }</td>
                <td>{ worker.escolaridade }</td>
                <td>{ worker.etnia }</td>
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
