import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { UserPost } from "./post";

export interface Post {
    id: string;
    userId: string;
    title: string;
    description: string;
    username: string;
}

export const Main = () => {
    const [postsList, setPostsList] = useState<Post[] | null>(null)
    const postsRef = collection(db, "post");

    const getPosts = async () => {
        const data = await getDocs(postsRef);
        setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[])
    }

    useEffect(() => {
        getPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h1>{postsList?.map((post) => <UserPost post={post} key={post.id} />)}</h1>
        </div>
    )
}