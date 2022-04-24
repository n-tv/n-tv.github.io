---
layout: post
title: "How to setup categories in Jekyll"
subtitle: "Creating categories in Clean Blog Jekyll with permalink"
date: 2019-08-23
background: '/img/posts/01.jpg'
categories : posts/jekyll
sitemap :
changefreq : daily
priority : 1.0
---

<h1>Creating categories in Jekyll blog with permalink</h1>
<br>

<h2 class="section-heading">Reference</h2>
<a href="https://devyurim.github.io/development%20environment/github%20blog/2018/08/12/blog-8.html">https://devyurim.github.io/development%20environment/github%20blog/2018/08/12/blog-8.html</a>


<h2 class="section-heading">1. Change _includes/navbar.html</h2>
<p>I wanted to make dropdown menu as image below and added some lines in navbar.html. You can change header.html or other files depending on your Jekyll themes.</p>
<img class="img-fluid" src="/img/posts/190823/dropdown.PNG" alt="dropdown">

```html
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="{{"/" | relative_url }}">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{"/about" | relative_url }}">About</a>
        </li>
        <li class="nav-item" id="site-category">
          <a class="nav-link" href="{{ "/posts" | relative_url }}">Posts</a>
          <ul>
            <li><a href="/posts/spring">Spring</a></li>
            <li><a href="/posts/jekyll">Jekyll</a></li>
        </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{"/contact" | relative_url }}">Contact</a>
        </li>
      </ul>
    </div>
```
<br>
<h2 class="section-heading">2. Add css code in </h2>
<p>/assets/vendor/startbootstrap-clean-blog/scss/_navbar.scss</p>
<p>or in other files as necessary.</p>

```css
#site-category li a{
  display:block;
  font-weight:normal;
  line-height:50px;
  margin: 0px;
  padding:0px 25px;
  text-align:center;
  text-decoration:none;
  }

#site-category a:hover{
  background: rgb(71,71,71);
  color:#FFFFFF;
  text-decoration:none;
  }

#navbarResponsive li ul{
  background: rgb(109,109,109);
  display:none;
  height:auto;
  padding:0px;
  margin:0px;
  border:0px;
  position:absolute;
  width:200px;
  z-index:200;
  /*top:1em;
  /*left:0;*/
  }

#navbarResponsive li:hover ul{
  display:block;
  }

#navbarResponsive li li {
  display:block;
  float:none;
  margin:0px;
  padding:0px;
  width:200px;
  }

#navbarResponsive li:hover li a{
  background:none;
  }

  #navbarResponsive li ul a{
    display:block;
    height:50px;
    font-size:12px;
    font-style:normal;
    margin:0px;
    padding:0px 10px 0px 20px;
    text-align:left;
    }

  #navbarResponsive li ul a:hover{
    background: rgb(71,71,71);
    border:0px;
    color:#ffffff;
    text-decoration:none;
    }
```
<br>
<h2 class="section-heading">3. Create category folder under /root directory and md files</h2>
<p>Created category folder under /root directory, for example, hskim2019.github.io/category</p>
<img class="img-fluid" src="/img/posts/190823/categoryfolder.PNG" alt="categoryfolder">
<p>Also, created markdown files containing layout, title and permalink as image below.</p>
<p>You can create more markdown files depending on categories you want to make. Below is an example.</p>

<pre class="highlight">
<code>
---
layout: category
title: posts/jekyll
permalink: '/posts/jekyll'
---
</code>
</pre>
<span class="caption text-muted">/root/category/Jekyll.md</span>


<h2 class="section-heading">4. Create category.html in _layouts</h2>
<p>This is for the layout of category pages.</p>
<img class="img-fluid" src="/img/posts/190823/layoutcategory.PNG" alt="category.html">

```html
---
layout: page
---

<ul class="posts-list">
  {% raw %}
  {% assign category = page.category | default: page.title %}
  {% for post in site.categories[category] %}
    <li>
      <h3>
        <a href="{{ site.baseurl }}{{ post.url }}">
          {{ post.title }}
        </a>
        <small>{{ post.date | date_to_string }}</small>
      </h3>
    </li>
  {% endfor %}
  {% endraw %}
</ul>
```
<span class="caption text-muted">/root/_layouts/category.html</span>

<br>


<h2 class="section-heading">5. Create or modify index.html in _includes.</h2>
<p>Clean-blog Jekyll theme doesn´t have index.html so created index.html and added lines as below.</p>
<img class="img-fluid" src="/img/posts/190823/includesindexhtml.PNG" alt="index.html">

```html
<header class="site-category">
  <ul>
    {% raw %}
    {% assign pages_list = site.pages %}
    {% for node in pages_list %}
      {% if node.title != null %}
        {% if node.layout == "category" %}
          <li><a class="category-link {% if page.url == node.url %} active{% endif %}"
          href="{{ site.baseurl }}{{ node.url }}">{{ node.title }}</a></li>
        {% endif %}
      {% endif %}
    {% endfor %}
    {% endraw %}
</ul>
</header>
```

<span class="caption text-muted">/_includes/index.html</span>

<br>

<h2 class="section-heading">6. Set category when you post.</h2>
<p>Set category when you post. Below is the example.</p>
<pre class="highlight">
<code>
---
layout: post
title: "How to setup categories in Jekyll"
subtitle: "Creating categories in Clean Blog Jekyll with permalink"
date: 2019-08-23
background: '/img/posts/01.jpg'
categories : posts/jekyll
sitemap :
changefreq : daily
priority : 1.0
---
</code>
</pre>