import React from 'react';





import Comment from './components/CommentSection';

import { client } from '@/sanity/lib/client';

import Landing from './components/landingpage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Webpage from './components/blogcard';
import Contact from './components/contact';

type Post={
  title:string,
  summmary:string,
  image:any,
  slug:string
};


export default async function Home() {
  // Fetch blog posts
  const posts: Post[] = await client.fetch(`
    *[_type == 'blog'] | order(_createdAt asc) {
      summary,
      title,
      image {
        asset -> {
          _id,
          url
        }
      },
      "slug": slug.current
    }
  `);

  // Debugging log to confirm posts
  console.log('Fetched Posts:', posts);

  return (
<>
<Navbar/>
<Landing/>

<div className="flex flex-wrap items-center justify-center gap-4 p-4">
      {posts.map((post: Post) => (
        <Webpage key={post.slug} post={post} />
      ))}
    </div>
    <Comment/>
    <Contact/>
    <Footer/>
    </>
  );
}