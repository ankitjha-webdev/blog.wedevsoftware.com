import {allBlogs} from '../../.contentlayer/generated'
import FeaturedPost from '../components/Home/FeaturedPost'
import HomeCoverSection from '../components/Home/HomeCoverSection'
import RecentPost from '../components/Home/RecentPost'


export default function Home() {
  console.log(allBlogs)
  return (
    <main className='flex flex-col items-center justify-center'>
      <HomeCoverSection blogs={allBlogs}/>
      <FeaturedPost blogs={allBlogs}/>
      <RecentPost blogs={allBlogs}/>
    </main>
  )
}
