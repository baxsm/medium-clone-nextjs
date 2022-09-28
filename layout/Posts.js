import PostCard from '../components/PostCard'

import { MediumContext } from '../context/MediumContext'
import { useContext } from 'react'

export default function Posts() {

    const styles = {
        postsList: 'flex flex-col gap-3 p-3 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3',
        container: 'max-w-7xl flex-1',
        main: 'flex justify-center'
    }

    const { posts } = useContext(MediumContext)

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.postsList}>
                    {posts.map(post => (
                        <PostCard post={post} key={post.id}></PostCard>
                    ))}
                </div>
            </div>
        </div>
    )
}
