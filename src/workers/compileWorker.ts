import antlr4 from 'antlr4';
import Lexer from '../diagram/diagramLexer';
import Parser from '../diagram/diagramParser';
import Visitor from '../Visitor';
import DiagramListener from '../diagram/diagramListener'
import type ErrorListener  from 'antlr4/error/ErrorListener';
import type RecognitionException from 'antlr4/error/RecognitionException';
import type Recognizer  from 'antlr4/Recognizer';
import type Token  from 'antlr4/Token';
import type { State } from '../types.d';

interface ErrorStruct {
    line: number
    column: number
    message: string
    start: number
    stop: number
}

self.onmessage = function(event) {
    let errors: ErrorStruct[] = [];

    const state: State = {
        attributes: [],
        table: {},
        sections: {},
        tree: {},
    }

    try {
        const input = event.data
        const chars = new antlr4.InputStream(input);
        const lexer = new Lexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new Parser(tokens);
        parser.removeErrorListeners();
        parser.addErrorListener( {
            syntaxError: (
                recognizer: Recognizer,
                offendingSymbol: Token,
                line: number,
                column: number,
                msg: string,
                e: RecognitionException,
            ) => {
                errors.push({
                    line,
                    column,
                    message: msg,
                    start: offendingSymbol.start,
                    stop: offendingSymbol.stop,
                });
            }
        } as ErrorListener);
        parser.buildParseTrees = true;
        const tree = parser.program();
        tree.accept(new Visitor(state));

        antlr4.tree.ParseTreeWalker.DEFAULT.walk(new class Listener extends DiagramListener {
            exitProgram(ctx: any) {
                self.postMessage({tree: state, errors: errors})
            }
        }, tree);

    } catch (e) {
        self.postMessage({tree: null, errors: errors})
    }
}