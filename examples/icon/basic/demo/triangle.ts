import { Canvas } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Icon } from '@antv/gui';

const renderer = new CanvasRenderer({
  enableDirtyRectangleRenderingDebug: false,
  enableAutoRendering: true,
  enableDirtyRectangleRendering: true,
});

// @ts-ignore
const canvas = new Canvas({
  container: 'container',
  width: 300,
  height: 300,
  renderer,
});

const icon = new Icon({
  attrs: {
    symbol: 'triangle-down',
    x: 50,
    y: 50,
    r: 16,
    fill: 'green',
    text: '10.24%',
  },
});

canvas.appendChild(icon);