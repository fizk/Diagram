import paper from 'paper';
import type { State } from '../types.d';

let i = false;

export const draw = (canvas: HTMLCanvasElement, state: State) => {


    if (i === false) {
        i = true
        paper.setup(canvas);
    }

    // console.log(state);
    paper.project.clear()

    const components = Object.entries(state?.table || {});

    components.forEach(([key, value], i) => {
        new paper.Path.Rectangle({
            point: [10, (i *70) + 10],
            size: [130, 60],
            strokeColor: 'black',
            strokeWidth: 2
        });

        const attributes = Object.entries(value);

        attributes.forEach(([attrName, attrValue], j) => {
            new paper.Path.Rectangle({
                point: [(j * 30) + 15, (i *70) + 3],
                size: [15, 15],
                strokeColor: 'black',
                fillColor: 'white',
                strokeWidth: 2
            });
        });

    });

    // @ts-ignore
    paper.view.draw();
}