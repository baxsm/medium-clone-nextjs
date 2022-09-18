import PostCard from '../components/PostCard'

export default function Posts() {

    const styles = {
        postsList: 'flex flex-col gap-3 p-3 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3',
        container: 'max-w-7xl flex-1',
        main: 'flex justify-center'
    }

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.postsList}>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
                </div>
            </div>
        </div>
    )
}
