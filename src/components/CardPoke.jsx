import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CardPoke = ({ pokemon }) => {
  const { name, stats, src, types } = pokemon;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemons`);
  };

  return (
    <>
      <section className="container text-center mt-5">
        <Card
          style={{
            width: "25rem",
            marginTop: "20px",
            border: "2px solid black",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
          className="mx-auto text-center shadow-lg p-3 rounded text-white"
        >
          <Card.Img height="200" src={src} />
          <Card.Body>
            <Card.Title className="fw-bold"> {name} </Card.Title>
            <span className="list-unstyled text-start">
              <Card.Text className=" fw-bold text-center">
                {stats?.map((stat, i) => (
                  <li key={i}>
                    {stat.name}: {stat.base}
                  </li>
                ))}
              </Card.Text>
            </span>
            <Card.Text className="bg- danger text-while p-2 rounded fw-bold text-center text-capitalize mt-3">
              {types}
            </Card.Text>
          </Card.Body>
        </Card>
        <button
          onClick={handleClick}
          className="btn btn-warning btn-lg btn-block mt-1"
        >
          Back
        </button>
      </section>
    </>
  );
};
export default CardPoke;
