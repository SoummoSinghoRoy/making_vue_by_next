import Link from 'next/link'
import Navstyles from '../styles/Nav.module.css';

const MobileHeader = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-success">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div className="collapse" id="navbarToggleExternalContent">
        <div className={`form-group ms-auto me-4 mt-3 mt-lg-0 mt-md-0 ps-2 ${Navstyles.has_search}`}>
          <span className={`fa fa-search ${Navstyles.form_control_feedback}`}></span>
          <input type="text" className={`form-control ${Navstyles.form_control}`} />
        </div>
        <ul className="nav flex-column mb-2 mb-lg-0 ps-4">
          <li className={`nav-item mt-2 py-2 ${Navstyles.mobile_text_item}`}><span className="text-secondary">Learn</span>
            <ul className="nav">
              <li className= {`nav-item ms-3 py-2 ${Navstyles.mobile_text_item}`}><span className="text-secondary">Documentation</span>
                <ul className="nav flex-column">
                  <li className="nav-item ms-3">
                    <Link href="/">
                      <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Guide</span></a>
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link href="/">
                      <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>API</span></a>
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link href="/">
                      <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Style Guide</span></a>
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link href="/">
                      <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Examples</span></a>
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link href="/">
                      <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Cookbook</span></a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="nav">
              <li className= {`nav-item ms-3 ${Navstyles.mobile_text_item}`}><span className="text-secondary">Video Courses</span>
                <ul className="nav flex-column">
                  <li className="nav-item ms-3">
                    <Link href="/">
                      <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Examples</span></a>
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link href="/">
                      <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Cookbook</span></a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className={`nav-item  ${Navstyles.mobile_text_item}`}><span className="text-secondary">Ecosystem</span>
            <ul className="nav">
              <li className= {`nav-item ms-3 py-2 ${Navstyles.mobile_text_item}`}><span className="text-secondary">Help</span>
                <ul className="nav flex-column">
                  <li className="nav-item ms-3">
                    <Link href="/">
                      <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Forum</span></a>
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link href="/">
                      <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Chat</span></a>
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link href="/">
                      <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Meetups</span></a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="nav">
              <li className= {`nav-item ms-3 py-2 ${Navstyles.mobile_text_item}`}><span className="text-secondary">Tooling</span>
                <ul className="nav flex-column">
                  <li className="nav-item ms-3">
                    <Link href="/">
                      <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Dev Tools</span></a>
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link href="/">
                      <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Vue CLI</span></a>
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link href="/">
                      <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Vue Loader</span></a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="nav">
              <li className= {`nav-item ms-3 py-2 ${Navstyles.mobile_text_item}`}><span className="text-secondary">Core Libraries</span>
                <ul className="nav flex-column">
                  <li className="nav-item ms-3">
                    <Link href="/">
                      <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Vue Router</span></a>
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link href="/">
                      <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Vuex</span></a>
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link href="/">
                      <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Vue Server Renderer</span></a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="nav">
              <li className= {`nav-item ms-3 py-2 ${Navstyles.mobile_text_item}`}><span className="text-secondary">News</span>
                <ul className="nav flex-column">
                  <li className="nav-item ms-3">
                    <Link href="/">
                      <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Weekly News</span></a>
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link href="/">
                      <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Roadmap</span></a>
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link href="/">
                      <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Events</span></a>
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link href="/">
                      <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Twitter</span></a>
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link href="/">
                      <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Blog</span></a>
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link href="/">
                      <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Jobs</span></a>
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link href="/">
                      <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Dev Community</span></a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className={`nav-item mt-2 py-2 ${Navstyles.mobile_text_item}`}>
            <Link  href="#">
              <a className={`text-decoration-none text-secondary ${Navstyles.mobile_text_item}`}> <span>Team</span></a>
            </Link>
          </li>
          <li className= {`nav-item  py-2 ${Navstyles.mobile_text_item}`}><span className="text-secondary">Resources</span>
            <ul className="nav flex-column">
              <li className="nav-item ms-3">
                <Link href="/">
                  <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Partners</span></a>
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link href="/">
                  <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Themes</span></a>
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link href="/">
                  <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Awesome Vue</span></a>
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link href="/">
                  <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Browse Packages for Vue</span></a>
                </Link>
              </li>
            </ul>
          </li>
          <li className= {`nav-item py-2 ${Navstyles.mobile_text_item}`}> <span className="text-secondary">Support Vue</span>
            <ul className="nav flex-column">
              <li className="nav-item ms-3">
                <Link href="/">
                  <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>One-time Donations</span></a>
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link href="/">
                  <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>Recurring Pledges</span></a>
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link href="/">
                  <a className={`nav-link text-secondary ${Navstyles.mobile_text_item}`}><span>T-shirt Shop</span></a>
                </Link>
              </li>
            </ul>
          </li>
          <li className= {`nav-item py-2 ${Navstyles.mobile_text_item}`}><span className="text-secondary">Translate</span> 
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileHeader;