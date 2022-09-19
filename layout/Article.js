import ReadersNav from '../components/article/ReadersNav'
import Recommendations from '../components/article/Recommendations'

export default function Article() {
    const styles = {
        content: 'flex',
    }

    return (
        <div className={styles.content}>
            <ReadersNav></ReadersNav>
            <div>Article MAIN</div>
            <Recommendations></Recommendations>
        </div>
    )
}
