import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
    name: 'NumberType',
    description: 'Photobox Number Type',
    fields: () => {
        return {
            value: {
                type: GraphQLString,
                resolve(type) {
                    return type;
                }
            }
        }
    }
})