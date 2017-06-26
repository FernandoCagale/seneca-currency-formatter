const Lab = require('lab');
const Code = require('code');
const Seneca = require('seneca');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

function testSeneca (fin) {
  return Seneca({log: 'test'})
    .test(fin)
    .use(require('../logic/brl'))
    .use(require('../logic/usd'));
}

describe('format', () => {
  it('brl', (fin) => {
    const seneca = testSeneca(fin);

    seneca
    .gate()
    .act({
      role: 'currency',
      format: 'brl',
      value: 25.00
    }, (ignore, result) => {
      expect(result.value).to.equal('R$ 25,00');
      expect(result.format).to.equal('brl');
    })
    .ready(fin);
  });

  it('usd', (fin) => {
    const seneca = testSeneca(fin);

    seneca
    .gate()
    .act({
      role: 'currency',
      format: 'usd',
      value: 50.00
    }, (ignore, result) => {
      expect(result.value).to.equal('$50.00');
      expect(result.format).to.equal('usd');
    })
    .ready(fin);
  });
});
