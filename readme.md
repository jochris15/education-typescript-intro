# Typescript (basic)
[Dokumentasi Typescript](https://www.typescriptlang.org/)

What is typescript? typescript adalah bahasa pemrograman berbasis JavaScript yang menambahkan fitur strong-typing & konsep pemrograman OOP klasik ( class, interface). Di dalam dokumentasinya, TypeScript disebut sebagai super-set dari JavaScript, artinya semua kode JavaScript adalah kode TypeScript juga. Bahasa pemrograman ini menawarkan class, module, dan interface yang membuat developer bisa mengembangkan aplikasi kompleks dengan lebih mudah. Hal inilah yang membedakannya dengan javascript.

## Why learn Typescript
- Popularitas
- Type safety, detect error lebih awal
- Refactoring code lebih mudah

## Installation
```
npm i -g typescript
```

## Init typescript project (create a tsconfig.json)
```
tsc --init
```

Note : bisa set rootDir and outDir di tsconfig.json(optional)
- rootDir = root folder untuk file typescript kalian
- outDir = output folder untuk hasil dari compile file ts kalian
## Compile current project 
```
tsc
```

## Ignoring tsconfig.json, compile with default compiler option (bisa multiple)
```
tsc <filename>.ts 
```

##  Defining types
### Primitive types
```ts
// by default, typenya string kalo ga di define
let message: string = "Hello world"
let score: number = 25
let checker: boolean = true

// gabisa dirubah tipenya sembarangan
message = 55
```

### Structured types
#### Array
```ts
// one type array
let animals: string[] = ["gajah", "macan", "kuda"]
let prime: number[] = [1, 3, 5]
```

### Tuples
Tuples adalah jenis array dengan jumlah elemen yang tetap & tipenya secara spesifik. 
```ts
type StringNumberPair = [string, number]
let user : StringNumberPair = ["John", 50]

// gimana klo tuples tapi index 1 mau dinamis?
type NumberWithTitle = [string, ...Number[]]
let titleNumber: NumberWithTitle = ['hehe', 1, 2, 3, 4, 5]

// tuples optional, walau ga ada gapapa , tapi tipenya harus sama
type NumberOptional = [number, number?, number?]
let optionNumber: NumberOptional = [1, , 3]
```

### Object
```ts
let food: { name: string, price?: number } = {
    name: 'burger'
}
```

## Any Types
```ts
// sama aja kayak javascript jadinya
let num: any = 10
let str: any = "Hi"
```

## Union Types
```ts
// tipenya bisa lebih dari satu
let msg: number | string = 'hehe'
```

## Function
untuk function, disarankan untuk mendefine tipe parameter kalo ada paremeter, kalo tidak di define, by default itu any
```ts
// "?" maksudnya berarti parameternya optional
// ": void" maksudnya function ini tidak menghasilkan apapun
function printMsg(msg?: number | string): void {
    console.log('ini message' + msg)
}

printMsg()

// ini function yang bisa mereturn string atau number
function printTest(test: number | string): string | number {
    return test
}

console.log(printTest(25));

// Contextual typing untuk build in function - paremeter el diasumsikan tipenya string sesuai dengan variablenya
const names = ["agus", "bambang", "susi"]

names.forEach((el) => {
    console.log(el.toUpperCase());
})
```

## Type vs Interface
Selain bisa pake type untuk mendeclare sebuah tipe object, kita jg bisa menggunakan interface.
perbedaan interface, hanya bisa digunakan untuk object dan juga interface bisa dideclare lagi (akan concat)

```ts
type Animal = {
    name: string;
    age: number;
}

// gabisa duplikat namanya
// type Animal = {
//     color: string[];
//     type: string;
// }

interface Animal2 {
    name: string;
    age: number;
}

// akan concat ke type Animal2 pertama
interface Animal2 {
    color: string[];
    type: string;
    gender: "male" | "female";
}
```

## Generics
Generics adalah fitur yang memungkinkan kita untuk membuat komponen yang tipe datanya dinamis & spesifik.

Jika kita pake any, kita ngeskip semua type and safety checking , sama seperti pake javascript. Tapi kalo pake generic pengecheckannya tetep ada, tapi bisa dinamis tipenya.

```ts
// "T" sebenernya bebas, tetapi itu harusnya Type, biasanya disingkat jadi T
// selain buat tipe parameternya, bisa digunakan juga buat hasilnya

const printTesting = <T>(params: T): T => params

console.log(printTesting<number>(2))
console.log(printTesting<string>('hehe'))

// contoh ketika kita melakukan request , tipe data dari "data" biasa bisa array / object / etc
interface RemoteData<T> {
    data: T,
    status: 'IDLE' | 'FETCHING' | 'SUCCESS' | 'ERROR'
}

const createRemoteData = <T>(data: T): RemoteData<T> => {
    return {
        data,
        status: 'IDLE'
    }
}

interface User {
    id: string;
    name: string
}

console.log(createRemoteData<string>("test"));
console.log(createRemoteData<User[]>([{ id: "1", name: "agus" }]));
```