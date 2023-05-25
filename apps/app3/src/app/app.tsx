import styled from 'styled-components';

import NxWelcome from './nx-welcome';
import { Lib2 } from '@test-app/lib2';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="app3" />
      <Lib2 />
    </StyledApp>
  );
}

export default App;
