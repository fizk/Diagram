import React, {useState} from "react";
import type { FunctionComponent } from "react";
import type { Compile, State, Exception } from '../types.d';

interface Context {
    compile: Compile,
    state: State,
    exceptions: Exception[]
}

const compileWorker = new Worker(new URL('../workers/compileWorker', import.meta.url));

export const CompileWorkerContext = React.createContext<Context>({ compile: null, state: null, exceptions: [] });

const { Provider } = CompileWorkerContext;

const CompileWorkerProvider = ({ children }: { children : any}) => {
    const [state, setState] = useState<State>(null);
    const [exceptions, setExceptions] = useState<Array<Exception>>([]);
    const compile: Compile = (value: string) => compileWorker.postMessage(value);

    compileWorker.onmessage = event => {
        const { tree, errors } = event.data;
        setState(tree);
        setExceptions(errors);
    };

    return (
        <Provider value={{ compile, state, exceptions }}>
            {children}
        </Provider>
    )
}

CompileWorkerProvider.context = CompileWorkerContext

export default CompileWorkerProvider;
