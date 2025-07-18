// app/blog/[id]/page.jsx

// import BlogDetails from "@/src/components/blog-details/blog-details-postbox"; // adjust path if needed
import { headers } from 'next/headers';
import BlogDetail from "@/src/components/blog-details/index.jsx"; // adjust path if needed


// Dynamically construct the base URL using request headers (useful for SSR & Vercel)
async function getBlog(id) {
  const headersList = headers();
  const host = headersList.get('host'); // e.g., localhost:3000 or yourdomain.com
  const protoHeader = headersList.get('x-forwarded-proto'); // used in Vercel and similar
  const protocol = protoHeader || 'http';

  const baseUrl = `${protocol}://${host}`;
  const res = await fetch(`${baseUrl}/api/blog/${id}`, { cache: 'no-store' });

  if (!res.ok) throw new Error('Failed to fetch blog');
  return res.json();
}

// Page Component
const BlogDetailsPage = async ({ params }) => {
  const blog = await getBlog(params.id);

  return(
    <>
        <BlogDetail blog={blog} />;
   </>
  );
};

export default BlogDetailsPage;
