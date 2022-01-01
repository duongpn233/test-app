import './Introduction.css';
function Introduction() {
    return (
        <div className='introduction'>
            <div className='introduction-background' style={{ backgroundImage: 'url(/img/introduction.png)' }}>
                <div className='introduction-content'>
                    <h1 className='introduction-content-title'>WHAT HAPPENED!</h1>
                    <p className='introduction-content-text'>
                        How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos Can be trimmed. Take the first step to your brand's success. How to create mobile-optimized videos in minutes.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Introduction;