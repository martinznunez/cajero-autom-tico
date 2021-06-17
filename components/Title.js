const Title = ({ title }) => {
  return (
    <>
      <div>
        <h1> {title} </h1>
      </div>

      <style jsx>
        {`
          font-weight: 800;
          font-size: 1.5rem;
          text-transform: uppercase;
          @media (min-width: 900px) {
            div {
              padding-top: 50px;
            }
            font-weight: 800;
            font-size: 2.7rem;
            text-transform: uppercase;
          }
        `}
      </style>
    </>
  );
};

export default Title;
