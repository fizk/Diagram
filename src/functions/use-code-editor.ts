
import { useEffect } from "react";
import {onUpdate} from "./on-update";
import useCodeMirror from "./use-code-mirror";

export function useCodeEditor({ value, onChange, extensions }: {
    value: string
    onChange: () => void
    extensions: Array<any>
}) {
    const { ref, view } = useCodeMirror([onUpdate(onChange), ...extensions]);

    useEffect(() => {
        if (view) {
            const editorValue = view.state.doc.toString();

            if (value !== editorValue) {
                view.dispatch({
                    changes: {
                        from: 0,
                        to: editorValue.length,
                        insert: value || "",
                    },
                });
            }
        }
    }, [value, view]);

    return ref;
}