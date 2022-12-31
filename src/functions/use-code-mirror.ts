import React, { useState, useEffect, useRef } from "react";
import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import type { Extension } from "@codemirror/state";

interface Result {
    ref: React.MutableRefObject<DocumentFragment>,
    view: EditorView
}

const useCodeMirror = (extensions: Extension[]): Result =>  {
    const ref = useRef<DocumentFragment>();
    const [view, setView] = useState();

    useEffect(() => {
        const view = new EditorView({
            extensions: [
                basicSetup,
                /**
                 * Check each language package to see what they support,
                 * for instance javascript can use typescript and jsx.
                 */
                // javascript({
                //     jsx: true,
                //     typescript: true,
                // }),

                ...extensions,
            ],

            parent: ref.current,
            // @ts-ignore
            // parent: ref,
        });

        // @ts-ignore
        setView(view);

        /**
         * Make sure to destroy the codemirror instance
         * when our components are unmounted.
         */
        return () => {
            view.destroy();
            setView(undefined);
        };
    }, []);

    return { ref, view };
}

export default useCodeMirror;