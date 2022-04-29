import './topbar.css'
import { Link } from 'react-router-dom';

export default function TopBar() {
 const user = false;  
 return (
    <div className="top">
        <div className="container topInn">
        <div className="topLeft">
             <i className="topIcon fa-brands fa-facebook-square"></i>
             <i className="topIcon fa-brands fa-twitter-square"></i>
             <i className="topIcon fa-brands fa-pinterest-square"></i>
             <i className="topIcon fa-brands fa-instagram-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link to="/" className="homeLink">액션/판타지</Link></li>
                <li className="topListItem"><a href="/comedy">코미디/드라마</a></li>
                <li className="topListItem"><a href="/animation">애니메이션/SF</a></li>
                <li className="topListItem"><Link to ="/romance">로맨스</Link></li>
                <li className="topListItem">
                   {
                       user? ("LOGOUT") : 
                       (<span>
                           <Link to="/Login">LOGIN</Link>
                           <Link to="/Settings">회원가입</Link>
                       </span>)
                   }    
                </li>
            </ul>
        </div>
        <div className="topRight">
            <img src="images/tod.jpg" alt="홍길동" className="topImg" />
            <i className="topSearchIcon fas fa-search"></i>
        </div>
        </div>
    </div>
  )
}
