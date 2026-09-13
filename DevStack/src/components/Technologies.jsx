import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TechnologyCard from "./TechnologyCard";
import Stack from "./Stack";
import reactIcon from "../assets/React.png";
import vueIcon from "../assets/Vue.js.png";
import svelteIcon from "../assets/Svelte.png";
import nextIcon from "../assets/Next.js.png";
import nodeIcon from "../assets/Node.js.png";
import postgresIcon from "../assets/PostgresSQL.png";
import redisIcon from "../assets/Redis.png";
import javascriptIcon from "../assets/JavaScript.png";
import typescriptIcon from "../assets/TypeScript.png";
import javaIcon from "../assets/Java.png";
import tailwindIcon from "../assets/Tailwind CSS.png";
import dockerIcon from "../assets/Docker.png";

function Technologies() {

  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const technologyIcons = {
    react: reactIcon,
    vue: vueIcon,
    svelte: svelteIcon,
    nextjs: nextIcon,
    nodejs: nodeIcon,
    postgresql: postgresIcon,
    redis: redisIcon,
    javascript: javascriptIcon,
    typescript: typescriptIcon,
    java: javaIcon,
    tailwind: tailwindIcon,
    docker: dockerIcon
  };
  useEffect(() => {
    fetch("/technologies.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not load technologies");
      }
      return response.json();
    })
    .then((data) => {
      setTechnologies(data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      toast.error("Failed to load technologies.");
      setLoading(false);
    });
  }, []);
  const handleAddToStack = (technology) => {
    const alreadyAdded = selectedTechnologies.find(
      (item) => item.id === technology.id
    );
    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack.`
      );
      return;
    }

    setSelectedTechnologies([
      ...selectedTechnologies,
      technology
    ]);

    toast.success(
      `${technology.name} added to your stack.`
    );

  };

  const handleRemoveTechnology = (id) => {

    const removedTechnology = selectedTechnologies.find(
      (item) => item.id === id
    );

    const updatedStack = selectedTechnologies.filter(
      (item) => item.id !== id
    );

    setSelectedTechnologies(updatedStack);

    if (removedTechnology) {

      toast.info(`${removedTechnology.name} removed from your stack.`);
    }

  };

  const handleRemoveAll = ()=> {

    if (selectedTechnologies.length === 0) {

      toast.warning("Your stack is already empty.");

      return;

    }

    setSelectedTechnologies([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
  <section className="technologies-section" id="technologies">
    
    <div className="technologies-container">
      <div className="technologies-heading">
        
        <h2>Explore the <span>Technologies</span></h2>
        
        <p>Pick one technology per category to build your ideal stack.</p>
        
      </div>
      
      <div className="technologies-layout">
        
        <div className="technology-grid">
          {loading ? (
            <p className="loading-text">
              Loading technologies...</p>) :
              (technologies.map((technology) => (
              <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  icon={technologyIcons[technology.id]}
                  handleAddToStack={handleAddToStack}
                  selectedTechnologies={selectedTechnologies}
                />

              ))

            )}

          </div>

          <Stack
            selectedTechnologies={selectedTechnologies}
            technologyIcons={technologyIcons}
            handleRemoveTechnology={handleRemoveTechnology}
            handleRemoveAll={handleRemoveAll}
          />

        </div>

      </div>

    </section>

  );

}

export default Technologies;