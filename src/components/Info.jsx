import hero1 from '../asset/image/hero_1.jpg'
const Info = () => {
  return (
    <div className="info">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 mt-5">
            <img src={hero1} alt="" className="img-info mt-5" />
          </div>
          <div className="col-md-6 col-12 mt-5">
            <h2 className="mt-5 f-weight color3">What is Coronavirus?</h2>
            <p className="f-normal mt-4">Coronaviruses are a type of virus. There are many different kinds, and some cause disease. A newly identified coronavirus, SARS-CoV-2, has caused a worldwide pandemic of respiratory illness, called COVID-19.</p>
            <ul className="ml-n5">
              <li className="ml-2">Most common symptoms:</li>
              <li className="ml-2"><i className="fas fa-check-circle"></i> High Fever</li>
              <li className="ml-2"><i className="fas fa-check-circle"></i> Cough</li>
              <li className="ml-2"><i className="fas fa-check-circle"></i> Headache</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Info