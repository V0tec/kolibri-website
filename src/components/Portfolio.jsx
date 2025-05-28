import { useState } from "react";
import CategorySwiper from "./CategorySwiper";
import imagesData from "./imagesData.js";

// Категорії з назвами для відображення та ключами для масивів
const categories = [
  { name: "Прямі кухні", folder: "pryami" },
  { name: "Кутові кухні", folder: "kutovi" },
  { name: "П-подібні кухні", folder: "p_podibni" },
  { name: "Кухні з островом", folder: "z_ostrovom" },
  { name: "Шафи", folder: "shafy" },
  { name: "Гардеробні", folder: "garderobni" },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0].folder
  );

  return (
    <section id="portfolio" className="portfolio">
      <h2>Портфоліо</h2>
      <div className="portfolio__buttons">
        {categories.map(({ name, folder }) => (
          <button
            key={folder}
            type="button"
            className="portfolio__btn"
            onClick={() => setSelectedCategory(folder)}
            style={{
              backgroundColor:
                selectedCategory === folder ? "#005fa3" : undefined,
              color: selectedCategory === folder ? "white" : undefined,
              border:
                selectedCategory === folder
                  ? "1px solid #005fa3"
                  : "1px solid #ccc",
              padding: "10px 20px",
              margin: "5px",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="portfolio__grid">
        <CategorySwiper images={imagesData[selectedCategory] || []} />
      </div>
    </section>
  );
}
