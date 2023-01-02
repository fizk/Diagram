import type { ViewUpdate } from "@codemirror/view";

export type Maybe<T> = null | undefined | T

export type Attribute = Record<string, Maybe<string>>

export interface Definition {
    description: Maybe<string>,
    attributes: Attribute,
}

export interface State {
    attributes: Attribute,
    table: Record<string, Definition>,
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