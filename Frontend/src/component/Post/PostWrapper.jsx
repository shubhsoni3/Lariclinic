import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Post from "../../component/Post/Post";

const PostWrapper = ({ data }) => {
  const post = data.slice(0, 3);
  return (
    <section id="blog">
      <div className="st-height-b120 st-height-lg-b80" />
      <SectionHeading
        title="Latest News"
        subTitle="Stay updated with our latest news: breakthroughs, events, and insights. <br /> Explore the forefront of innovation and stay informed."
      />
      <div className="container">
        <div className="row">
          {post.map((element, index) => (
            <Post {...element} key={index} />
          ))}
        </div>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
    </section>
  );
};

export default PostWrapper;
