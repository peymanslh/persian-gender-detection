const assert = require('assert');
const { getLang } = require('../index');

describe('#getLang()', () => {
  it('Detect Farsi', () => {
    assert.equal(getLang('علی'), 'FARSI');
    assert.equal(getLang('مریم'), 'FARSI');
    assert.equal(getLang('   رضا  '), 'FARSI');
  });
});
