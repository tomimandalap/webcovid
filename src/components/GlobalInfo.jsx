import { useState, useEffect } from 'react'
// import formatDigit from '../helpers/setDigit'
import axios from 'axios'
const Global = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('https://api.covid19api.com/summary').then((response) => {
      setData(response.data.Global)
    }).catch((error) => {
      // console.log(error)
      if (error) {
        setData(undefined)
      }
    })
  }, [])
  return (
    <div className="global bg-dark-gray text-center">
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5">
            <h3 className="f-weight color3">Coronavirus Statistics</h3>
          </div>
          <div className="col-12">
            <p>Data on confirmed cases of COVID-19 around the world today.</p>
          </div>
        </div>
        {/* <div className="col-12">
            {JSON.stringify(data)}
          </div> */}
        {data !== undefined ?
          (
            <div className="row mt-5">
              <div className="col-4">
                <span className="f-i-virus"><i className="fas fa-virus"></i> </span>
                <small className="color3">+{data.NewConfirmed}</small>
                <h2>{data.TotalConfirmed}</h2>
                <p className="f-weight">ACTIVE CASES</p>
              </div>
              <div className="col-4">
                <span className="f-i-virus"><i className="fas fa-user-alt"></i> </span>
                <small className="color3">+{data.NewDeaths}</small>
                <h2>{data.TotalDeaths}</h2>
                <p className="f-weight">DEATHS</p>
              </div>
              <div className="col-4">
                <span className="f-i-virus"><i className="fas fa-user-nurse"></i> </span>
                <small className="color3">+{data.NewRecovered}</small>
                <h2>{data.TotalRecovered}</h2>
                <p className="f-weight">RECOVERED CASES</p>
              </div>
            </div>
          )
          :
          (
            <div className="row mt-5">
              <div className="col-4">
                <span className="f-i-virus"><i className="fas fa-virus"></i> </span>
                <small className="color3">+1.234</small>
                <h2>10.234.998</h2>
                <p className="f-weight">ACTIVE CASES</p>
              </div>
              <div className="col-4">
                <span className="f-i-virus"><i className="fas fa-user-alt"></i> </span>
                <small className="color3">+8.542</small>
                <h2>4.578.965</h2>
                <p className="f-weight">DEATHS</p>
              </div>
              <div className="col-4">
                <span className="f-i-virus"><i className="fas fa-user-nurse"></i> </span>
                <small className="color3">+4.568</small>
                <h2>2.054.214</h2>
                <p className="f-weight">RECOVERED CASES</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
export default Global