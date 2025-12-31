import { animationComponents } from './animations';
import { inputComponents } from './inputs';
import { layoutComponents } from './layouts';
import { navigationComponents } from './navigation';
import { expandedComponents } from './expanded_items';
import { ComponentItem } from '../../types';

export const ALL_COMPONENTS: ComponentItem[] = [
  ...animationComponents,
  ...inputComponents,
  ...layoutComponents,
  ...navigationComponents,
  ...expandedComponents,
].sort((a, b) => {
  return a.title.localeCompare(b.title);
});
