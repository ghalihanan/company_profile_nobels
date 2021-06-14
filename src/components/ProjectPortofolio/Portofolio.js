import React from "react";
import "./portofolio.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const project = [
  {
    id: "1",
    title: "Project 1",
    description:
      "Nobles House provides services in the process of making UI obles House provides services in the process of making UI obles House provides services in the process of making UI obles House provides services in the process of making UI obles House provides services in the process of making UI",
    image:
      "https://assets.materialup.com/uploads/4ea2c585-6e1b-4e72-bee6-634c75c583a1/preview.jpg",
  },
  {
    id: "2",
    title: "Project 2",
    description:
      "Nobles House provides services in the process of making UI obles House provides services in the process of making UI obles House provides services in the process of making UI obles House provides services in the process of making UI obles House provides services in the process of making UI",
    image:
      "https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-11-23/cc0a3ac0-2d78-11eb-9dcd-8b2ef5358591.jpg",
  },
  {
    id: "3",
    title: "Project 3",
    description:
      "Nobles House provides services in the process of making UI obles House provides services in the process of making UI obles House provides services in the process of making UI obles House provides services in the process of making UI obles House provides services in the process of making UI",
    image:
      "https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-11-23/adbf4150-2d78-11eb-9dcd-8b2ef5358591.jpg",
  },
  {
    id: "4",
    title: "Project 4",
    description:
      "Nobles House provides services in the process of making UI obles House provides services in the process of making UI obles House provides services in the process of making UI obles House provides services in the process of making UI obles House provides services in the process of making UI",
    image:
      "https://static.vecteezy.com/ti/vecteur-libre/p1/229524-chilly-mountain-background-meteo-app-design-ecran-vecteur-gratuit-vectoriel.jpg",
  },
];

const ProjectCard = ({ project, id }) => {
  return (
    <section
      className="card-project"
      style={{
        backgroundImage: `url(${project?.image})`,
      }}
    >
      <section className={id === 0 ? "card-overlay-active" : "card-overlay"}>
        <h1>{project?.title}</h1>
        <p>{project?.description}</p>
        <p className="link">Go to project</p>
      </section>
    </section>
  );
};

const ProjectProtofolio = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 900,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    className: "project-slider",
  };
  return (
    <div className="portofolio-container">
      <section className="box-left">
        <h1>Project Portofolio</h1>
        <p>
          Noble's House provides services in the process of making UI / UX
          Design, Web Based Apps, Mobile Apps & IT Consultants.We can also
          assist in the creation process from the beginning as well as those
          already in the development phase
        </p>
      </section>
      <section className="box-slider">
        <Slider {...settings}>
          {project
            ? project.map((items, id) => {
                return <ProjectCard key={id} project={items} id={id} />;
              })
            : null}
        </Slider>
      </section>
    </div>
  );
};

export default ProjectProtofolio;
