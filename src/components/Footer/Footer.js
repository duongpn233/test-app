import './Footer.css';
function Footer() {
    return (
        <div className='footer'>
            <div className='footer-wrap'>
                <div className='footer-content'>
                    <div className='footer-right'>
                        <h4 className='footer-header'>what happened</h4>
                        <ul className='footer-menu'>
                            <li className='footer-item'>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
                            <li className='footer-item'>[공지] 29CM 강남 스토어 영업 종료</li>
                            <li className='footer-item'>[공지] iOS 10 이하 버전 지원 중단 안내</li>
                            <li className='footer-item'>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
                            <li className='footer-item'>[공지] 29CM 강남 스토어 영업 종료</li>
                        </ul>
                    </div>
                    <div className='footer-left'>
                        <div className='footer-menu-group'>
                            <h4 className='footer-header'>about</h4>
                            <ul className='footer-menu'>
                                <li className='footer-item'>회사 소개</li>
                                <li className='footer-item'>인재 채용</li>
                                <li className='footer-item'>상시 할인 혜택</li>
                            </ul>
                        </div>
                        <div className='footer-menu-group'>
                            <h4 className='footer-header'>my oder</h4>
                            <ul className='footer-menu'>
                                <li className='footer-item'>내 주문</li>
                                <li className='footer-item'>주문 배송</li>
                                <li className='footer-item'>취소 / 교환 / 반품 내역</li>
                                <li className='footer-item'>상품 리뷰 내역</li>
                                <li className='footer-item'>증빙 서류 발급</li>
                            </ul>
                        </div>
                        <div className='footer-menu-group'>
                            <h4 className='footer-header'>my account</h4>
                            <ul className='footer-menu'>
                                <li className='footer-item'>회원 정보 수정</li>
                                <li className='footer-item'>회원 등급</li>
                                <li className='footer-item'>마일리지 현황</li>
                                <li className='footer-item'>쿠폰</li>
                            </ul>
                        </div>
                        <div className='footer-menu-group'>
                            <h4 className='footer-header'>help</h4>
                            <ul className='footer-menu'>
                                <li className='footer-item'>1 : 1 상담 내역</li>
                                <li className='footer-item'>상품 Q & A 내역</li>
                                <li className='footer-item'>공지 사항</li>
                                <li className='footer-item'>자주하는 질문</li>
                                <li className='footer-item'>고객의 소리</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer-info'>
                    <div className='footer-info-text'>© 2020-2021 what happened corp <span>l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호</span> : 356-00-00000 ㅣ test0101@what happened.co.kr <span>서울특별시 강남구 도산대로 8길 17 </span>｜ FAX : 070-0000-0000 <span>l 서비스 이용약관 l 개인정보처리방침</span></div>
                    <div className='footer-icon'>
                        <img className='footer-icon-img' src='/test-app/img/footer-icon1.png' alt=''></img>
                        <img className='footer-icon-img' src='/test-app/img/footer-icon2.png' alt=''></img>
                        <img className='footer-icon-img' src='/test-app/img/footer-icon3.png' alt=''></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;