import './Story.css';
function Story() {
    return (
        <div className='story'>
            <div className='story-header'>
                <h1 className='story-header-title'>BRAND STORY</h1>
                <p className='story-header-text'>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</p>
            </div>
            <div className='story-container'>
                <div className='story-bgr'>
                    <img className='story-bgr-img' src='/img/story-bgr.png' alt=''></img>
                </div>
                <div className='story-content'>
                    <h2 className='story-content-title'>What Happened’s Brand story</h2>
                    <p className='story-content-text'>청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다.</p>
                    <div className='story-content-btn'>SEE MORE</div>
                </div>
                <img className='story-content-obj1' src='/img/obj1.png' alt=''></img>
                <img className='story-content-obj2' src='/img/obj2.png' alt=''></img>
                <img className='story-content-obj3' src='/img/obj3.png' alt=''></img>
                <img className='story-content-obj4' src='/img/obj4.png' alt=''></img>
                <img className='story-content-obj5' src='/img/obj5.png' alt=''></img>
                <img className='story-content-obj6' src='/img/obj6.png' alt=''></img>
                <img className='story-content-obj7' src='/img/obj7.png' alt=''></img>
            </div>
        </div>
    )
}

export default Story;