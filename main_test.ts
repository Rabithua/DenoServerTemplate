import { assertEquals } from "npm:std/assert";

function add(a: number, b: number) {
  return a + b;
}

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});
