import { createStore } from 'effector';
import { onResize } from '@/features/window-resize-detector/model/resize/resize-events.ts';

export const $resizeStore = createStore<number>(0);

$resizeStore.on(onResize, (state) => state + 1);
