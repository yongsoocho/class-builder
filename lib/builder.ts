// /**
//  * @experimentalDecorators have to be "true" in tsconfig.json
//  */
// function Builder<T extends { new (...args: any[]): {} }>(constructor: T) {
//   const temp = new constructor();
//   const keys = Object.keys(temp);
//   return class extends constructor {
//     static Builder = class {
//       constructor() {
//         /**
//          * create fields varible
//          * @noImplicitAny have to be "false" in tsconfig.json
//          */
//         for (let key of keys) {
//           Object.defineProperties(this, {
//             /**
//              * create fields varible
//              */
//             ["_" + key]: {
//               value: (temp as this)[key],
//               enumerable: true,
//               writable: true,
//             },
//             [key]: {
//               value: (newValue: any) => {
//                 (this as any)["_" + key] = newValue;
//                 return this;
//               },
//               enumerable: true,
//             },
//           });
//         }
//       }

//       build() {
//         return new constructor(
//           ...Object.keys(this)
//             .filter((e) => (e.startsWith("_") ? true : false))
//             .map((e) => this[e])
//         );
//       }
//     };
//   };
// }

// class BuilderInit {
//   static Builder = class {
//     build() {}

//     [props: string]: Function;
//   };
// }
