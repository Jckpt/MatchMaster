export function GET(request, { params }, res) {
  return new Response("error: failed to fetch data", {
    status: 500,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
