
export function makeResponse<T>(
  data: T,
  code: number = 0,
  msg: string = "Success"
) {
  return new Response(
    JSON.stringify({
      code,
      msg,
      data,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}