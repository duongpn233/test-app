import './Issue.css';
function Issue() {
    return (
        <div className='issue'>
            <div className='issue-header'>
                <div className='issue-header-title-group'>
                    <h1 className='issue-header-title'>HAPPENED’S ISSUE</h1>
                    <p className='issue-header-text'>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</p>
                </div>
                <div className='issue-header-btn'>SEE MORE</div>
            </div>
            <img className='issue-obj1' src='/test-app/img/issue-sx1.png' alt=''></img>
            <img className='issue-obj2' src='/test-app/img/issue-sx2.png' alt=''></img>
            <div className='issue-list'>
                <div className='row no-gutters'>
                    <div className='col l-2-4 m-6 c-12 mb'>
                        <div className='issue-banner'>
                            <div className='issue-banner-content'>
                                <h2 className='issue-banner-title'>WHPN ISSUE</h2>
                                <img className='issue-banner-img' src='/test-app/img/issue-r.png' alt=''></img>
                            </div>
                            <img className='issue-banner-icon' src='/test-app/img/issue-icon.png' alt=''></img>
                        </div>
                    </div>
                    <div className='col l-2-4 m-6 c-12'>
                        <div className='issue-item hot'>
                            <div className='issue-item-brand'>B BRAND</div>
                            <div className='issue-item-img' style={{ backgroundImage: 'url(/test-app/img/issue-item.png)' }}></div>
                            <img className='issue-item-icon-hot' src='/test-app/img/issue-hot.png' alt=''></img>
                        </div>
                    </div>
                    <div className='col l-2-4 m-6 c-12'>
                        <div className='issue-item'>
                            <div className='issue-item-brand'>B BRAND</div>
                            <div className='issue-item-img' style={{ backgroundImage: 'url(/test-app/img/issue-item.png)' }}></div>
                            <img className='issue-item-icon-hot' src='/test-app/img/issue-hot.png' alt=''></img>
                        </div>
                    </div>
                    <div className='col l-2-4 m-6 c-12'>
                        <div className='issue-item orange'>
                            <div className='issue-item-brand'>B BRAND</div>
                            <div className='issue-item-img' style={{ backgroundImage: 'url(/test-app/img/issue-item.png)' }}></div>
                            <img className='issue-item-icon-hot' src='/test-app/img/issue-hot.png' alt=''></img>
                        </div>
                    </div>
                    <div className='col l-2-4 m-6 c-12'>
                        <div className='issue-item icon'>
                            <div className='issue-item-brand'>B BRAND</div>
                            <div className='issue-item-img' style={{ backgroundImage: 'url(/test-app/img/issue-item.png)' }}></div>
                            <img className='issue-item-icon-lol' src='/test-app/img/issue-lol.png' alt=''></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Issue;