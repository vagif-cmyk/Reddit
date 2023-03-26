// тип функции, конкатенирующей две строки
type TFn = (a: string, b: string) => string;

const concat: TFn = (a, b) => {
  return a + b;
};

// интерфейс для описания данных ниже
// {
//   howIDoIt: "I Do It Wel",
//   simeArray: ["string one", "string two", 42],
//   withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
// };

type TArrayStrOrNumber = Array<string | number>;

interface MyFirstInterface {
  howIDoIt: string;
  simeArray: TArrayStrOrNumber;
  withData: { howIDoIt: string; simeArray: TArrayStrOrNumber }[];
}

// Типизация функций, используя Generic. Типизация собственного метода reduce.
interface MyArray<T> {
  [N: number]: T;
  reduce<U>(
    fn: (acc: U, element: T, index: number, array: T[]) => U,
    init: U
  ): U;
}

const a: MyArray<number> = [1, 2, 3];
a.reduce((acc, el, index, array)=> {
  return acc + el;
}, 0)

// Deep MyPartial
interface IHomeTask {
  externalData: {
    value: string;
  };
}

type TMyPartial<T> = {
  [N in keyof T]?: T[N] extends object ? TMyPartial<T[N]> : T[N];
};

const homeTask: TMyPartial<IHomeTask> = {
  externalData: {
    value: 'win',
  }
};
