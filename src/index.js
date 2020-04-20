import { MyImmutableJS } from './myImmutable'


//                                          MAP SAMPLE                                          
const mapObj = {
  name: 'Arnaud',
  age: 24
}

const result = MyImmutableJS.Map(mapObj)

/*********** GET ***********/
// console.log('result ', result.toJS())
// console.log('get', result.get('name'))
// const resultVF = result.set('birthday', 1995)
// console.log('set birthday', resultVF.toJS())
// console.log('get birthday ', resultVF.get('birthday'))
/*********** SET ***********/
// console.log('result ', result.toJS())
// const resultVF = result.set('birthday', 1995)
// console.log('resultVF after ', resultVF.toJS())
/*********** toJSON, toJS ***********/
// console.log('toJS', result.toJS())
/*********** SIZE ***********/
// console.log('result ', result.toJS())
// console.log('result.size before ', result.size())
// const resultVF = result.set('birthday', 1995)
// console.log('resultVF ', resultVF.toJS())
// console.log('resultVF.size after ', resultVF.size())


//                                          LIST SAMPLE                                          
const listArray = [1, 2, 3, 4, 5]

const resultList = MyImmutableJS.List(listArray)

/*********** DELETE ***********/
// console.log('before delete', resultList.clonedArray)
// console.log('after delete', resultList.deleteFromIndex(3))
/*********** SPLICE ***********/
// const sourceArray = [{id: 1, a: 1}, {id: 2, a: 2}, {id: 3, a: 3}]
// const resultList1 = MyImmutableJS.List(sourceArray)
// const itemToAdd = { id: 2, a: 4 }
// console.log('splice before ', sourceArray)
// console.log('splice after ', resultList1.splice(itemToAdd))
/*********** toJSON ***********/
// console.log('toJson', resultList.toJSON())
/*********** PUSH ***********/
// console.log('push', resultList.push(6))
/*********** UNSHIFT ***********/
// console.log('UNSHIFT', resultList.unshift(0))
/*********** POP ***********/
// console.log('before pop', resultList.clonedArray)
// console.log('after pop', resultList.pop())
/*********** shift ***********/
// console.log('before shift', resultList.clonedArray)
// console.log('after shirt', resultList.shift())
/*********** reverse ***********/
// console.log('before reverse', resultList.clonedArray)
// console.log('after reverse', resultList.reverse())


