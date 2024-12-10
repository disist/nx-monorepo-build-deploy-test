import { useMemo } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface Lib2Props {}

const StyledLib2 = styled.div`
  color: blue;
`;

export function Lib2(props: Lib2Props) {
  const untestedVar = useMemo(() => 1 + 2, []);

  return (
    <StyledLib2>
      <h1>Welcome to Lib2!</h1>
      <div>Result: {untestedVar}</div>
    </StyledLib2>
  );
}

export default Lib2;
