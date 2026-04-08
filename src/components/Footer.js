import "../Footer.css";

export default function Footer() {
    return(
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="footer__top--wrapper">
            <div className="footer__block">
              <div className="footer__link--title">Actions</div>
              <div>
                <div className="footer__link--wrapper">
                  <a href="/magazine" className="footer__link">Summarist Magazine</a>
                </div>
                <div className="footer__link--wrapper">
                  <a href="/subscription/cancel" className="footer__link">Cancel Subscription</a>
                </div>
                <div className="footer__link--wrapper">
                  <a href="/help" className="footer__link">Help</a>
                </div>
                <div className="footer__link--wrapper">
                  <a href="/contact" className="footer__link">Contact us</a>
                </div>
              </div>
            </div>
            <div className="footer__block">
              <div className="footer__link--title">Useful Links</div>
              <div>
                <div className="footer__link--wrapper">
                  <a href="/pricing" className="footer__link">Pricing</a>
                </div>
                <div className="footer__link--wrapper">
                  <a href="/business" className="footer__link">Summarist Business</a>
                </div>
                <div className="footer__link--wrapper">
                  <a href="/gift-cards" className="footer__link">Gift Cards</a>
                </div>
                <div className="footer__link--wrapper">
                  <a href="/partners" className="footer__link">Authors & Publishers</a>
                </div>
              </div>
            </div>
            <div className="footer__block">
              <div className="footer__link--title">Company</div>
              <div>
                <div className="footer__link--wrapper">
                  <a href="/about" className="footer__link">About</a>
                </div>
                <div className="footer__link--wrapper">
                  <a href="/careers" className="footer__link">Careers</a>
                </div>
                <div className="footer__link--wrapper">
                  <a href="/partners" className="footer__link">Partners</a>
                </div>
                <div className="footer__link--wrapper">
                  <a href="/code-of-conduct" className="footer__link">Code of Conduct</a>
                </div>
              </div>
            </div>
            <div className="footer__block">
              <div className="footer__link--title">Other</div>
              <div>
                <div className="footer__link--wrapper">
                  <a href="/sitemap" className="footer__link">Sitemap</a>
                </div>
                <div className="footer__link--wrapper">
                  <a href="/legal" className="footer__link">Legal Notice</a>
                </div>
                <div className="footer__link--wrapper">
                  <a href="/terms" className="footer__link">Terms of Service</a>
                </div>
                <div className="footer__link--wrapper">
                  <a href="/privacy" className="footer__link">Privacy Policies</a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright--wrapper">
            <div className="footer__copyright">
              Copyright &copy; 2023 Summarist.
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}