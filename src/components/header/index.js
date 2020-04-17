import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from "./style.module.scss";

const Header = ({ siteTitle }) => (
  <header className={style.header}>
    <div className={style.in}>
      <h1 className={style.headerTitle}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
