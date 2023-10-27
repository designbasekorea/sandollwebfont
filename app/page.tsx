"use client";
import { useState } from "react";

import { motion } from "framer-motion";
import Link from "next/link";

// Images
import arrow from "@/assets/images/opta_arrow@2x.png";
import img00 from "@/assets/images/home/img_00.jpg";
import img01 from "@/assets/images/home/img_01.jpg";
import img02 from "@/assets/images/home/img_02.jpg";
import img03 from "@/assets/images/home/img_03.jpg";
import img04 from "@/assets/images/home/img_04.jpg";
import img05 from "@/assets/images/home/img_05.jpg";
import img06 from "@/assets/images/home/img_06.jpg";
import img07 from "@/assets/images/home/img_07.jpg";
import img08 from "@/assets/images/home/img_08.jpg";
import img09 from "@/assets/images/home/img_09.jpg";
import img10 from "@/assets/images/home/img_10.jpg";
import img11 from "@/assets/images/home/img_11.jpg";

function Home() {
  const [loadedAll, setLoadedAll] = useState<boolean>(false);

  const handleLoadAll = () => {
    setLoadedAll(true);
  };

  return (
    <main className="page">
      <div className="content-1140 header-content center-relative block">
        <h1 className="entry-title">
          폰트에 따라 <br/>달라지는 분위기
        </h1>
        <p className="page-desc">산돌구름 웹폰트 적용된 웹사이트</p>
      </div>

      <div id="content" className="site-content">
        <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item-full element-item "
          >
            <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img00.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/single-portfolio">
                    Clothes
                  </Link>
                  <p className="portfolio-category">
                    <Link href="">Fashion</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.li>

        <ul className="grid" id="portfolio">
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img01.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/single-portfolio">
                    Clothes
                  </Link>
                  <p className="portfolio-category">
                    <Link href="">Fashion</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img02.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/single-portfolio">
                    Sweatshirt
                  </Link>
                  <p className="portfolio-category">
                    <Link href="">Fashion</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img03.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/single-portfolio">
                    Office
                  </Link>
                  <p className="portfolio-category">
                    <Link href="">Interior</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
          {/* Quote Item */}
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item quote-item "
          >
            디자인 툴 강의부터 디자인 이론과 코딩 지식까지 한 번에 배워보세요.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img04.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/single-portfolio">
                    Bracelet
                  </Link>
                  <p className="portfolio-category">
                    <Link href="">Jewelry</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img05.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/single-portfolio">
                    Notes
                  </Link>
                  <p className="portfolio-category">
                    <Link href="">Branding</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img06.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/single-portfolio">
                    Building
                  </Link>
                  <p className="portfolio-category">
                    <Link href="">Architecture</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img07.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/single-portfolio">
                    Desk
                  </Link>
                  <p className="portfolio-category">
                    <Link href="">Interior</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
          {/* Items that are hidden and appears when clicking load more button */}
          {loadedAll && (
            <>
              <motion.li
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className="grid-item element-item"
              >
                <div className="item-wrapper">
                  <Link href="/single-portfolio">
                    <img src={img09.src} alt="" />
                  </Link>
                  <div className="portfolio-text-holder">
                    <div className="portfolio-info">
                      <Link className="portfolio-text" href="/single-portfolio">
                        Shoes
                      </Link>
                      <p className="portfolio-category">
                        <Link href="">Fashion</Link>
                      </p>
                      <p className="portfolio-arrow">
                        <Link href="/single-portfolio">
                          <img src={arrow.src} alt="" />
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className="grid-item element-item"
              >
                <div className="item-wrapper">
                  <Link href="/single-portfolio">
                    <img src={img11.src} alt="" />
                  </Link>
                  <div className="portfolio-text-holder">
                    <div className="portfolio-info">
                      <Link className="portfolio-text" href="/single-portfolio">
                        Mural
                      </Link>
                      <p className="portfolio-category">
                        <Link href="">Architecture</Link>
                      </p>
                      <p className="portfolio-arrow">
                        <Link href="/single-portfolio">
                          <img src={arrow.src} alt="" />
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className="grid-item element-item"
              >
                <div className="item-wrapper">
                  <Link href="/single-portfolio">
                    <img src={img08.src} alt="" />
                  </Link>
                  <div className="portfolio-text-holder">
                    <div className="portfolio-info">
                      <Link className="portfolio-text" href="/single-portfolio">
                        Vase
                      </Link>
                      <p className="portfolio-category">
                        <Link href="">Interior</Link>
                      </p>
                      <p className="portfolio-arrow">
                        <Link href="/single-portfolio">
                          <img src={arrow.src} alt="" />
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className="grid-item element-item"
              >
                <div className="item-wrapper">
                  <Link href="/single-portfolio">
                    <img src={img10.src} alt="" />
                  </Link>
                  <div className="portfolio-text-holder">
                    <div className="portfolio-info">
                      <Link className="portfolio-text" href="/single-portfolio">
                        Birds
                      </Link>
                      <p className="portfolio-category">
                        <Link href="">Branding</Link>
                      </p>
                      <p className="portfolio-arrow">
                        <Link href="/single-portfolio">
                          <img src={arrow.src} alt="" />
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.li>
            </>
          )}
        </ul>
        <div className="clear"></div>
        {/* Showing more items buttons */}
        <div className="block center-text load-more-portfolio">
          {!loadedAll && (
            <button className="more-posts-portfolio" onClick={handleLoadAll}>
              Load More
            </button>
          )}
        </div>
        <div className="clear"></div>
      </div>
    </main>
  );
}

export default Home;
