import Link from "next/link";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content content-1140 center-relative">
        {/* Your Contact links */}
     
        <div className="footer-text">
          <p className="footer-first-line">
            <Link href="mailto:designbasekorea@gmail.com">designbasekorea@gmail.com</Link>
          </p>
        </div>
        
        <ul id="footer-sidebar">
          <li className="widget widget_text">
            <h4 className="widgettitle">Opta</h4>
            {/* Contact Info */}
            <div className="textwidget">
              <p>Phone: 010.3456.7890</p>
              <p>Email: designbasekorea@gmail.com</p>
            </div>
          </li>
          {/* Recent Blog Articles */}
          <li className="widget widget_recent_entries">
            <h4 className="widgettitle">Recent Posts</h4>
            <ul>
              <li>
                <Link href="/blog/single">
                  Retro fashion glasses for everyday use
                </Link>
              </li>
              <li>
                <Link href="/blog/single">
                  The best handcrafted wooden office table
                </Link>
              </li>
              <li>
                <Link href="/blog/single">
                  Do it yourself white print art frame
                </Link>
              </li>
            </ul>
          </li>
          {/* Articles tags */}
          <li className="widget widget_tag_cloud">
            <h4 className="widgettitle">Category</h4>
            <div className="tagcloud">
              <Link href="">UX/UI</Link>
              <Link href="">Branding</Link>
              <Link href="">Contents</Link>
              <Link href="">Interior</Link>
            </div>
          </li>
        </ul>

        {/* Coptright and social links */}
        <ul className="copyright-holder">
          <li className="copyright-footer">
            © {new Date(Date.now()).getFullYear()} designbase
          </li>
          <li className="social-footer">
            <Link href="https://twitter.com/">TWITTER</Link>
            <Link href="https://www.facebook.com/">FACEBOOK</Link>
            <Link href="https://www.instagram.com/">INSTAGRAM</Link>
            <Link href="https://www.behance.net/">BEHANCE</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
