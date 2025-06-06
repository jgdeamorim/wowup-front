"use client";
  
import React from "react";
import Link from "next/link";

const BlogSidebar: React.FC = () => {
  return (
    <>
      <div className="widget-area" id="secondary">
        {/* Search widget */}
        <div className="widget widget_search">
          <form className="search-form">
            <label>
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
              />
            </label>
            <button type="submit">
              <i className="bx bx-search-alt"></i>
            </button>
          </form>
        </div>

        {/* Popular Posts */}
        <div className="widget widget_spacle_posts_thumb">
          <h3 className="widget-title">Popular Posts</h3>

          <article className="item">
            <Link href="/blog/details" className="thumb">
              <span className="fullimage cover bg1" role="img"></span>
            </Link>

            <div className="info">
              <time>Feb 10, 2023</time>
              <h4 className="title usmall">
                <Link href="/blog/details">
                  Making peace with the feast or famine of freelancing
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>

          <article className="item">
            <Link href="/blog/details" className="thumb">
              <span className="fullimage cover bg2" role="img"></span>
            </Link>

            <div className="info">
              <time>Feb 21, 2023</time>
              <h4 className="title usmall">
                <Link href="/blog/details">
                  I used the web for a day on a 50 mb budget
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>

          <article className="item">
            <Link href="/blog/details" className="thumb">
              <span className="fullimage cover bg3" role="img"></span>
            </Link>

            <div className="info">
              <time>Feb 30, 2023</time>
              <h4 className="title usmall">
                <Link href="/blog/details">
                  How to create a responsive popup gallery?
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>
        </div>

        {/* Categories */}
        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul>
            <li>
              <Link href="/blog">
                Business <span className="post-count">(05)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Privacy <span className="post-count">(10)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Technology <span className="post-count">(04)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Tips <span className="post-count">(15)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Uncategorized <span className="post-count">(1)</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Archive */}
        <div className="widget widget_archive">
          <h3 className="widget-title">Archives</h3>

          <ul>
            <li>
              <Link href="#">May 2023</Link>
            </li>
            <li>
              <Link href="#">April 2023</Link>
            </li>
            <li>
              <Link href="#">Feb 2023</Link>
            </li>
          </ul>
        </div>

        {/* Tags */}
        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="tagcloud">
            <Link href="/blog">
              IT <span className="tag-link-count">(3)</span>
            </Link>

            <Link href="/blog">
              Strax <span className="tag-link-count">(3)</span>
            </Link>

            <Link href="/blog">
              Games <span className="tag-link-count">(2)</span>
            </Link>

            <Link href="/blog">
              Fashion <span className="tag-link-count">(2)</span>
            </Link>

            <Link href="/blog">
              Travel <span className="tag-link-count">(1)</span>
            </Link>

            <Link href="/blog">
              Smart <span className="tag-link-count">(1)</span>
            </Link>

            <Link href="/blog">
              Marketing <span className="tag-link-count"> (1)</span>
            </Link>

            <Link href="/blog">
              Tips <span className="tag-link-count">(2)</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
