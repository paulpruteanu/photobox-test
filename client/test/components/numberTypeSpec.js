import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import NumberType from '../../src/components/numberType';

describe('Testing number type component', () => {

    var renderer;

    beforeEach(() => {
        renderer = ReactTestUtils.createRenderer();
    });

    it('Should render a number type', () => {
        renderer.render(<NumberType data={ { value: 'even number' } } />);
        const result = renderer.getRenderOutput();
        expect(result.type).to.equal('div');
        expect(JSON.stringify(result.props.children)).to.equal('"even number"');
    });

});