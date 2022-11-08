function add(a: number, b: number): number {
  return a + b
}

interface MyPosition {
  x: number | undefined
  y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
  default: string
}
//потенциальные вызовы функции позитион
function position(): MyPosition //если функция ничего не получает то возвращает myposition   Здесь и указываем перегрузку данной функции
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined }
  }
  if (a && !b) {
    return { x: a, y: undefined, default: a.toString() }
  }
  if (a) {
    return { default: a.toString() }
  }
  return { x: a, y: b }
}

console.log('empty', position())
console.log('one params', position(42))
console.log('two params', position(20, 40))
