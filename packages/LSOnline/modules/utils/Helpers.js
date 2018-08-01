'use strict'

const upperString = string => string.toLowerCase().replace(/(^| )(\w)/g, s => s.toUpperCase())

exports.upperString = upperString

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

exports.randomInt = randomInt

const parseOutfit = (outfit) => {
  Object.keys(outfit).forEach((key) => {
    const value = outfit[key]
    if (typeof key !== 'string') return false
    try {
      outfit[key] = JSON.parse(value)
    } catch (e) {
      return false
    }
  })
  return outfit
}

exports.parseOutfit = parseOutfit
