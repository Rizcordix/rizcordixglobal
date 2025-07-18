import { openDB } from '@/src/lib/db';

export async function GET() {
  try {
    const db = await openDB();
    const rows = await db.all('SELECT * FROM Blog ORDER BY BlogID DESC');

    const blogs = rows.map((row) => ({
      ...row,
      Image1: row.Image1 ? Buffer.from(row.Image1).toString('base64') : null,
    }));

    return new Response(JSON.stringify(blogs), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}
