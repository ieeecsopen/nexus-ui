import { animationComponents } from './animations';
import { inputComponents } from './inputs';
import { layoutComponents } from './layouts';
import { navigationComponents } from './navigation';
import { ComponentItem } from '../../types';

export const ALL_COMPONENTS: ComponentItem[] = [
  ...animationComponents,
  ...inputComponents,
  ...layoutComponents,
  ...navigationComponents,
].sort((a, b) => parseInt(a.id) - parseInt(b.id));