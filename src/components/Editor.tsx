// @ts-nocheck
import React, { useContext } from "react";
import type {FunctionComponent} from "react";
import { CompileWorkerContext } from '../contexts/CompileWorkerContext'
import {useCodeEditor} from '../functions/use-code-editor';
import type {OnEditorChange} from '../types.d'
import './Editor.css';

interface Props {
    value: string
}

export const Editor: FunctionComponent<Props> = ({ value }) => {
    const { exceptions, compile } = useContext(CompileWorkerContext);
    const handleOnChange: OnEditorChange = (value: string, viewUpdate: ViewUpdate) => {
        compile(value)
    }

    // console.log(exceptions);
    const ref = useCodeEditor({ value, onChange: handleOnChange, extensions: [] });
    return <div className="editor" ref={ref} />;
}
