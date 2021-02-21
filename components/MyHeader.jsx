import MobileHeader from './MobileHeader';
import MyNavbar from './MyNavbar';

const MyHeader = () => {
  return (
    <div>
      <div className="d-none d-lg-block d-md-block d-sm-none">
        <MyNavbar />
      </div>
      <div className="d-block d-lg-none d-md-none d-sm-block">
        <MobileHeader />
      </div>
    </div>
  )
}

export default MyHeader;