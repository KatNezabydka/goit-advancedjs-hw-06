/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise<T>(): Promise<T[]> {
    return new Promise((resolve): void => {
        resolve(['Text', 50] as T[]);
    });
}

getPromise<[string, number]>()
    .then((data: [string, number][]): void => {
        console.log(data);
    });

export {};