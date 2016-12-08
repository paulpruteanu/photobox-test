import {
    GraphQLString,
    GraphQLInt,
    GraphQLList
    } from 'graphql';
import { sequelize } from '../models';
import NumberModel from '../graphModels/number';

export default {
    type: new GraphQLList(NumberModel),
    args: {
        size: {type: GraphQLInt},
        order: {type: GraphQLString}
    },
    resolve(root, args) {
        const sanitizeOrder = (order) => {
            switch(order) {
                case 'RANDOM': return sequelize.Sequelize.fn('RANDOM');
                case 'ASC':
                case 'DESC': return `number ${order}`;
                default: return null;
            }
        };
        let
            limit = args.size || null,
            order = sanitizeOrder(args.order);
        return sequelize.models.Number.findAll({ order, limit });
    }
};