const Footer = () => {
  return (
    <div className="footer bg-second">
      <div className="container">
        <div className="row">

          <div className="col-4 mt-5">
            <h6 className="f-weight">About</h6>
            <p className="f-small">This website was created to provide information about Covid-19 around the world and every country. And this website was built using ReactJs as a learning material for website creation.</p>
          </div>

          <div className="col-3 mt-5">
            <h6 className="f-weight">Quick Links</h6>
            <ul className="ml-n5 t-line">
              <li className="ml-2"><a className="f-small f-weight color4" href="/">Symptoms</a></li>
              <li className="ml-2"><a className="f-small f-weight color4" href="/">Prevention</a></li>
              <li className="ml-2"><a className="f-small f-weight color4" href="/">FAQs</a></li>
              <li className="ml-2"><a className="f-small f-weight color4" href="/">About Coronavirus</a></li>
              <li className="ml-2"><a className="f-small f-weight color4" href="/">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-3 mt-5">
            <h6 className="f-weight">Helpfull Link</h6>
            <ul className="ml-n5 t-line">
              <li className="ml-2"><a className="f-small f-weight color4" href="/">Helathcare Professional</a></li>
              <li className="ml-2"><a className="f-small f-weight color4" href="/">LGU Facilities</a></li>
              <li className="ml-2"><a className="f-small f-weight color4" href="/">Protect Your Family</a></li>
              <li className="ml-2"><a className="f-small f-weight color4" href="/">World Health</a></li>
            </ul>
          </div>

          <div className="col-2 mt-5">
            <h6 className="f-weight">Resources</h6>
            <ul className="ml-n5 t-line">
              <li className="ml-2"><a className="f-small f-weight color4" href="/">WHO Website</a></li>
              <li className="ml-2"><a className="f-small f-weight color4" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">CDC Website</a></li>
              <li className="ml-2"><a className="f-small f-weight color4" href="/">Gov Website</a></li>
              <li className="ml-2"><a className="f-small f-weight color4" href="/">DOH Website</a></li>
            </ul>
          </div>

        </div>
        <div className="row text-center mt-5">
          <div className="col-12">
            <p className="f-small">Copyright &copy;2021 All rights reserved | This template is made with  by <a href="https://themewagon.com/themes/free-responsive-bootstrap-4-html5-charity-website-templates-covid/">Colorlib</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer