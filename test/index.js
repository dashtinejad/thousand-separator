var should = require('chai').should();
var thousandSeparator = require('../index');

describe('Basic test', function() {
    it('convert string to thousand separator', function() {
        thousandSeparator('1234567890').should.equal('1,234,567,890');
    });
});