import { DynamicCodeBlock } from './lazy';
import { Wrapper } from './wrapper';

export function dynamicCodeBlock() {
  return (
    <Wrapper>
      <DynamicCodeBlock />
    </Wrapper>
  );
}