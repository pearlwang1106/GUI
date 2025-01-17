import { Canvas, Text, Rect, Group } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { PageNavigator } from '@antv/gui';

const renderer = new CanvasRenderer({
  enableDirtyRectangleRenderingDebug: false,
  enableAutoRendering: true,
  enableDirtyRectangleRendering: true,
});

const canvas = new Canvas({
  container: 'container',
  width: 500,
  height: 500,
  renderer,
});

const pages = new Group({ name: 'group' });

function createPages(count, width, height) {
  const pages = [];
  for (let i = 0; i < count; i += 1) {
    const rect = new Rect({
      style: {
        x: 0,
        y: height * i,
        width,
        height,
        fill: '#fff',
        stroke: 'gray',
        lineWidth: 0,
      },
    });
    const text = new Text({
      style: {
        x: width / 2,
        y: height / 2,
        text: `第${i + 1}页`,
        fill: 'black',
        fontSize: 20,
        textAlign: 'center',
        textBaseline: 'middle',
      },
    });
    rect.appendChild(text);
    pages.push(rect);
  }
  return pages;
}

const pageCount = 5;
const pageWidth = 150;
const pageHeight = 200;

createPages(pageCount, pageWidth, pageHeight).forEach((shape) => pages.appendChild(shape));

const pageNavigator = new PageNavigator({
  style: {
    x: 100,
    y: 100,
    view: pages,
    width: pageWidth,
    height: pageCount * pageHeight,
    pageWidth,
    pageHeight,
    initPageNum: 1,
    orient: 'vertical',
    loop: true,
    button: {
      position: 'bottom',
    },
  },
});

canvas.appendChild(pageNavigator);
