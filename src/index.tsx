import React from "react";
import { createRoot } from "react-dom/client";
import { App } from './components/App'
import CompileWorkerContext from './contexts/CompileWorkerContext'

const container = document.querySelector('[data-react]');
const root = createRoot(container);
root.render(
    <CompileWorkerContext>
        <App />
    </CompileWorkerContext>
);