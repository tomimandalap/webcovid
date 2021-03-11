import Info from '../components/Info'
import img1 from '../asset/image/illustration.png'
const About = () => {
  return (
    <div className="about">
      <div className="hero-v1 slice bg-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 mr-auto text-center text-lg-left">
              <span className="d-block subheading uppercase f-weight l-space f-small color-list">About</span>
              <h1 className="heading mb-3 f-weight color3">About Us</h1>
              <p className="mb-5">This website was created to provide information about Covid-19 around the world and every country. And this website was built using <b className="color3">ReactJs</b> as a learning material for website creation.</p>
              {/* <button className="btn btn-info p-2">
                Hotline 119 <i className="fas fa-phone"></i></button> */}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <figure className="illustration mt-img">
                <img src={img1} alt="ilustration" className="img-fluid" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <Info />
    </div>
  )
}
export default About