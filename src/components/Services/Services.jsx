import React from "react";
import "./Services.css";
import { GoCheck } from "react-icons/go";

const Services = () => {
  return (
    <div>
      <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>

            <ul className="service__list">
              <li>
                <GoCheck className="service__list-icon" />
                <p>
                  Enhance User Experience: UI/UX design services ensure that
                  your digital products, such as websites or mobile apps, are
                  easy to use and navigate, which leads to a better user
                  experience. This can result in increased user satisfaction and
                  loyalty, as well as higher engagement and conversions.
                </p>
              </li>
              <li>
                <GoCheck className="service__list-icon" />
                <p>
                  Competitive Advantage: In today's digital age, it's essential
                  for businesses to have a strong online presence. Investing in
                  UI/UX design services can help your business stand out from
                  the competition by providing a more visually appealing and
                  user-friendly digital product.
                </p>
              </li>
              <li>
                <GoCheck className="service__list-icon" />
                <p>
                  Brand Image: UI/UX design services can help to create a
                  consistent brand image across all digital platforms, which can
                  enhance brand recognition and credibility. This can help to
                  establish your business as a leader in your industry and
                  increase brand loyalty.
                </p>
              </li>
              <li>
                <GoCheck className="service__list-icon" />
                <p>
                  Improved Functionality: Good UI/UX design services can improve
                  the functionality and performance of your digital products,
                  leading to fewer errors, faster load times, and a smoother
                  user experience. This can result in higher customer
                  satisfaction and loyalty, as well as increased efficiency and
                  productivity for your business.
                </p>
              </li>
            </ul>
          </article>
          {/*END OF UI/UX */}
          <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>

            <ul className="service__list">
              <li>
                <GoCheck className="service__list-icon" />
                <p>
                  Having just a “good” web app won’t help you break through the
                  clutter and convert users into loyal customers, though. What
                  you really need is an outstanding web app.
                </p>
              </li>
              <li>
                <GoCheck className="service__list-icon" />
                <p>
                  Outstanding meaning: Visually appealing, polished, and
                  professional. Intuitive to use, optimized for mobile devices
                  and search engines. With easily accessible contact
                  information, matching the current trends. Regularly checked
                  for any broken links or not working scripts.
                </p>
              </li>
              <li>
                <GoCheck className="service__list-icon" />
                <p>
                  You can count on me for your web application development
                  project! I stick to the agreed schedule and budget while
                  making sure my web solutions match your specific demands.
                  Check out my portfolio to see my deliverables.
                </p>
              </li>
            </ul>
          </article>
          {/*END - Web Development */}
          <article className="service">
            <div className="service__head">
              <h3>Content Creation</h3>
            </div>

            <ul className="service__list">
              <li>
                <GoCheck className="service__list-icon" />
                <p>
                  Digital content is any content that is produced, stored, and
                  disseminated in the form of digital data. It is either
                  digitally broadcasted, published, streamed, or kept in
                  computer files.
                </p>
              </li>
              <li>
                <GoCheck className="service__list-icon" />
                <p>
                  Any text, video, audio, images, and visual arts content that
                  is produced and published on the web with the aim to describe,
                  educate, and inform a particular set of audiences are
                  considered to be digital content. It may be about a topic in
                  discussion, a product marketed and promoted by a brand or a
                  service offered by a professional entity.
                </p>
              </li>
              <li>
                <GoCheck className="service__list-icon" />
                <p>
                  Automation can help you speed up content creation, which is
                  especially important for enterprises that need a high
                  frequency of churning out content. There are several tools to
                  automate content creation, but it depends on what content you
                  are looking to create.
                </p>
              </li>
            </ul>
          </article>
          {/*End - Content Creation */}
        </div>
      </section>
    </div>
  );
};

export default Services;
