import './singlepost.css'

export default function SinglePost() {
  return (
    <div className="single">
        <div className="singlePostWrapper">
            <img src="images/action/01.jpg" alt="post01" className="singlePostImg" />
            <h1 className="singlePostTitle">
            어벤져스 실사영화 시리즈의 3번째 작품이자 마블 시네마틱 유니버스 페이즈 3의 7번째 작품이다. 감독은 윈터 솔져와 시빌 워를 연출한 루소 형제.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pencil"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
            <p>
            가디언즈 오브 갤럭시 멤버들과 와칸다 군대, 닥터 스트레인지 등 새로운 팀들과 함께 환상의 대연합을 이룬 어벤져스, 역대 최강 빌런 타노스에 맞서 전 우주에 운명이 걸린 인피니티 스톤을 향한 무한 대결이 펼쳐진다!
            </p>
            <p>
            마블의 클라이맥스를 목격하라!
            </p>
            
            </div>
        </div>
    </div>
  )
}
