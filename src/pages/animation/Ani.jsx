import './ani.css'
import Sidebar from '../../comp/sidebar/Sidebar'
import PostsA from '../../comp/posts/PostsA'

export default function Ani() {
  return (
    <>
        <div className="container home">
            <div className="post">
                 <PostsA/>
            </div>
            <Sidebar></Sidebar>
        </div>
      </>
  )
}