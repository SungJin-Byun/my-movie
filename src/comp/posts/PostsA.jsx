import './posts.css'
import { Link } from 'react-router-dom';

export default function PostsA() {
  return (
    <>
    <div className="posts">
         <img src="images/animation/01.jpg" alt="post01" className="postImg" />
         <div className="postInfo">
           <div className="postCats">
             <span className="postCat">빅히어로</span>
             <span className="postCat">(2014)</span>
           </div>
           <p className="ppostTitle">
             <Link to="/detail">
             마블 코믹스에서 발매한 동명의 작품인 《빅 히어로 6》를 바탕으로 각색한 전연령 장편 극장 애니메이션이다. 북미 기준으로 2014년 11월 7일에 개봉. 국내에선 2015년 1월 21일 개봉. 제작비는 1억 6500만 달러. 덤으로 《라푼젤》 이후 4년만에 IMAX 3D 포맷을 내놓은 극장 디즈니 애니메이션이다.
             </Link>
           </p>
           <span className="postDate">1 hour ago</span>         
         </div>
         <hr /><hr />
    </div>
    <div className="posts">
         <img src="images/animation/02.jpg" alt="post01" className="postImg" />
         <div className="postInfo">
           <div className="postCats">
             <span className="postCat">짱구는 못말려 극장판 11</span>
             <span className="postCat">(2003)</span>
           </div>
           <p className="ppostTitle">
             <Link to="/detail">
             크레용 신짱의 11번째 극장판. 콘티와 각본은 미즈시마 츠토무와 하라 케이이치 공동 작성.
            짱구는 못말려 극장판에서 디지털 작화로 제작된 첫번째 작품이다. 다만 필름 상영은 지속했기에 중간중간마다 잡티가 살짝 보이기도 했다.
             </Link>
           </p>
           <span className="postDate">1 hour ago</span>         
         </div>
         <hr /><hr />
    </div>
    <div className="posts">
         <img src="images/animation/03.jpg" alt="post01" className="postImg" />
         <div className="postInfo">
           <div className="postCats">
             <span className="postCat">너의 이름은</span>
             <span className="postCat">(2016)</span>
           </div>
           <p className="ppostTitle">
             <Link to="/detail">
             너의 이름은.(君の名は｡)은 2016년 8월 26일에 일본에서 개봉한 신카이 마코토 감독의 장편 일본 애니메이션 영화이다.
비 드래곤볼 일본 애니메이션 최초, 신카이 마코토 감독 작중 최초로 IMAX 규격으로 제작되었다. 국내에서는 3회[13] 상영된 바 있다.
             </Link>
           </p>
           <span className="postDate">1 hour ago</span>         
         </div>
         <hr /><hr />
    </div>
    <div className="posts">
         <img src="images/sf/01.jpg" alt="post01" className="postImg" />
         <div className="postInfo">
           <div className="postCats">
             <span className="postCat">디스트릭트9</span>
             <span className="postCat">(2009)</span>
           </div>
           <p className="ppostTitle">
             <Link to="/detail">
             2009년에 개봉한 닐 블롬캠프 감독의 SF 영화이다. 감독이 2005년에 찍은 단편 영화 얼라이브 인 요하네스버그를 원작으로 해서 장편 영화화한 작품이다. 배급 과정은 소니 픽처스 엔터테인먼트와 피터 잭슨이 담당했다. 또한 잭슨은 이 영화의 제작자이기도 하다. 
             </Link>
           </p>
           <span className="postDate">1 hour ago</span>         
         </div>
         <hr /><hr />
    </div>
    <div className="posts">
         <img src="images/sf/02.jpg" alt="post01" className="postImg" />
         <div className="postInfo">
           <div className="postCats">
             <span className="postCat">혹성탈출 : 진화의 시작</span>
             <span className="postCat">(2011)</span>
           </div>
           <p className="ppostTitle">
             <Link to="/detail">
             혹성탈출 시리즈의 2011년 리부트 작품. 사실 구 혹성탈출은 이미 5편의 시리즈로 프리퀄이 나온 셈이고, 팀 버튼의 혹성탈출은 애초에 지구가 아니고, 원숭이들의 지능발달 원인도 다르니…. 구 혹성탈출 4편인 '노예들의 반란'의 리부트로 보는 게 가장 근접하긴 하다.
             </Link>
           </p>
           <span className="postDate">1 hour ago</span>         
         </div>
         <hr /><hr />
    </div>
    <div className="posts">
         <img src="images/sf/03.jpg" alt="post01" className="postImg" />
         <div className="postInfo">
           <div className="postCats">
             <span className="postCat">인터스텔라</span>
             <span className="postCat">(2014)</span>
           </div>
           <p className="ppostTitle">
             <Link to="/detail">
             인터스텔라는 2014년에 개봉한 미국 영화로 크리스토퍼 놀란 연출, 매튜 매커너히, 앤 해서웨이 주연이다.

점점 황폐해져가는 지구를 대체할 인류의 터전을 찾기 위해 새롭게 발견된 웜홀을 통해 항성 간(Interstellar) 우주 여행을 떠나는 탐험가들의 모험이 연대기 순으로 그려진다.
             </Link>
           </p>
           <span className="postDate">1 hour ago</span>         
         </div>
         <hr /><hr />
    </div>
  </>   
  )
}