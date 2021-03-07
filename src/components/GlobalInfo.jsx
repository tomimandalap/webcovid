const Global = () => {
  return (
    <div className="global bg-dark-gray text-center">
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5">
            <h3 className="f-weight color3">Coronavirus Statistics</h3>
          </div>
          <div className="col-12">
            <p>Data on confirmed cases of COVID-19 throughout the world.</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-4">
            <span className="f-i-virus"><i className="fas fa-virus"></i> </span>
            <small className="color3">+ 1000.254.111</small>
            <h2>18.000.123</h2>
            <p className="f-weight">ACTIVE CASES</p>
          </div>
          <div className="col-4">
            <span className="f-i-virus"><i className="fas fa-user-alt"></i> </span>
            <small className="color3">+ 9364</small>
            <h2>2569746</h2>
            <p className="f-weight">DEATHS</p>
          </div>
          <div className="col-4">
            <span className="f-i-virus"><i className="fas fa-user-nurse"></i> </span>
            <small className="color3">+ 1000.254.111</small>
            <h2>8,397,665</h2>
            <p className="f-weight">RECOVERED CASES</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Global