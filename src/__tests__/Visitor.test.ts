import antlr4 from 'antlr4';
import Lexer from '../diagram/DiagramLexer';
import Parser from '../diagram/DiagramParser';
import Visitor from '../Visitor';
import { State } from '../types.d';

test('basic `table`', () => {
    const expected: State = {
        attributes: {},
        sections: {},
        table: {
            'A': { attributes: {}, description: null },
            'B': { attributes: {}, description: null },
        },
        tree: {}
    };
    const actual: State = compile(`
        global:
        A
        B
    `);

    expect(actual).toEqual(expected);
});

test('basic `table` with global attributes', () => {
    const expected: State = {
        attributes: { size: 'big' },
        sections: {},
        table: {},
        tree: {}
    };
    const actual: State = compile(`
        global: [size=big]
    `);

    expect(actual).toEqual(expected);
});

test('basic `definition` with `attributes`', () => {
    const expected: State = {
        attributes: {},
        sections: {},
        table: {
            'A': { attributes: { 'database': undefined }, description: null },
            'B': { attributes: { 'language': 'js' }, description: null },
        },
        tree: {}
    };
    const actual: State = compile(`
        global:
        A[database]
        B[language=js]
    `);

    expect(actual).toEqual(expected);
});

test('basic `definition` with `description`', () => {
    const expected: State = {
        attributes: {},
        sections: {},
        table: {
            'A': { attributes: {}, description: 'some description'}
        },
        tree: {}
    };
    const actual: State = compile(`
        global:
        A {some description}
    `);

    expect(actual).toEqual(expected);
});

test('basic `definition` with multiline `description`', () => {
    const expected: State = {
        attributes: {},
        sections: {},
        table: {
            'A': { attributes: {}, description: `
            some description
        `
            }
        },
        tree: {}
    };
    const actual: State = compile(`
        global:
        A {
            some description
        }
    `);

    expect(actual).toEqual(expected);
});

test('basic `definition` with `attributes` and `description`', () => {
    const expected: State = {
        attributes: {},
        sections: {},
        table: {
            'A': {
                attributes: {lang: 'js' },
                description: 'some description'
            }
        },
        tree: {}
    };
    const actual: State = compile(`
        global:
        A [lang=js] {some description}
    `);

    expect(actual).toEqual(expected);
});


function compile(value: string): State {
    const state: State = {
        attributes: {},
        table: {},
        sections: {},
        tree: {},
    }

    const chars = new antlr4.InputStream(value);
    const lexer = new Lexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new Parser(tokens);
    parser.removeErrorListeners();

    parser.buildParseTrees = true;
    const tree = parser.program();
    tree.accept(new Visitor(state));

    return state;
}