# 😁 class-builder

This library helps you use 'Builder Pattern' in just 3 sec.

You should read a [TS doc](https://www.typescriptlang.org/docs/handbook/decorators.html) first. (This is not pre-condition. Just recommened)

## 💁‍♂️ Usage

### 🎯 tsconfig.json

```
// You have to set up the "tsconfig.json" like this.
{
  "compilerOptions": {
    // Restrict
    "noImplicitAny": false,
    "lib": ["ES2015"], // or higher, "DOM" is optional if you use 'console.log()'
    "target": "ES5", // or higher
    // Optional
    "strictPropertyInitialization": false
  }
}
```

### 🎯 Input Example

1. use "@Builder" decorator on the top of the class
2. write "extends BuilderInit" class next to your class
3. you have to call "super()" in your class constructor

```
@Builder
class Example extends BuilderInit {
  constructor(
    private field1: string,
    private field2: number,
    private field3: boolean,
  ) {
    super();
  }
}
```

### 🎯 Output Example

```
const foo = new Example.Builder()
  .field1("bar")
  .field2(2023)
  .field3(true)
  .build();

Example { field1: 'bar', field2: 2023, field3: true } // on your console
```

```
const foo = new Example.Builder()
  .field1("bar")
  .field2(2023)
  .build();

Example { field1: 'bar', field2: 2023, field3: undefined } // on your console
```

```
const foo = new Example.Builder()
  .field1("bar")
  .build();

Example { field1: 'bar', field2: undefined, field3: undefined } // on your console
```
