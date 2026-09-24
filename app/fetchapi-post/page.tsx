type Post = {
    id: number;
    title: string;
    body: string;
}

export default async function FetchApi (){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts : Post[] = await res.json();

    return (
        <ul>
            {posts.map((post)=>(
                <li key={post.id}>{post.title} - {post.body}</li>
            ))}
        </ul>
    )
}