import React  from "react";
import { Canvas } from './Canvas';
import { Symbols } from './Symbols'
import { Editor } from './Editor'
import type { FunctionComponent } from "react";
import './App.css';

export const App: FunctionComponent  = () => {
    return (
        <>
            <div className="app-editor">
                <Editor value={'global:\n'}/>
            </div>
            <div className="app-canvas">
                <Canvas/>
            </div>
            <div className="app-console">
                <Symbols/>
            </div>
        </>
    )
}
