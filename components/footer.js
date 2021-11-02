class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="container">
                <div class="row">
                <div class="col">
                    <nav>
                        <a href="https://studentlife.gwu.edu/student-orgs" title="Student Clubs">Clubs</a> |
                        <a href="https://dining.gwu.edu/where-eat" title="Campus Food">Food</a> |
                        <a href="https://www.alumni.gwu.edu/events"title="Campus Networking">Networking</a> |
                        <a href="https://gwsports.com/"title="GWU Sports">Sports</a> |
                        <a href="https://studentlife.gwu.edu/"title="About GWU Student Life">About</a>
                    </nav>
                    <p>Made with &#128150; at GWU.</p>
                </div>
                <div class="col">
                    <address>
                        The George Washington University<br>
                        <a href="https://goo.gl/maps/2rvcoaFUyg5hQeDa9">1918 F Street, NW<br>
                        Washington, DC 20052</a><br>
                        202-994-1000
                    </address>
                    <p id="copyright-notice">
                        <em>2021 &copy; <a href="index.html" title="GWU Student Life Homepage">GWU Student Life</a>. All Rights Reserved.</em>
                    </p>
                </div>
                <div class="col">
                    <p>Subscribe to our newsletter!</p>
                    <input type="email" placeholder="Email">
                    <input id="subscribe-button" type="submit" value="Subcribe">
                </div>
                </div>
            </div>
        </footer>
        `;
    }

}
  
  customElements.define('footer-component', Footer);