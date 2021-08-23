/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        ( ﾟ▽ﾟ)/ * * *   Alfaj0r.com is made with Gatsby, the <a href="https://templates.netlify.com/template/foundation-gatsby-netlifycms-starter/"Foundation template</a>, and Netlify CMS.
      </p>
    </div>
  </footer>
)

export default Footer
