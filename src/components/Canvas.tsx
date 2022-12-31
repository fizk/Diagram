import React, { useContext, useRef, useEffect } from "react";
import { CompileWorkerContext } from '../contexts/CompileWorkerContext';
import { draw } from '../functions/draw';
import type { FunctionComponent } from "react";
import './Canvas.css'

export const Canvas: FunctionComponent = () => {
    const inputEl = useRef(null);
    const { state } = useContext(CompileWorkerContext);

    useEffect(() => {
        inputEl.current && draw(inputEl.current, state);
    }, [state]);

    return (
        <canvas className="canvas"
            ref={inputEl}
        />
    )
}