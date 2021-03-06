import Global from '../components/GlobalInfo'
import CountriesData from '../components/CountriesData'
import img1 from '../asset/image/illustration.png'
const Countries = () => {
  return (
    <div className="countries">
      <div className="hero-v1 slice bg-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 mr-auto text-center text-lg-left">
              <span className="d-block subheading uppercase f-weight l-space f-small color-list">Info</span>
              <h1 className="heading mb-3 f-weight color3">Countries</h1>
              <p className="mb-5">SARS-CoV-2, which causes Covid-19, spreads through contact with the patient's airway droplets that are produced when talking, coughing, or sneezing. Droplets can stay in the air for a certain time and for a certain distance.</p>
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
      <Global />
      <CountriesData />
    </div>
  )
}
export default Countries