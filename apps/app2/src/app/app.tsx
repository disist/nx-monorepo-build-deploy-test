import styled from 'styled-components';

import NxWelcome from './nx-welcome';
import { Lib1 } from '@test-app/lib1';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="app2" />
      <Lib1 />
    </StyledApp>
  );
}

export default App;
