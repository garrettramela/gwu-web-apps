class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <a href="index.html" title="GWU Student Life Homepage"><img class="img-fluid" src="img/home/gwu-student-life-logo.png" height="100" alt="GWU Student Life Logo"></a>
                        <h1>GWU Student Life</h1>
                    </div>
                    <div class="col">
                        <div class="gcse-search"></div>
                    </div>
                </div>
                <div class="row">
                    <nav id="navigation">
                        <a href="https://studentlife.gwu.edu/student-orgs" title="Student Clubs">Clubs</a> |
                        <a href="food-map.html" title="Campus Food">Food</a> |
                        <a href="https://www.alumni.gwu.edu/events"title="Campus Networking">Networking</a> |
                        <a href="https://gwsports.com/"title="GWU Sports">Sports</a> |
                        <a href="https://studentlife.gwu.edu/"title="About GWU Student Life">About</a>
                    </nav>
                </div>
            </div>
        </header>
        `;
    }

}
  
  customElements.define('header-component', Header);