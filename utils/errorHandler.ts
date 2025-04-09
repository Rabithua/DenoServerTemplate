export default function errorHandler(err: Error) {
  console.error(err);
  return new Response(
    JSON.stringify({
      code: 1,
      msg: err.message,
    }),
    {
      status: 500,
      headers: { "Content-Type": "application/json" },
    }
  );
}
