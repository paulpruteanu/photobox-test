import { mockServer } from 'graphql-tools';
import { expect } from 'chai';
import schema from '../../src/schema';

describe('Testing number schema', () => {

    var server;

    beforeEach(() => {
        server = mockServer(schema);
    });

    it('Should make a query to numbers with some fields', () => {
        return server.query(`{
            numbers {
                number,
                types { value }
            }
        }`).then(data => {
            expect(JSON.stringify(Object.keys(data.data.numbers[0]))).to.equal(JSON.stringify(['number', 'types']));
            expect(JSON.stringify(Object.keys(data.data.numbers[0].types[0]))).to.equal(JSON.stringify(['value']));
        });
    });

    it('Should make a query to numbers applying a size', () => {
        return server.query(`{
            numbers(size: 3) {
                number,
                types { value }
            }
        }`).then(data => {
            expect(JSON.stringify(Object.keys(data.data.numbers[0]))).to.equal(JSON.stringify(['number', 'types']));
        });
    });

    it('Should make a query to numbers applying a size and order', () => {
        return server.query(`{
            numbers(size: 2, order: "RANDOM") {
                number,
                types  { value }
            }
        }`).then(data => {
            expect(JSON.stringify(Object.keys(data.data.numbers[0]))).to.equal(JSON.stringify(['number', 'types']));
        });
    });

});