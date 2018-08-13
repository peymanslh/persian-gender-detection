const assert = require('assert');
const { getGender } = require('../index');

describe('#getGender()', () => {
  it('Detect Male', () => {
    assert.equal(getGender('علي'), 'MALE');
    assert.equal(getGender('سعید     '), 'MALE');
    assert.equal(getGender('هــــادی'), 'MALE');
    assert.equal(getGender('محمد   رضا'), 'MALE');
    assert.equal(getGender('احسا   ن'), 'MALE');
    assert.equal(getGender('كامران'), 'MALE');
    assert.equal(getGender('  پیمـــان  '), 'MALE');
    assert.equal(getGender('حســ😎ــن'), 'MALE');
    assert.equal(getGender('۱۲۳۹۹۳محمدعلی123'), 'MALE');
    assert.equal(getGender('<<محمد>>'), 'MALE');
  });
  it('Detect Female', () => {
    assert.equal(getGender('فاطمه'), 'FEMALE');
    assert.equal(getGender('آذر     '), 'FEMALE');
    assert.equal(getGender('الـــناز'), 'FEMALE');
    assert.equal(getGender('فاطمه زهرا'), 'FEMALE');
    assert.equal(getGender('یلـــ❤️ــدا'), 'FEMALE');
    assert.equal(getGender('  مریم  '), 'FEMALE');
    assert.equal(getGender('صغری'), 'FEMALE');
    assert.equal(getGender('حانیه'), 'FEMALE');
    assert.equal(getGender('هانیه'), 'FEMALE');
    assert.equal(getGender('۱۲۳مهناز۱۲۳'), 'FEMALE');
  });
  it('Detect Unknown', () => {
    assert.equal(getGender('فاطی'), 'UNKNOWN');
    assert.equal(getGender('(فاطمه)'), 'UNKNOWN');
    assert.equal(getGender('fateme'), 'UNKNOWN');
    assert.equal(getGender('Ali'), 'UNKNOWN');
  });
});
