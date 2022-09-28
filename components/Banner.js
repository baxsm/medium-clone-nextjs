import Image from "next/image"
import bannerImg from "../static/images/banner.png"

const styles = {
    wrapper: 'h-max-[10rem] flex items-center justify-center bg-[#FCC017] border-y border-black',
    container: 'max-w-7xl flex-1 flex item-center justify-between',
    contentText: 'space-y-5 px-10 flex-[3]',
    bannerTitle: ' text-[6rem] pt-[3rem]',
    bannerHeadline: 'text-2xl',
    accentedButton: 'bg-black text-white py-2 px-4 rounded-full'
}

export default function Banner() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.contentText}>
                    <h1 className={styles.bannerTitle}>Stay Curious.</h1>
                    <h3 className={styles.bannerHeadline}>Discover stories, thinking, and expertise from writers on any topic.</h3>
                    <button className={styles.accentedButton}>Start Reading</button>
                </div>

                <Image
                    className="hidden h-32 md:inline-flex object-contain flex-1"
                    src={bannerImg}
                    width={500}
                    height={400}
                />
            </div>
        </div>
    )
}
