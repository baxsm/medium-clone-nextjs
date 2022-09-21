import ReadersNav from '../components/article/ReadersNav'
import Recommendations from '../components/article/Recommendations'
import ArticleMain from '../components/article/ArticleMain'

export default function Article() {
    const styles = {
        content: 'flex',
    }

    return (
        <div className={styles.content}>
            <ReadersNav></ReadersNav>
            <ArticleMain></ArticleMain>
            <Recommendations></Recommendations>
        </div>
    )
}
