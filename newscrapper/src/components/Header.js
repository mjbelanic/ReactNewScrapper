import React from "react";

const Header = () => 
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="/articles">News Scraper</a>
            </div>
            <ul class="nav navbar-nav">
                <li><a href="/">Scrape Articles</a></li>
                <li><a href="/articles">All Articles</a></li>
                <li><a href="/saved">Saved Articles</a></li>
            </ul>
        </div>
    </nav>

export default Header;