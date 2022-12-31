import { EditorView, ViewUpdate } from "@codemirror/view";
import type {OnEditorChange} from '../types.d'

export function onUpdate(onChange: OnEditorChange) {
    return EditorView.updateListener.of((viewUpdate: ViewUpdate) => {
        if (viewUpdate.docChanged) {
            const doc = viewUpdate.state.doc;
            const value = doc.toString();
            onChange(value, viewUpdate);
        }
    });
}