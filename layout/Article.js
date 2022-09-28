import ReadersNav from '../components/article/ReadersNav'
import Recommendations from '../components/article/Recommendations'
import ArticleMain from '../components/article/ArticleMain'
import { useContext, useEffect, useState } from 'react'
import { MediumContext } from '../context/MediumContext'
import { useRouter } from 'next/router'

export default function Article() {

    const styles = {
        content: 'flex',
    }
    const [post, setPost] = useState([])
    const [author, setAuthor] = useState([])

    const { posts, users} = useContext(MediumContext)
    const router = useRouter()
    
    useEffect(() => {
        if (posts.length == 0) {
            return
        }

        setPost(
            posts.find(post => post.id === router.query.postId)
        )

        setAuthor(
            users.find(user => user.id === post?.data?.author)
        )
    }, [post])

    return (
        <div className={styles.content}>
            <ReadersNav></ReadersNav>
            <ArticleMain post={post} author={author}></ArticleMain>
            <Recommendations></Recommendations>
        </div>
    )
}
