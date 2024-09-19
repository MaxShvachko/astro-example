import type { APIRoute } from "astro"

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ message: 'Hello Astro!!!' }), {
    status: 200,
  })
};


export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  return new Response(JSON.stringify(body), {
    status: 200,
  })
};
