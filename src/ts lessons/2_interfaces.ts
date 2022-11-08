//Интерфейсы - для объектов и для классов. Они не компилирются как примитивы

interface Rect {
  readonly id: string //нельзя переприсвоить другое значение даже с тем же типом
  color?: string
  size: {
    width: number
    height: number
  }
}

const Rect1: Rect = {
  id: '11231',
  size: {
    width: 20,
    height: 30,
  },
  color: 'ccc',
}

const Rect2: Rect = {
  id: '123132',
  size: {
    width: 40,
    height: 50,
  },
}

Rect2.color = 'black'

const React3 = {} as Rect //будет иметь тип
const rect4 = <Rect>{} //старый способ объявления

//____Наследование интерфейсов___

interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5: RectWithArea = {
  id: 'asdfasf',
  size: {
    width: 20,
    height: 30,
  },
  getArea: () => 20,
}

//

interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  time = new Date() //всегда ли нужно указывать после интерфейса еще раз тип??
  setTime(date: Date): void {
    this.time = date
  }
}

// объект с динамическими ключами

interface Styles {
  [key: string]: string // первый относится к ключам, второй относится к значениям
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  marginLeft: '4px',
}
