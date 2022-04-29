import './romance.css'
import Sidebar from '../../comp/sidebar/Sidebar'
import Posts from '../../comp/posts/Posts'

export default function Romance() {
  return (
    <>
        <div className="container home">
            <div className="post">
                 <Posts />
            </div>
            <Sidebar></Sidebar>
        </div>
      </>
  )
}
