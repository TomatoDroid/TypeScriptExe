{
  interface I1 {
    name: string;
  }
  interface I2 {
    id: number;
    name: string;
  }
  class C2 {
    id = 1;
    name = "1";
  }

  let O1: I1 = { name: "1" };
  let O2: I2 = { name: "lz", id: 2 };
  let InstC2: C2;

  O1 = O2;
  //   O1 = InstC2;
}
{
  let fun1 = <T>(p1: T): 1 => 1;
  let fun2 = <T>(p2: T): number => 2;
  fun2 = fun1; // ok？
}
