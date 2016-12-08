import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Number from '../../src/components/number';
import NumberType from '../../src/components/numberType';

describe('Testing number component', () => {

    var renderer;

    beforeEach(() => {
        renderer = ReactTestUtils.createRenderer();
    });

    it('Should render', () => {
        renderer.render(<Number data={ { number: -82, types: [ { value: 'even number' }, { value: 'negative number' } ] } } />);
        const result = renderer.getRenderOutput();
        expect(result.type).to.equal('div');
        expect(JSON.stringify(result.props.children)).to.equal(JSON.stringify([
            <div className="col-sm-6">
                <h2>{-82}</h2>
            </div>,
            <div className="col-sm-6">
                <NumberType key={0} data={{ value: 'even number' }} />
                <NumberType key={1} data={{ value: 'negative number' }} />
            </div>,
            <div className="col-sm-12"><hr /></div>
        ]));
    });

});