import { map } from "lodash";
import { useEffect } from "react";

const foo: string = map; // this should throw a type error, but does not
console.log(foo);

const bar: string = useEffect; // this should throw a type error, but does not
console.log(bar);
