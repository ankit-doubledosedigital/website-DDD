import React from 'react';
import './style/About.css';
import img1 from '../assets/aboutus.jpg'

const AboutUs = () => {
  return (
    <body>
      <div className="about-container">
        <div class="image-container">
          <img src={img1} alt="Contact Us" />
          <div class="overlay-text"></div>
        </div>
        <p>
          Welcome to Double Dose Digital Private Limited! We are a leading digital marketing agency committed to delivering innovative solutions to our clients. Our team of experts specializes in a wide range of services, including SEO, social media marketing, content creation, and more.

          At Double Dose Digital (DDD), we believe in providing our clients with the freedom to explore limitless marketing opportunities. Our comprehensive service package includes planning, design, and implementation, allowing you to choose between a monthly or yearly subscription model. This flexibility lets you run unlimited marketing campaigns per month, helping your business soar to new heights. </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses to achieve their full potential in the digital space. By subscribing to our services, you save time and resources by letting our experts handle your marketing campaigns. We work closely with you to ensure your campaigns are tailored to your business goals and target audience, delivering exceptional service and measurable results that drive growth and success.
        </p>
        <h2>Our Vision</h2>
        <p>
          We envision a world where every business, regardless of size, has the tools and knowledge to thrive online. Our goal is to be the catalyst for that transformation, helping businesses navigate the complexities of the digital landscape with confidence. With our unlimited campaigns, you can increase brand visibility, generate leads, convert them into loyal customers, and maximize your marketing ROI for sustained business growth. </p>
        <h2>Meet the Team</h2>
        <p>
          Our team is made up of passionate and experienced professionals dedicated to helping our clients succeed. From strategists to creatives, we work collaboratively to deliver innovative and effective solutions. At DDD, we are committed to being your trusted partner in achieving digital marketing excellence.
        </p>
        <h2>Contact Us</h2>
        <p>
          Ready to take your business to the next level? Contact us today to learn more about our services and how we can help you achieve your digital marketing goals.
        </p>
      </div>
    </body>
  );
};

export default AboutUs;