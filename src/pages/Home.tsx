import FilterInput from '../components/FilterInput/FilterInput';
import Goals from '../components/Goals/Goals';
import Insights from '../components/Insights/Insights';
import Table from '../components/Table/Table';
import * as S from './Home.styles';

function Initial() {
  return (
    <S.Section>
      <FilterInput />
      <Table />
      <Insights />
      <Goals />
    </S.Section>
  );
}

export default Initial;
