//Примитивы

const isSomething = false

const int = 42
const float = 3.5
const num = 3e10

const message = 'Hello'

const numberArray: number[] = [1, 2, 3, 4] //array from number
const numberArray2: Array<number> = [1, 2, 3, 1] //generic альтернативная запись (Array - это класс или объект)

//Tuple - массив из разных типов данных
const contact: [string, number] = ['Vladilen', 12345] //только два и можно указать

// для переопределения Any
let variable: any = 42
variable = 'string'

//void - ничего не возвращает
function sayMyName(name: string): void {
  console.log(name)
}
sayMyName('ss')

//Never  - выдает оишбку и никогда не заканчивается, постоянно что либо делает
function throwError(message: string): never {
  throw new Error(message)
}

function infinite(): never {
  while (true) {}
}

//Type - собственные типы (alias)
type Login = string

const login: Login = 'admin'

type ID = string | number
const id: ID = 123

type SomeType = string | null | undefined
