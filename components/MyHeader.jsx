import MyHeaderstyles from '../styles/MyHeader.module.css';
import MyNavbar from './MyNavbar';

const MyHeader = () => {
  return (
    <div>
      <div className="d-none d-lg-block d-md-block d-sm-none">
        <div className="container-fluid">
          <div className={`row py-2 text-center ${MyHeaderstyles.top_header_bg}`}>
            <div className="col-12 col-lg-12 col-md-12 col-sm-12">
              <span className={MyHeaderstyles.top_heading}>You’re browsing the documentation for v2.x and earlier.<a href="https://v3.vuejs.org/" className="text-decoration-none text-light fw-bold"> Click Here</a> for v3.x documentation.</span>
            </div>
          </div>
        </div>
        <MyNavbar />
      </div>
    </div>
  )
}

export default MyHeader;