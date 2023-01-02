import React, { useContext, Fragment } from "react";
import { CompileWorkerContext } from '../contexts/CompileWorkerContext'
import type { FunctionComponent } from "react";


export const Symbols: FunctionComponent = () => {
    const { state, exceptions } = useContext(CompileWorkerContext);

    console.log(exceptions)
    return (
        <>
        <ul>
            {exceptions.map((exception, i) => (
                <li key={i}>{exception.message} {exception.line}:{exception.column} </li>
            ))}
        </ul>
        <ul>
            {Object.entries(state?.table || {}).map(([key, value]) => (
                <li key={key}>
                    <>
                        {Object.entries(value.attributes).map(([k, v]) => `${k}=${v}`).join(', ')}
                    </>
                </li>
            ))}
        </ul>
        </>
    )
}