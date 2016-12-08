import { expect } from 'chai';
import assert from 'assert';
import NumberModel from '../../src/graphModels/number';
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql';
import sinon from 'sinon';
import proxyquire from 'proxyquire';
import sinonAsPromised from 'sinon-as-promised';

describe('Testing number query', () => {

    var
        NumberQuery,
        findAllStub,
        fnStub;

    beforeEach(() => {
        findAllStub = sinon.stub().resolves({
            dataValues: {
                ids: 'foo, bar'
            }
        });
        fnStub = sinon.stub().returns('foo');
        NumberQuery = proxyquire('../../src/queries/number', {
            '../models': {
                sequelize: {
                    models: {
                        Number: {
                            findAll: findAllStub
                        }
                    },
                    Sequelize: {
                        fn: fnStub
                    }
                }
            }
        });
    });

    it('Should be a list of numbers', () => {
        expect(JSON.stringify(NumberQuery.default.type)).to.equal(JSON.stringify(new GraphQLList(NumberModel)));
    });

    it('Should accept size and order filters', () => {
        expect(JSON.stringify(NumberQuery.default.args)).to.equal(JSON.stringify({
            size: { type: GraphQLInt },
            order: { type: GraphQLString }
        }));
    });

    it('Should fetch the numbers by size', () => {
        NumberQuery.default.resolve(null, { size: 3 });
        assert(findAllStub.calledOnce);
        assert(findAllStub.calledWith({
            order: null,
            limit: 3
        }));
    });

    it('Should fetch the numbers by size and order', () => {
        NumberQuery.default.resolve(null, { size: 3, order: "ASC" });
        assert(findAllStub.calledOnce);
        assert(findAllStub.calledWith({
            order: "number ASC",
            limit: 3
        }));
    });

    it('Should fetch the numbers by order random', () => {
        NumberQuery.default.resolve(null, { order: "RANDOM" });
        assert(findAllStub.calledOnce);
        assert(findAllStub.calledWith({
            order: "foo",
            limit: null
        }));
    });

    it('Should fetch the numbers by unrecognised order', () => {
        NumberQuery.default.resolve(null, { order: "unknown" });
        assert(findAllStub.calledOnce);
        assert(findAllStub.calledWith({
            order: null,
            limit: null
        }));
    });

});