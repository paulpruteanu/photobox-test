import { GraphQLObjectType } from 'graphql';
import NumberQuery from './number';

export default new GraphQLObjectType({
    name: "Query",
    description: "This is the root endpoint query for numbers",
    fields: () => {
        return {
            numbers: NumberQuery
        }
    }
})