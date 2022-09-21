import Banner from '../components/Banner'
import Format from '../layout/format'
import Posts from '../layout/Posts'

import { MediumContext } from '../context/MediumContext'
import { useContext } from 'react'

export default function Home() {

  const { users } = useContext(MediumContext)

  console.log(users, 'XXXX')

  return (
    <Format>
      <Banner></Banner>
      <Posts></Posts>
    </Format>
  )
}
