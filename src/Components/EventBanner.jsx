import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner2 from "../../public/banner2.jpg";
import banner3 from "../../public/banner3.jpg";
function EventBanner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    fade: true,
  };
  return (
    <Slider {...settings}>
      <div className="">
        <div>
          <img src={banner2} alt="" />
        </div>
      </div>
      <div>
        <div>
          <img src={banner3} alt="" />
        </div>
      </div>
      <div>
        <div>
          <img src={banner2} alt="" />
        </div>
      </div>
      <div>
        <div>
          <img src={banner3} alt="" />
        </div>
      </div>
    </Slider>
  );
}

export default EventBanner;
