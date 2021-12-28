{
  type isSubTyping<Child, Par> = Child extends Par ? true : false;
  type isXX2 = isSubTyping<1, number>;

  type isAssertable<T, S> = T extends S ? true : S extends T ? true : false;
  type isNumAssertabe = isAssertable<1, number>;
  type isNumAssertabe2 = isAssertable<number, 1>;
}

{
  type ElementTypeOfArray<T> = T extends (infer E)[] ? E : never;
  type isNumber = ElementTypeOfArray<number[]>;
  type isNever = ElementTypeOfArray<number>;
}

{
  type SpecifiedKeys = "id" | "name";
  type TargetType = {
    [key in SpecifiedKeys]: any;
  };
  type TargetGeneric<O extends string | number | symbol> = {
    [key in O]: any;
  };

  type TargetInstance = TargetGeneric<SpecifiedKeys>
}
