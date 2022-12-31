import type { ViewUpdate } from "@codemirror/view";
export interface State {
    attributes: Array<Record<string, string>>[],
    table: Record<string, Array<Record<string, string>>>,
    sections: Record<string, any>,
    tree: Record<string, any>,
}

export interface Exception {
    line: number
    column: number
    message: string
    start: number
    stop: number
}

export type Compile = (value: string) => void

export type OnEditorChange = (value: string, viewUpdate: ViewUpdate) => void;