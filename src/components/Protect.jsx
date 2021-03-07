import imgProtect from '../asset/image/protect.png'
const Protect = () => {
  return (
    <div className="protect bg-second">
      <div className="container">
        <div className="row text-center">
          <div className="col-12 mt-5">
            <p>What you need to do</p>
          </div>
          <div className="col-12 mb-5">
            <h3 className="f-weight color3">How To Protect Yourself</h3>
          </div>
          <div className="col-12 mb-5">
            <p className="f-normal">Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow the advice given <b className="color3">below</b> or by your local health authority.</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-3">
            <p className="f-weight">You should do</p>
            <ul className="ml-n5">
              <li className="ml-2 color-list"><i className="fas fa-check-circle"></i> Stay at home</li>
              <li className="ml-2 color-list"><i className="fas fa-check-circle"></i> Wear mask</li>
              <li className="ml-2 color-list"><i className="fas fa-check-circle"></i> Use Sanitizer</li>
              <li className="ml-2 color-list"><i className="fas fa-check-circle"></i> Disinfect your home</li>
              <li className="ml-2 color-list"><i className="fas fa-check-circle"></i> Wash your hands</li>
              <li className="ml-2 color-list"><i className="fas fa-check-circle"></i> Frequent self-isolation</li>
            </ul>
          </div>
          <div className="col-3">
            <p className="f-weight">You should avoid</p>
            <ul className="ml-n5">
              <li className="ml-2 color4"><i className="far fa-times-circle"></i> Avoid infected people</li>
              <li className="ml-2 color4"><i className="far fa-times-circle"></i> Avoid animals</li>
              <li className="ml-2 color4"><i className="far fa-times-circle"></i> Avoid handshaking</li>
              <li className="ml-2 color4"><i className="far fa-times-circle"></i> Aviod infected surfaces</li>
              <li className="ml-2 color4"><i className="far fa-times-circle"></i> Don't touch your face</li>
              <li className="ml-2 color4"><i className="far fa-times-circle"></i> Avoid droplets</li>
            </ul>
          </div>
          <div className="col-6 mt-n4">
            <img src={imgProtect} alt="protect" className="img-protect" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Protect