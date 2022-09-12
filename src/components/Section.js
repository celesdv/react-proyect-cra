import Cards from "./Cards";

const Section = () => {

  const data = [
    {
      title: "Users",
      detail: "see the users",
      img: "https://www.xtrafondos.com/wallpapers/rick-and-morty-en-nave-4518.jpg",
      link: "/users",
    },
    {
      title: "Characters",
      detail: "see the characters",
      img: "https://images6.alphacoders.com/909/909641.png",
      link: "/characters",
    },
    {
      title: "Contact Us",
      detail: "contact us",
      img: "https://cdn.bhdw.net/im/rick-y-morty-dimension-de-dios-papel-pintado-57412_w635.webp",
      link: "/contactUs",
    },
  ];

  return (
    <div className="d-flex justify-content-center bg-img .bg-display">
      {data.map((card, index) => {
        return (
          <div key={index}>
            <Cards              
              img={card.img}
              title={card.title}
              detail={card.detail}
              link={card.link}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Section;
