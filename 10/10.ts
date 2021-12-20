{
  const reflect = (params: unknown) => {
    return params;
  };

  const str = reflect("string");
  const num = reflect(123);
}

{
  const reflect = <T>(params: T) => {
    return params;
  };

  const str = reflect("lz");
  const num = reflect<number>(123);
}

{
  const reflectArray = function <P>(params: P) {
    return params;
  };

  const reflectArr = reflectArray([1, "1"]);
}

{
  const useState = function <S>(state: S, initialValue?: S) {
    return [state, (s: S) => void 0] as unknown as [S, (s: S) => void];
  };
}

{
  type StringOrNumberArray<E> = E extends string | number ? E[] : E;
  type StringArray = StringOrNumberArray<string>;
  type NumberArray = StringOrNumberArray<number>;
  type NeverGot = StringOrNumberArray<boolean>;

  type BooleanOrString = string | boolean;
  type WhatIsThis = StringOrNumberArray<BooleanOrString>; //boolean | string[]
  type BooleanOrStringGot = BooleanOrString extends string | number
    ? BooleanOrString[]
    : BooleanOrString;
}

{
  const reflectSpecified = function <P extends number | string | boolean>(
    params: P
  ): P {
    return params;
  };

  reflectSpecified("string");
  //   reflectSpecified(null)
}

{
  interface ObjectSetter {
    <O extends {}, K extends keyof O, V extends O[K]>(
      obj: O,
      k: K,
      value: V
    ): V;
  }

  const setValueOfObj: ObjectSetter = (obj, k, value) => (obj[k] = value);

  setValueOfObj({ id: 1, name: "lz" }, "id", 2);
}
