import { GraphQLObjectType, GraphQLInt, GraphQLList } from 'graphql';
import NumberType from './numberType';
import { isPrime, isPerfectSquare, isOdd } from '../helpers/maths';

export default new GraphQLObjectType({
    name: 'Number',
    description: 'Photobox Number',
    fields: () => {
        return {
            number: {
                type: GraphQLInt,
                resolve(number) {
                    return number.number;
                }
            },
            types: {
                type: new GraphQLList(NumberType),
                resolve(number) {
                    const types = [];
                    if (isPrime(number.number)) {
                        types.push('prime number');
                    }
                    if (isPerfectSquare(number.number)) {
                        types.push('perfect square');
                    }
                    types.push(`${isOdd(number.number) ? 'odd' : 'even'} number`);
                    types.push(`${number.number >= 0 ? 'positive' : 'negative'} number`);
                    return types;
                }
            }
        }
    }
})