import DiagramParserVisitor from './diagram/DiagramParserVisitor'
import { State, Definition } from './types.d';

export default class Visitor extends DiagramParserVisitor {
    state: State;

    constructor(state: State) {
        super();

        this.state = state;
        // this.currentSection = null;

    }

    /**
     * Visit a parse tree produced by diagramParser#definitions.
     *
     * Definition defines all components/systems/moduels.
     * A SYSMBOLS table can be constructed from these definitions.
     *
     * The definition scope can have apptributes
     *
     * @param DefinitionsContext ctx
     * @returns
     */
    visitDefinitions(ctx: any) {
        const attributes = this._extractAttributes(ctx.attributes())
        this.state.attributes = attributes;
        // console.log('global attributes', attributes);

        return this.visitChildren(ctx);
	}

    /**
     * Visit a parse tree produced by diagramParser#connections.
     *
     * Defines connections between components/systems/moduels.
     *
     * It will have the 'section:' keyword, optional apptributes and a connection_list
     *
     * @param {*} ctx
     * @returns
     */
	visitConnections(ctx: any) {
        const attributes = this._extractAttributes(ctx.attributes())

        // console.log('section attributes', attributes);
        // this.currentSection = {}

        return this.visitChildren(ctx);
	}

    /**
     * Visit a parse tree produced by diagramParser#definition.
     *
     * This will contain a SYMBOL (name of a components/systems/moduels)
     * and an optional array of attributes
     *
     * @param DefinitionContext ctx
     * @returns
     */
    visitDefinition(ctx: any) {
        const value: Definition = {
            attributes: {},
            description: null
        };


        const name = ctx.SYMBOL().getText()
        const attributes = this._extractAttributes(ctx.attributes());
        const description = ctx.description()?.description_string()?.getText() || null

        this.state.table[name] = {
            ...value,
            attributes,
            description
        };
        return this.visitChildren(ctx);
	}

	//
    /**
     * Visit a parse tree produced by diagramParser#connection.
     *
     * Connection can be a single, a wrapper or a connector
     * with attributes
     *
     * @param ConnectionContext ctx
     * @returns
     */
    visitConnection(ctx: any) {

        const single /* SingleContext */ = ctx.single();
        const wrapper /* WrapperContext */ = ctx.wrapper();
        const connector /* ConnectorContext */ = ctx.connector();
        const attributes = this._extractAttributes(ctx.attributes());

        if (single) {
            const singleName = single.SYMBOL().getText();
            // console.log('single', singleName, attributes);
        }

        if (wrapper) {
            const outerName = wrapper.SYMBOL().getText();
            const innerContext /* Inner_wrapperContext */ = wrapper.inner_wrapper();
            const innerNames = (innerContext?.SYMBOL() || []).map((item: any) => item.getText())
            // console.log('wrapper', outerName, innerNames, attributes);
        }
        if (connector) {
            const left = connector.SYMBOL(0);
            const right = connector.SYMBOL(1);
            const arrow = connector.ARROW();
            // console.log('connector', left.getText(), arrow.getText(), right.getText(), attributes);

        }

        return this.visitChildren(ctx);
	}

	// // Visit a parse tree produced by diagramParser#definition.
	// visitDefinition(ctx) {

    //     const def = ctx.SYMBOL();
    //     const attr = ctx.attributes()
    //     const attrList = attr?.attribute_list() || []

    //     this.state[def] = {
    //         attributes: [],
    //         connections: [],
    //     }

    //     attrList.forEach(element => {
    //         element.attribute().forEach(b => {
    //             this.state[def].attributes.push({
    //                 [b.ATTR(0).toString()]: b.ATTR(1)?.toString()
    //             })
    //         });
    //     });

    //     return this.visitChildren(ctx);
	// }

	// // Visit a parse tree produced by diagramParser#connection.
	// visitConnection(ctx) {
    //     const [left, right] = ctx.NAME()
    //     const connector = ctx.connector()

    //     if (left.isErrorNode && left.isErrorNode() === true) return this.visitChildren(ctx);
    //     if (right.isErrorNode && right.isErrorNode() === true) return this.visitChildren(ctx);
    //     if (connector.isErrorNode && connector.isErrorNode() === true) return this.visitChildren(ctx);

    //     const connectorType = connector.ARROW().getText();
    //     const leftType = left.getText();
    //     const rightType = right.getText();
    //     debugger;
    //     switch (connectorType) {
    //         case '-->': {
    //             this.state[`:${leftType}`].connections.push({
    //                 direction: connectorType,
    //                 to: rightType
    //             });
    //         } break;
    //         case '<--': {
    //             this.state[`:${rightType}`].connections.push({
    //                 direction: connectorType,
    //                 to: leftType
    //             });
    //         } break;
    //         case '<->': {} break;
    //         case '==>': {} break;
    //         case '<==': {} break;
    //         case '<=>': {} break;
    //         default: {} break;
    //     }

    //     console.log({connector: connector.ARROW().getText(), left: left.getText(), right: right.getText()});

    //     // console.log(ErrorNodeImpl);
    //     // if (connector) {
    //     //     console.log(connector.ARROW().toString())
    //     // }
    //     // if (left) {
    //     //     console.log(left.toString())
    //     // }
    //     // if (right) {
    //     //     console.log(right.toString())
    //     // }

	//   return this.visitChildren(ctx);
	// }

    _extractAttributes(/* AttributesContext */ attributes: any) {
        const attributeList: any[] /* : AttributeContext[] */ = attributes?.attribute() || [];

        return attributeList?.reduce((accumulator, currentValue) => {
            const left = currentValue.ATTR(0);
            const right = currentValue.ATTR(1);
            return { ...accumulator, ...{ [left.getText()]: right ? right.getText() : undefined }}
        }, {});
    }
}