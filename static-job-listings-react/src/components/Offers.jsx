import data from "../data.json";
import JobOffer from "./JobOffer";
function Offers({ addTag, selectedTags }) {
  // if there are no selected tags display all
  if (selectedTags.length === 0) {
    return (
      <div className="offers">
        {data.map((item) => {
          return (
            <JobOffer
              key={item.id}
              id={item.id}
              company={item.company}
              logo={item.logo}
              isNew={item.new}
              isFeatured={item.featured}
              position={item.position}
              role={item.role}
              level={item.level}
              postedAt={item.postedAt}
              contract={item.contract}
              location={item.location}
              languages={item.languages}
              tools={item.tools}
              addTag={addTag}
            />
          );
        })}
      </div>
    );
  }
  // if there are selected tags then
  else {
    return (
      <div className="offers">
        {data.map((item) => {
          // merge all category data in one variable
          let tags = [item.role, item.level, ...item.languages, ...item.tools];
          // if every selected tag appears in job offer then dissplay that offer
          if (selectedTags.every((tag) => tags.includes(tag))) {
            return (
              <JobOffer
                key={item.id}
                id={item.id}
                company={item.company}
                logo={item.logo}
                isNew={item.new}
                isFeatured={item.featured}
                position={item.position}
                role={item.role}
                level={item.level}
                postedAt={item.postedAt}
                contract={item.contract}
                location={item.location}
                languages={item.languages}
                tools={item.tools}
                addTag={addTag}
              />
            );
          }
        })}
      </div>
    );
  }
}

export default Offers;
