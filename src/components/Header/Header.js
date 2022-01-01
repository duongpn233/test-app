import './Header.css';
function Header() {
    return (
        <div className='header'>
            <div className='header-group'>
                <div className='header-logo'>
                    <img className='header-logo-img' src='/test-app/img/logo.png' alt=''></img>
                </div>
                <label className='header-btn-mb' htmlFor='header-check-nav'>
                    <i className="fas fa-bars"></i>
                </label>
                <input className='header-input-mb' type='checkbox' id='header-check-nav'></input>
                <div className='header-nav'>
                    <div className='header-nav-left'>
                        <span className='header-nav-intro'>INTRODUCTION</span>
                        <span className='header-nav-solution'>SOLUTION</span>
                        <span className='header-nav-rate'>RATE PLAN</span>
                    </div>
                    <div className='header-nav-right'>
                        <span className='header-nav-login'>LOGIN</span>
                        <span className='header-nav-apply'>APPLY FOR FREE USE</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;