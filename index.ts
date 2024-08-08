//! PRIMITIVE TYPES
// by default, string kalo ga di define typenya
let foo: string = 'hehe'
let isPrime: boolean = true
let age: number = 25

// gabisa dirubah tipenya sembarangan
foo = "55"

//! STRUCTURED TYPES
// Array

// typenya dipisahin, pascal case
type Decimal = [number, number, string]
let angka: Decimal = [1, 2, 'hehe']

// one type array
let animals: string[] = ["gajah", "macan", "kuda"]
let prima: number[] = [1, 3, 5]

// tuples, ketetetapan arraynya emg seperti itu
// gimana klo tuples tapi index kedua bisa dinamis?
type NumberWithTitle = [string, ...Number[]]
let titleNumber: NumberWithTitle = ['hehe', 1, 2, 3, 4, 5]

// tuples optional, walau ga ada gapapa , tapi tipenya harus sama
type NumberOptional = [number, number?, number?]
let optionNumber: NumberOptional = [1, , 3]

// Object
let food: { name: string, price?: number } = {
    name: 'burger'
}

//! ANY TYPES
// sama aja kayak javascript jadinya
let num: any = 10
let str: any = "Hi"

//! UNION TYPES
// tipenya bisa lebih dari satu
let msg: number | string = 'hehe'

//! FUNCTION
// untuk function, disarankan untuk mendefine tipe parameter kalo ada paremeter, kalo tidak di define, by default itu any

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

//! DEFINING TYPES
// type vs interface , selain bisa pake type untuk mendeclare sebuah tipe object, kita jg bisa menggunakan interface
// perbedaan interface, hanya bisa digunakan untuk object dan juga interface bisa dideclare lagi (akan concat)

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

//! GENERICS
// jika kita pake any, kita ngeskip semua type and safety checking , sama ky pake javascript. Tapi kalo pake generic pengecheckannya tetep ada, tapi bisa dinamis tipenya.
// "T" sebenernya bebas, tetapi itu harusnya Type, biasanya disingkat jadi T
// selain buat tipe parameternya, bisa digunakan juga buat hasilnya

const printTesting = <T>(x: T): T => x

console.log(printTesting<number>(2))
console.log(printTesting<string>('hehe'))

//! GENERIC DATA STRUCTURE
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

