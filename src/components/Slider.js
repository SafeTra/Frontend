const Slider = ({review, nextSlider, prevSlider}) => {
    return (
        <div className='d-flex justify-between'>
            <img onClick={prevSlider} src={require('../images/icon-previous.svg').default} alt='prev'/>
            <div class="review w-70">
                <div class="img-container">
                    <img id="person-img" src={require(`../images/testimonial-${review.id}.jpg`)} alt={review.username}/>
                </div>
                <h3 className='m-0'>{review.username}</h3>
                <p>{review.career}</p>
                <p>{review.content}</p>                
            </div>
            <img onClick={nextSlider} src={require('../images/icon-next.svg').default} alt='next'/>
        </div>
    )
}

export default Slider;