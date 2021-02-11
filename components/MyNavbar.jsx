import Link from 'next/link'
import Navstyles from '../styles/Nav.module.css';



const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className={`container d-flex ${Navstyles.container}`}>
        <Link href="/">
          <a className={`navbar-brand me-auto pt-0 ${Navstyles.logo_text}`}>Vue Js</a>
        </Link>
        <div className={`form-group ms-auto me-4 mt-3 mt-lg-0 mt-md-0 ${Navstyles.has_search}`}>
          <span className={`fa fa-search ${Navstyles.form_control_feedback}`}></span>
          <input type="text" className={`form-control ${Navstyles.form_control}`} />
        </div>
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <Link href="/">
              <a className={`nav-link dropdown-toggle ${Navstyles.text_item}`} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">Learn</a>
            </Link>
            
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start" aria-labelledby="navbarDropdownMenuLink">
              <li className="dropdown-item fw-bold text-secondary">Documentation</li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Guide</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">API</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Style Guide</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Examples</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Cook Book</a>
                </Link>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li className="dropdown-item fw-bold text-secondary">Video Courses</li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Vue Mastery</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Vue School</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link href="/">
              <a className={`nav-link dropdown-toggle ${Navstyles.text_item}`} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">Ecosystem</a>
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li className="dropdown-item fw-bold text-secondary">Help</li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Forum</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Chat</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Meetups</a>
                </Link>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li className="dropdown-item fw-bold text-secondary">Tooling</li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Dev Tools</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Vue CLI</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Vue Loader</a>
                </Link>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li className="dropdown-item fw-bold text-secondary">Core Libraries</li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Vue Router</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Vuex</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Vue Server Renderer</a>
                </Link>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li className="dropdown-item fw-bold text-secondary">News</li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Weekly News</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Roadmap</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Events</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Twitter</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Jobs</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Dev Community</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link href="/">
              <a className={`nav-link ${Navstyles.text_item}`}>Team</a>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link href="/">
              <a className={`nav-link dropdown-toggle ${Navstyles.text_item}`} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">Resources</a>
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <Link href="/">
                  <a className="dropdown-item">Partners</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Themes</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Awesome Vue</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Browse package for Vue</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link href="/">
              <a className={`nav-link dropdown-toggle ${Navstyles.text_item}`} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">Support Vue</a>
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <Link href="/">
                  <a className="dropdown-item">One Time Donations</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">Recurring Pledges</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item">T Shirt Shop</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${Navstyles.text_item}`} href="#">Translation</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default MyNavbar;