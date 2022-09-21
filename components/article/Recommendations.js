import Image from "next/image"
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMarkEmailUnread } from 'react-icons/md'
import Logo from '../../static/images/logo.png'

export default function Recommendations() {

    const styles = {
        wrapper: 'h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]',
        accentedButton: 'flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[0.6rem] rounded-full',
        searchBar: 'flex items-center gap-[0.6rem] h-[2.6rem] px-[1rem] rounded-fully',
        searchInput: 'border-none outline-none bg-none w-full',
        authorContainer: 'my-[2rem]',
        authorProfileImageContainer: 'h-[5rem] w-[5rem] rounded-full overflow-hidden',
        authorName: 'font-semibold md-[0.2rem] mt-[1rem]',
        authorFollowers: 'text-[#787878]',
        authorActions: 'flex gap-[0.6rem] my-[1rem]',
        actionButtons: 'bg-[#1A8917] text-white rounded-full px-[0.6rem] py-[0.4rem] text-sm',
        recommendationsAuthorProfileImageContainer: 'rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]',
        recommendationsAuthorName: 'text-sm',
        recommendationsAuthorContainer: 'flex items-center gap-[0.6rem]',
        recommendationsTitle: 'font-bold',
        recommendationsThumbnailContainer: 'flex flex-1 items-center justify-center h-[4rem] w-[4rem]',
        recommendationsThumbnail: 'object-cover',
        articleContentWrapper: 'flex items-center justify-between cursor-pointer my-[1rem]',
        articleContent: 'flex-[4]',
        articlesContainer: 'flex',
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.accentedButton}>Get Unlimited Access</div>
            <div className={styles.searchBar}>
                <AiOutlineSearch />
                <input
                    className={styles.searchInput}
                    placeholder='Search'
                    type='text'
                />
            </div>

            <div className={styles.authorContainer}>
                <div className={styles.authorProfileImageContainer}>
                    <Image
                        src={Logo}
                        width={100}
                        height={100}
                    />
                </div>
                <div className={styles.authorName}>
                    John Doe
                </div>
                <div className={styles.authorFollowers}>1M followers</div>
                <div className={styles.authorActions}>
                    <div className={styles.actionButtons}>Follow</div>
                    <div className={styles.actionButtons}>
                        <MdMarkEmailUnread />
                    </div>
                </div>
            </div>
            <div className={styles.recommendationsContainer}>
                <div className={styles.title}>More From Medium</div>
                <div className={styles.articlesContainer}>
                    <div className={styles.articleContentWrapper}>
                        <div className={styles.articleContent}>
                            <div className={styles.recommendationsAuthorContainer}>
                                <div className={styles.recommendationsAuthorProfileImageContainer}>
                                    <Image
                                        src={Logo}
                                        height={100}
                                        width={100}
                                    />
                                </div>
                                <div className={styles.recommendationsAuthorName}>
                                    John Doe
                                </div>
                                </div>
                                <div className={styles.recommendationsTitle}>
                                    The ultimate couse for javascript
                                </div>
                        </div>
                    </div>
                    <div className={styles.recommendationsThumbnailContainer}>
                        <Image
                            className={styles.recommendationsThumbnail}
                            src={Logo}
                            height={100}
                            width={100}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
