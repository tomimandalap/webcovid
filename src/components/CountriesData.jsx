import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const CountriesData = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://api.covid19api.com/summary').then((response) => {
      setData(response.data.Countries)
    }).catch((error) => {
      if (error) {
        setData(undefined)
      }
    })
  }, [])
  return (
    <div className="countriesdata">
      <div className="container">
        <div className="row text-center mt-5">
          <div className=" col-12 mt-5">
            <h3 className="color3 f-weight">Covid-19 Information Table</h3>
          </div>
          <div className="col-12">
            <p>Today's Covid-19 information table in each country.</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 overflow-auto h-table">
            <table className="table table-striped">
              <thead className="fixed-top-table">
                <tr>
                  <th scope="col">Code</th>
                  <th scope="col">Country</th>
                  <th scope="col">TotalConfirmed</th>
                  <th scope="col">TotalDeaths</th>
                  <th scope="col">TotalRecovered</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data !== undefined ?
                  (
                    data.map((itm, idx) => (
                      <tr key={idx}>
                        <td>{itm.CountryCode}</td>
                        <td>{itm.Country}</td>
                        <td>{itm.TotalConfirmed.toLocaleString('en').split(',').join('.')}</td>
                        <td>{itm.TotalDeaths.toLocaleString('en').split(',').join('.')}</td>
                        <td>{itm.TotalRecovered.toLocaleString('en').split(',').join('.')}</td>
                        <td>
                          <Link to={`/detail/${itm.Slug}`} className="btn btn-link">Detail</Link>
                        </td>
                      </tr>
                    ))
                  )
                  :
                  (
                    <tr>
                      <td>ID</td>
                      <td>Indonesia</td>
                      <td>1.234.544</td>
                      <td>500.555</td>
                      <td>250.875</td>
                      <td>Aksi</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountriesData