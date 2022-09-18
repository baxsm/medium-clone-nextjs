import SmallLogo from '../../static/images/smallLogo.png'
import { HiOutlineHome } from 'react-icons/hi'
import { FiBell } from 'react-icons/fi'
import { BiBookmarks } from 'react-icons/bi'
import { RiArticleLine } from 'react-icons/ri'
import { BsPencilSquare } from 'react-icons/bs'
import Logo from '../../static/images/logo.png'

import Image from 'next/image'
import Link from 'next/link'

export default function ReadersNav() {

  const styles = {
    wrapper: 'w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]',
    logoContainer: 'cursor-pointer',
    iconsContainer: 'flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-[#787878]',
    profileImageContainer: 'w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center',
    profileImage: 'object-cover',
    divider: 'border-b',
  }

  return (
    <div className={styles.wrapper}>
      <Link href={"/"}>
        <div className={styles.logoContainer}>
          <Image
            src={SmallLogo}
          />
        </div>
      </Link>
      <div className={styles.iconsContainer}>
        <HiOutlineHome />
        <FiBell />
        <BiBookmarks />
        <RiArticleLine />
        <div className={styles.divider}></div>
        <BsPencilSquare />
      </div>
      <div className={styles.profileImageContainer}>
        <Image 
          className={styles.profileImage}
          src={Logo}
        />
      </div>
    </div>
  )
}
