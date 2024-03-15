function FilterBar({ selectedTags, setSelectedTags, removeTag }) {
  return (
    <>
      {selectedTags.length > 0 && (
        <div className="filter-bar">
          <div className="filter-bar__tags">
            {selectedTags.map((tag) => (
              <div key={tag} className="filter-tag">
                <p>{tag}</p>
                <div onClick={() => removeTag(tag)} className="close-wrap">
                  <img src="./images/icon-remove.svg" />
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => setSelectedTags([])}>Clear</button>
        </div>
      )}
    </>
  );
}

export default FilterBar;
