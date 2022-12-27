function Builder<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    static Builder = class {
      constructor() {
        console.log("Builder T");
      }

      build() {
        return new constructor(123, "456");
      }
    };
  };
}

class BuilderMethods {
  static Builder = class {
    build() {}
  };
}

@Builder
class Test extends BuilderMethods {
  val_1?: number;
  val_2?: string;

  constructor(val_1: number, val_2: string) {
    super();
    if (val_1) this.val_1 = val_1;
    if (val_2) this.val_2 = val_2;
    console.log("Test Class");
  }
}

console.log(new Test.Builder().build());
