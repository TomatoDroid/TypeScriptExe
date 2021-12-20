{
  type a = string;
  type b = "string";

  type Unit = a | b;

  let a: Unit = "123";
}

{
  interface Bird {
    fly(): void;
    layEggs(): void;
  }
  interface Fish {
    swim(): void;
    layEggs(): void;
  }

  const getPet = (): Bird | Fish => {
    return {} as Bird | Fish;
  };

  const Pet = getPet();
  Pet.layEggs();
  //   Pet.fly(); //类型“Bird | Fish”上不存在属性“fly”。类型“Fish”上不存在属性“fly”。ts(2339)
}

{
  type Useless = string & number;
}

{
  type IntersectionTypeConfict = { id: number; name: string } & { age: number };
  const mixedConflict: IntersectionTypeConfict = {
    id: 1,
    name: "lz",
    age: 25,
  };
}
