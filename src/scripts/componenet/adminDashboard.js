class AdminDashboard extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container">
        <aside class="sidebar" id="sidebar">
            <h2>Admin Panel</h2>
            <nav>
                <ul>
                    <li><a href="#" id="dashboard">Dashboard</a></li>
                    <li><a href="#" id="user">User</a></li>
                    <li><a href="#" id="module">Module</a></li>
                    <li><a href="#" id="role">Role</a></li>
                    <li><a href="#" id="menu">Menu</a></li>
                    <li><a href="#" id="assign-role">Assign Role</a></li>
                    <li class="submenu"><a href="#" id="test">Test</a></li>
                    <li><a href="#" id="setting-website">Setting Website</a></li>
                    <li><a href="#" id="layout-setting">Layout Setting</a></li>
                </ul>
            </nav>
        </aside>
        <main class="main-content">
            <header>
                <div class="header-left">
                    <button id="hamburger-btn" class="hamburger-btn">
                        &#9776;
                    </button>
                    <h1 id="page-title">Dashboard</h1>
                </div>
                <button id="logout-btn">Logout</button>
            </header>
            <section id="content">
                <!-- Dynamic content will be loaded here -->
            </section>
        </main>
    </div>
    `;
    }
}

customElements.define('admin-dashboard', AdminDashboard);