const TechnologyCard = ({
  technology,
  icon,
  handleAddToStack,
  selectedTechnologies
}) => {

  const getBadgeClass = (badge) => {

    if (badge === "Popular") return "badge-popular";

    if (badge === "Versatile") return "badge-versatile";

    if (badge === "Fast") return "badge-fast";

    if (badge === "Standard") return "badge-standard";

    if (badge === "Top SQL") return "badge-top-sql";

    if (badge === "Cache") return "badge-cache";

    if (badge === "Ubiquitous") return "badge-ubiquitous";

    if (badge === "Essential") return "badge-essential";

    if (badge === "Robust") return "badge-robust";

    if (badge === "Modern") return "badge-modern";

    if (badge === "Containers") return "badge-containers";

    return "";
  };


  const isAdded = selectedTechnologies.find(
    (item) => item.id === technology.id
  );


  return (

    <div className={`technology-card card-${technology.id}`}>

      <div className="card-top">

        <img
          className="technology-icon"
          src={icon}
          alt={technology.name}
        />

        <span
          className={`technology-badge ${getBadgeClass(technology.badge)}`}
        >
          {technology.badge}
        </span>

      </div>


      <h3>
        {technology.name}
      </h3>


      <p className="technology-description">
        {technology.description}
      </p>


      <div className="technology-info">

        <span className="category-chip">
          {technology.category}
        </span>

        <span className="difficulty">
          {technology.difficulty}
        </span>

        <span className="rating">

          <span className="star">
            ★
          </span>

          {technology.rating}

        </span>

      </div>


      <button
        className="add-stack-btn"
        onClick={() => handleAddToStack(technology)}
        disabled={isAdded}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>

  );
};


export default TechnologyCard;