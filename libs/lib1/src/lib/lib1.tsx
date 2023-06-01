import { useMemo } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface Lib1Props {
  someVariable?: boolean;
}

const StyledLib1 = styled.div`
  color: pink;
`;

export function Lib1(props: Lib1Props) {
  const anyConditionalValue = useMemo(() => {
    if (props.someVariable) {
      return 1000;
    }

    return 2000;
  }, [props.someVariable]);

  const additionalUntestedConditionalValue = useMemo(() => {
    if (props.someVariable) {
      return 12345;
    }

    return 23456;
  }, [props.someVariable]);

  return (
    <StyledLib1>
      <h1>Welcome to Lib1!</h1>
      <div>{anyConditionalValue}</div>
      <div>{additionalUntestedConditionalValue}</div>
    </StyledLib1>
  );
}

export default Lib1;
