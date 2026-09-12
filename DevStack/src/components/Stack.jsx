const Stack = ({
  selectedTechnologies,
  technologyIcons,
  handleRemoveTechnology,
  handleRemoveAll
}) => {

  return (

    <div className="stack-panel">


      <h3>
        Your Stack
      </h3>


      {selectedTechnologies.length === 0 ? (

        <>
          <p className="stack-count">
            No technologies selected yet.
          </p>


          <div className="stack-empty">
            Your stack is empty.
          </div>
        </>

      ) : (

        <>
          <p className="stack-count">
            {selectedTechnologies.length} Technology Selected
          </p>


          <div className="stack-items">

            {selectedTechnologies.map((technology) => (

              <div
                className="stack-item"
                key={technology.id}
              >

                <div className="stack-item-left">

                  <img
                    src={technologyIcons[technology.id]}
                    alt={technology.name}
                  />


                  <div>

                    <h4>
                      {technology.name}
                    </h4>

                    <p>
                      {technology.category}
                    </p>

                  </div>

                </div>


                <button
                  className="remove-item-btn"
                  onClick={() =>
                    handleRemoveTechnology(technology.id)
                  }
                >
                  ×
                </button>

              </div>

            ))}

          </div>


          <button
            className="remove-all-btn"
            onClick={handleRemoveAll}
          >
            Remove All
          </button>
        </>

      )}

    </div>

  );
};


export default Stack;