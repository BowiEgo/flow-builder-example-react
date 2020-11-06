import 'fabric';
declare const fabric: any;

export function initCanvas(id: string) {
  let canvas = new fabric.Canvas(id);

  let rect = new fabric.Rect({
    top: 100,
    left: 100,
    width: 60,
    height: 70,
    fill: 'red',
  });

  canvas.add(rect);
}
