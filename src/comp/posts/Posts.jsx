import './posts.css'
import { Link } from 'react-router-dom';

export default function Posts() {
  return (
    <>
    <div className="posts">
         <img src="images/action/01.jpg" alt="post01" className="postImg" />
         <div className="postInfo">
           <div className="postCats">
             <span className="postCat">어벤져스 시리즈</span>
             <span className="postCat">(2012 ~ 2019)</span>
           </div>
           <p className="ppostTitle">
             <Link to="/detail">
             가디언즈 오브 갤럭시 멤버들과 와칸다 군대, 닥터 스트레인지 등 새로운 팀들과 함께 환상의 대연합을 이룬 어벤져스, 역대 최강 빌런 타노스에 맞서 전 우주에 운명이 걸린 인피니티 스톤을 향한 무한 대결이 펼쳐진다!
            마블의 클라이맥스를 목격하라!
             </Link>
           </p>
           <span className="postDate">1 hour ago</span>         
         </div>
         <hr /><hr />
    </div>
    <div className="posts">
         <img src="images/action/02.jpg" alt="post01" className="postImg" />
         <div className="postInfo">
           <div className="postCats">
             <span className="postCat">범죄도시</span>
             <span className="postCat">(2017)</span>
           </div>
           <p className="ppostTitle">
             <Link to="/detail">
             2017년 10월 3일에 개봉한 한국 영화. 서울특별시 구로구 가리봉동의 차이나타운을 배경으로, 조선족 범죄조직을 소탕하는 형사들의 이야기를 그렸다.
             </Link>
           </p>
           <span className="postDate">1 hour ago</span>         
         </div>
         <hr /><hr />
    </div>
    <div className="posts">
         <img src="images/action/03.jpg" alt="post01" className="postImg" />
         <div className="postInfo">
           <div className="postCats">
             <span className="postCat">베테랑</span>
             <span className="postCat">(2015)</span>
           </div>
           <p className="ppostTitle">
             <Link to="/detail">
             베테랑 광역수사대 VS 유아독존 재벌 3세, 자존심을 건 한판 대결이 시작된다!
             </Link>
           </p>
           <span className="postDate">1 hour ago</span>         
         </div>
         <hr /><hr />
    </div>
    <div className="posts">
         <img src="images/fantasy/01.jpg" alt="post01" className="postImg" />
         <div className="postInfo">
           <div className="postCats">
             <span className="postCat">해리포터 시리즈</span>
             <span className="postCat">(2011)</span>
           </div>
           <p className="ppostTitle">
             <Link to="/detail">
             해리 포터 시리즈의 마지막 영화이자 해리 포터와 죽음의 성물 - 1부에 이어 해리 포터와 죽음의 성물 소설의 후반부를 실사화한 영화다. 해리 포터 영화 시리즈 중 유일하게 2부작으로 나눠서 개봉했다.
             제84회 아카데미 시상식 시각효과상, 미술상, 분장상 후보로 선정되었다.
             </Link>
           </p>
           <span className="postDate">1 hour ago</span>         
         </div>
         <hr /><hr />
    </div>
    <div className="posts">
         <img src="images/fantasy/02.jpg" alt="post01" className="postImg" />
         <div className="postInfo">
           <div className="postCats">
             <span className="postCat">나니아 연대기: 사자, 마녀 그리고 옷장</span>
             <span className="postCat">(2005)</span>
           </div>
           <p className="ppostTitle">
             <Link to="/detail">
             제78회 아카데미 시상식 분장상 수상작 / 시각효과상, 음향효과상 후보작

C. S. 루이스의 소설 나니아 연대기를 실사화한 첫 번째 영화로 슈렉 1편과 2편을 연출한 앤드류 아담슨이 감독을 맡았다. 이후 2개의 후속 영화가 제작되어 나니아 연대기 실사영화 시리즈가 만들어졌다.
             </Link>
           </p>
           <span className="postDate">1 hour ago</span>         
         </div>
         <hr /><hr />
    </div>
    <div className="posts">
         <img src="images/fantasy/03.jpg" alt="post01" className="postImg" />
         <div className="postInfo">
           <div className="postCats">
             <span className="postCat">판의 미로 - 오필리아와 세 개의 열쇠</span>
             <span className="postCat">(2006)</span>
           </div>
           <p className="ppostTitle">
             <Link to="/detail">
             2006년 기예르모 델 토로가 각본을 쓰고 감독한 미국, 멕시코, 스페인 합작의 판타지 영화. 델 토로 감독의 최고작이라고 불린다. 1944년 내전이 막 끝난 시점의 스페인을 배경으로 한 소녀가 겪는 환상과 현실을 그리고 있다. 델 토로의 동료 감독인 알폰소 쿠아론이 제작에도 참여하기도 했다.
             </Link>
           </p>
           <span className="postDate">1 hour ago</span>         
         </div>
         <hr /><hr />
    </div>
  </>   
  )
}