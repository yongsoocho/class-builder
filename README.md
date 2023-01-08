# class-builder

This library help you use 'Builder Pattern' in TypeScript in just 3 sec.

You should read [TS doc](https://www.typescriptlang.org/docs/handbook/decorators.html) first.


## 💁‍♂️ Usage

### Input Example

1. use "@Builder" decorator on the top of class
2. extends "BuilderInit" class with your class
3. you have to call "super()" in your class constructor

```
@Builder
class Example extends BuilderInit {
  constructor(
    private field1: string,
    private field2: string,
    private field3: string,
  ) {
    super();
  }
}
```

### Output Example

```
const some = new Example.Builder()
  .field1("foo")
  .field2("var")
  .field3("baz")
  .build();

Example { field1: 'foo', field2: 'bar', field3: 'baz' } // on your console
```

---
