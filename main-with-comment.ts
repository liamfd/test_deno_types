// @ts-types="npm:@types/lodash"
import { map } from "lodash-es";
// @ts-types="@types/react"
import { useEffect } from "react";

const foo: string = map; // this should throw a type error, but does
console.log(foo);

const bar: string = useEffect; // this should throw a type error, but does
console.log(bar);