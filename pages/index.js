import Head from 'next/head'
import Link from 'next/link';
import { getPosts } from '../lib/posts';

export async function getStaticProps() {
    const posts = await getPosts();
    return {
        props: {
            posts
        }
    }
}

function HomePage({ posts }) {
    return (
        <>
            <Head>
                <title>Next Blog - Home</title>
            </Head>
            <main>
                <h1>My Blog</h1>
                <ul>
                {posts.map((post) => {
                    return (
                        <li key={post.slug}>
                            <Link href={`/posts/${post.slug}`}>
                                {post.title}
                            </Link>
                        </li>)
                })}
                </ul>
            </main>
        </>
    );
}

export default HomePage;
