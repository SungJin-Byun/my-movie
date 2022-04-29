import './comedy.css'
import Sidebar from '../../comp/sidebar/Sidebar'
import PostsC from '../../comp/posts/PostsC'

export default function Comedy() {
  return (
    <>
        <div className="container home">
            <div className="post">
                 <PostsC />
            </div>
            <Sidebar></Sidebar>
        </div>
      </>
  )
}