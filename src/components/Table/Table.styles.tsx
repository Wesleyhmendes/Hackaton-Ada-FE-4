import styled from 'styled-components';

export const Section = styled.section`
  @media(min-width: 768px) {
    table {
      border-collapse: collapse;
      margin: 0 auto;
      margin-top: 3rem;
      margin-bottom: 3rem;
      width: 90%;
    }

    tr {
      border: 1px solid #ddd;
    }
    
    td {
      padding: 0.5rem;
      text-align: center;
    }
    
    tr:nth-child(even) {
      background-color: #f2f2f2;

      &:hover { background-color: #42d7a1; color: #fff; }
    }
    
    tr:nth-child(odd) {
      background-color: #ffffff;
      &:hover { background-color: #42d7a1; color: #fff; }
    }
  }

  @media(min-width: 1280px) { table { width: 70%; } }
`;

export const H3 = styled.section`
  text-align: center;
  padding-top: 3rem;
`;
