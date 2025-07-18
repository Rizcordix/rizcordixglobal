import { openDB } from '@/src/lib/db';

// THIS IS THE CRUCIAL CHANGE:
// Instead of `request, context`, you need to destructure `params` directly from the second argument.
export async function GET(request, { params }) { // <--- This line is key
  try {
    const db = await openDB();
    const row = await db.get('SELECT * FROM Blog WHERE BlogID = ?', [params.id]); // params.id is now correctly accessible

    if (!row) {
      return new Response(JSON.stringify({ error: 'Blog not found' }), { status: 404 });
    }

    const blog = {
      ...row,
      Image1: row.Image1 ? Buffer.from(row.Image1).toString('base64') : null,
      Image2: row.Image2 ? Buffer.from(row.Image2).toString('base64') : null,
      Image3: row.Image3 ? Buffer.from(row.Image3).toString('base64') : null,
    };

    return new Response(JSON.stringify(blog), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error fetching blog:", error); // Added for better debugging
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}