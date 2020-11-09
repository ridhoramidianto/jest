const { TestScheduler } = require('jest')
const tambah = require('./tambah')

test('Hasil yang diharapkan 1+2=3', () => {
    expect(tambah(1,2)).toBe(3)
})