import "./Hero.css"

import img3 from "../../images/img3.jpg"

const Hero = () => {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100 img-shop" alt="img shop" />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Hero
