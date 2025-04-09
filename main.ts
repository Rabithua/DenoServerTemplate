import { makeResponse } from "./utils/main.ts";

Deno.serve(
  {
    port: 8001,
    onError: (err) => {
      console.error("Error:", err);
      return new Response("Internal Server Error", { status: 500 });
    },
  },
  (_req: Request) => {
    return makeResponse("hello world");
  }
);
