import { useEffect, useState } from "react";

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


const Technologies = () => {

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

      .then((response) => response.json())

      .then((data) => {

        setTechnologies(data);

        setLoading(false);

      })

      .catch((error) => {

        console.log("Error loading technologies:", error);

        setLoading(false);

      });

  }, []);


  const handleAddToStack = (technology) => {

    const alreadyAdded = selectedTechnologies.find(
      (item) => item.id === technology.id
    );


    if (alreadyAdded) {

      alert("This technology is already in your stack.");

      return;

    }


    setSelectedTechnologies([
      ...selectedTechnologies,
      technology
    ]);

  };


  const handleRemoveTechnology = (id) => {

    const remainingTechnologies = selectedTechnologies.filter(
      (technology) => technology.id !== id
    );


    setSelectedTechnologies(remainingTechnologies);

  };


  const handleRemoveAll = () => {

    setSelectedTechnologies([]);

  };


  return (

    <section
      className="technologies-section"
      id="technologies"
    >

      <div className="technologies-container">


        <div className="technologies-heading">

          <h2>
            Explore the <span>Technologies</span>
          </h2>


          <p>
            Pick one technology per category to build your ideal stack.
          </p>

        </div>


        <div className="technologies-layout">


          <div className="technology-grid">


            {loading ? (

              <p className="loading-text">
                Loading technologies...
              </p>

            ) : (

              technologies.map((technology) => (

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
};


export default Technologies;