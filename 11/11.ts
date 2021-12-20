interface Dog {
  wang: string;
}

interface Cat {
  miao: string;
}

const isDog = function (animal: Dog | Cat): animal is Dog {
  return "wang" in animal;
};
// const getName = (animal: Dog | Cat) => {
//   if (isDog(animal)) {
//     return animal.wang
//   }
// };

// const getName = <T extends Dog | Cat>(animal: T) => {
//   if ("wang" in animal) {
//     return animal.wang;
//   }
//   return animal.miao;
// };

// const getName = <T extends Dog | Cat>(animal: T) => {
//   if (isDog(animal)) {
//     return animal.wang;
//   }
//   return animal.miao;
// };