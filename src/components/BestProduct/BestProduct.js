import './BestProduct.css';
function BestProduct() {
    return (
        <div className='bestproduct'>
            <div className='bestproduct-bgr' style={{ backgroundImage: 'url(/img/best-bg.png)' }}>
                <div className='bestproduct-content grid wide'>
                    <div className='bestproduct-header'>
                        <h1 className='bestproduct-header-title'>BEST PRODUCT</h1>
                        <p className='bestproduct-header-text'>How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos Can be trimmed. Take the first</p>
                    </div>
                    <div className='bestproduct-list row no-gutters'>
                        <div className='bestproduct-item col l-4 m-4 c-4'>
                            <div className='bestproduct-item-img' style={{ backgroundImage: 'url(/img/best-image-01.png)' }}></div>
                            <img className='bestproduct-item-icon' src='/img/producticon-01.png' alt=''></img>
                            <div className='bestproduct-item-box'>
                                <h3 className='bestproduct-item-box-title'>How to create mobile-optimized</h3>
                                <div className='bestproduct-item-box-btn'>GO</div>
                            </div>
                        </div>
                        <div className='bestproduct-item col l-4 m-4 c-4'>
                            <div className='bestproduct-item-img' style={{ backgroundImage: 'url(/img/best-image-02.png)' }}></div>
                            <img className='bestproduct-item-icon' src='/img/producticon-02.png' alt=''></img>
                            <div className='bestproduct-item-box'>
                                <h3 className='bestproduct-item-box-title'>How to create mobile-optimized</h3>
                                <div className='bestproduct-item-box-btn'>GO</div>
                            </div>
                        </div>
                        <div className='bestproduct-item col l-4 m-4 c-4'>
                            <div className='bestproduct-item-img' style={{ backgroundImage: 'url(/img/best-image-03.png)' }}></div>
                            <img className='bestproduct-item-icon' src='/img/producticon-03.png' alt=''></img>
                            <div className='bestproduct-item-box'>
                                <h3 className='bestproduct-item-box-title'>How to create mobile-optimized</h3>
                                <div className='bestproduct-item-box-btn'>GO</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestProduct;