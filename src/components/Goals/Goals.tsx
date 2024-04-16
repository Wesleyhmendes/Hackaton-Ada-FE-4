import { Progress } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import metas from '../../data/Metas.json';
import colaboradores from '../../data/colaboradores.json';

function Goals() {
  let totalMulheres = 0;

  colaboradores.forEach((colaborador) => {
    if (colaborador.genero === 'Feminino') totalMulheres += 1;
  });

  const mediaMulheres = Math.floor((totalMulheres / colaboradores.length) * 100);
  console.log(mediaMulheres);
  return (
    <section>
      <h2>Meta gerais da Corp Solutions</h2>
      <div>
        <p>Diversidade de gênero:</p>
        <p>
          {`A meta atual é para mulheres na Corp Solutioné ${metas.gênero.Feminino}%.`}
        </p>
        <Progress.Line
          percent={ mediaMulheres }
          strokeColor={ mediaMulheres >= metas.gênero.Feminino ? '#2FC18C' : '#F44336' }
        />
      </div>
    </section>
  );
}

export default Goals;
