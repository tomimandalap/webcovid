import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const DetailData = () => {
  const params = useParams();
  const slug = params.Slug;
  const [dataDetail, setDetail] = useState([]);
  useEffect(() => {
    axios.get(`https://api.covid19api.com/live/country/${slug}/status/confirmed`).then((response) => {
      setDetail(response.data.reverse())
    }).catch((error) => {
      if (error) {
        setDetail(undefined)
      }
    })
  }, [])
  return (
    <div className="detailData">
      <div className="container">
        <div className="row text-center mt-5">
          <div className=" col-12 mt-5">
            <h3 className="color3 f-weight">Covid-19 Information Table</h3>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12 overflow-auto h-table">
            <table className="table table-striped table-hover mt-3">
              <thead>
                <tr>
                  <th scope="col">Confirmed</th>
                  <th scope="col">Deaths</th>
                  <th scope="col">Recovered</th>
                  <th scope="col">Active</th>
                  <th scope="col">Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {dataDetail !== undefined ?
                  (
                    dataDetail.map((item, i) => (
                      <tr key={i}>
                        <td>{item.Confirmed.toLocaleString('en').split(',').join('.')}</td>
                        <td>{item.Deaths.toLocaleString('en').split(',').join('.')}</td>
                        <td>{item.Recovered.toLocaleString('en').split(',').join('.')}</td>
                        <td>{item.Active.toLocaleString('en').split(',').join('.')}</td>
                        <td>{item.Date.slice(0, 10).split('-').reverse().join('-')}</td>
                      </tr>
                    ))
                  )
                  :
                  (
                    <tr>
                      <td>55.894</td>
                      <td>2.444</td>
                      <td>49.555</td>
                      <td>3.852</td>
                      <td>01-01-2021</td>
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
export default DetailData