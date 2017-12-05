const fs = require('fs')

const lines = fs.readFileSync('./in.txt', 'utf-8').trim().split('\n')

// Part 1
const words = (line) => line.split(' ')
const hasDuplicates = (arr) => new Set(arr).size < arr.length
const noDuplicateWords = (line) => !hasDuplicates(words(line))

// Part 2
const sortChars = (word) => word.split('').sort().join('')
const noAnagrams = (line) => !hasDuplicates(words(line).map(sortChars))

console.log(
  'Part 1:',
  lines.filter(noDuplicateWords).length
)

console.log(
  'Part 2:',
  lines.filter(noAnagrams).length
)
