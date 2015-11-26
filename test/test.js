'use strict'

const assert = require('assert')
const faker = require('faker');
const stats = require('../index')

describe('Name stats', () => {

  it('nameTonumber and numberToname are inverses', () => {
     var randomName = faker.name.firstName()
     var numberName = stats.nameTonumber(randomName)
     var nameNumber =  stats.numberToname(numberName[0],numberName[1])
    assert(nameNumber===randomName.toLowerCase())
  })

  it('nameTonumber and numberToname are inverses', () => {
     var number = Math.floor(45654678658*Math.random())
     var nameNumber =  stats.numberToname(number,9)
     var numberName = stats.nameTonumber(nameNumber)
     console.log(numberName,'number=',number,nameNumber);
     assert.equal(numberName[0], number)
  })



})
