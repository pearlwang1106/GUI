import { Canvas } from '@antv/g';
import { Countdown } from '@antv/gui';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';

const renderer = new CanvasRenderer({
  enableDirtyRectangleRenderingDebug: false,
  enableAutoRendering: true,
  enableDirtyRectangleRendering: true,
});

// @ts-ignore
const canvas = new Canvas({
  container: 'container',
  width: 400,
  height: 300,
  renderer,
});

const countdown = new Countdown({
  style: {
    x: 0,
    y: 0,
    title: {
      text: 'now countdown',
    },
    value: {
      timestamp: Date.now() + 1000 * 10,
      format: 'HH:mm:ss',
    },
    onFinish: () => {
      console.log('计时结束');
    },
  },
});

canvas.appendChild(countdown);
