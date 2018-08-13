const male = require('./gender/male.json');
const female = require('./gender/female.json');

/**
 * Remove space and extra characters from name
 * @param  {String}
 * @return {String}
 */
const cleanName = name => {
  name = name.toLowerCase();
  name = name.replace(/\ي/g, 'ی');
  name = name.replace(/\ك/g, 'ک');
  name = name.replace(/(\ـ|\َ|\ِ|\ُ|\ً|\ٍ|\ٌ|\ْ|\ْ)/g, '');
  name = name.replace(/^\s+|^0-9+|^۰-۹|[^(آ-ی)(a-z)]+/g, '');
  return name;
};

const getGender = name => {
  name = cleanName(name);
  if (male[name]) {
    return 'MALE';
  } else if (female[name]) {
    return 'FEMALE';
  } else {
    return 'UNKNOWN';
  }
};

const getLang = name => {
  name = cleanName(name);
  if (male[name]) {
    return male[name].lang;
  } else if (female[name]) {
    return female[name].lang;
  } else {
    return 'UNKNOWN';
  }
};

module.exports = {
  cleanName,
  getGender,
  getLang,
};
