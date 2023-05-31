import { useMemo } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface Lib2Props {}

const StyledLib2 = styled.div`
  color: pink;
`;

export function Lib2(props: Lib2Props) {
  const untestedVar = useMemo(() => {
    if (Math.random() > 0.5) {
      return 1 + 2;
    } else {
      return 10 + 20;
    }
  }, []);

  return (
    <StyledLib2>
      <h1>Welcome to Lib2!</h1>
      <div>Result: {untestedVar}</div>
    </StyledLib2>
  );
}

export default Lib2;
