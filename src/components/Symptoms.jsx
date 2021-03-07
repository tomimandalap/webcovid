import img1 from '../asset/image/symptom_high-fever.png'
import img2 from '../asset/image/symptom_cough.png'
import img3 from '../asset/image/symptom_sore-troath.png'
import img4 from '../asset/image/symptom_headache.png'
const Symptoms = () => {
  return (
    <div className="symptoms">
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-12 mb-3">
            <h2 className="f-weight">Symptoms of Coronavirus</h2>
          </div>
          <div className="col-12 mb-5">
            <p className="f-normal">COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 mb-4">
            <div className="card w-100 card-shadow">
              <div className="card-body row">
                <div className="col-3">
                  <img src={img1} alt="demam" className="img-card" />
                </div>
                <div className="col-9 mt-2">
                  <h5 className="card-title f-weight color3">High Fever</h5>
                  <p className="f-small">if you develop any of these symptom, call your healthcare provider or health facility and seek medical care immediately.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 mb-4">
            <div className="card w-100 card-shadow">
              <div className="card-body row">
                <div className="col-3">
                  <img src={img2} alt="demam" className="img-card" />
                </div>
                <div className="col-9 mt-2">
                  <h5 className="card-title f-weight color3">Cough</h5>
                  <p className="f-small">if you develop any of these symptom, call your healthcare provider or health facility and seek medical care immediately.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 mb-4">
            <div className="card w-100 card-shadow">
              <div className="card-body row">
                <div className="col-3">
                  <img src={img3} alt="demam" className="img-card" />
                </div>
                <div className="col-9 mt-2">
                  <h5 className="card-title f-weight color3">Sore Troath</h5>
                  <p className="f-small">if you develop any of these symptom, call your healthcare provider or health facility and seek medical care immediately.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 mb-4">
            <div className="card w-100 card-shadow">
              <div className="card-body row">
                <div className="col-3">
                  <img src={img4} alt="demam" className="img-card" />
                </div>
                <div className="col-9 mt-2">
                  <h5 className="card-title f-weight color3">Headache</h5>
                  <p className="f-small">if you develop any of these symptom, call your healthcare provider or health facility and seek medical care immediately.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Symptoms