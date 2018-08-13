const assert = require('assert');
const { cleanName } = require('../index');

describe('#cleanName()', () => {
  it('Clean Farsi Word', () => {
    assert.equal(cleanName('   علی '), 'علی');
    assert.equal(cleanName('هــــادی'), 'هادی');
    assert.equal(cleanName('محمد   رضا'), 'محمدرضا');
    assert.equal(cleanName('احسا   ن'), 'احسان');
    assert.equal(cleanName('كامران'), 'کامران');
    assert.equal(cleanName('  پیمـــان  '), 'پیمان');
    assert.equal(cleanName('حســ😎ــن'), 'حسن');
    assert.equal(cleanName('۱۲۳۹۹۳محمدعلی123'), 'محمدعلی');
    assert.equal(cleanName('<<محمد>>'), 'محمد');
  });
  it('Clean English Word', () => {
    assert.equal(cleanName('Ali'), 'ali');
    assert.equal(cleanName('    J  ohn '), 'john');
    assert.equal(cleanName('Pey😎man'), 'peyman');
    assert.equal(cleanName('12345Pey44man555'), 'peyman');
    assert.equal(cleanName('<<pey44man>>'), 'peyman');
    assert.equal(cleanName('<<pey44man>'), 'peyman');
  });
});
