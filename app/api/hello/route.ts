export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export function GET(request: Request) {
  return new Response(JSON.stringify({
    "hello": `Hello from ${process.env.VERCEL_REGION}`,
    "env": process.env,
  }), {headers: {
    "Content-Type": "application/json; charset=utf8",
  }});
}
