import './sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
         <div className="sidebarItem">
              <span className="sidebarTitle">
                  사이트 설명   
              </span>
              <img src="images/about01.jpg" alt="about" />
              <p>
              안녕하세요. 제가 좋아하는 영화 정보 사이트입니다. 
              </p>
          </div>

          <div className="sidebarItem">
              <span className="sidebarTitle">
                  CATEGORIES   
              </span>
              <ul className="sidebarList">
                <li className="sidebarListItem">Action</li>
                <li className="sidebarListItem">Animation</li>
                <li className="sidebarListItem">Comedy</li>
                <li className="sidebarListItem">Drama</li>
                <li className="sidebarListItem">Fantasy</li>
                <li className="sidebarListItem">Romance</li>
                <li className="sidebarListItem">SF</li>
              </ul>
          </div>


          <div className="sidebarItem">
              <span className="sidebarTitle">
                  FOLLOW ME 
              </span>
              <div className="socialList">
                  <i className="socialItem fa-brands fa-facebook-square"></i>
                  <i className="socialItem fa-brands fa-twitter-square"></i>
                  <i className="socialItem fa-brands fa-pinterest-square"></i>
                  <i className="socialItem fa-brands fa-instagram-square"></i>
              </div>
          </div>
    </div>
  )
}
