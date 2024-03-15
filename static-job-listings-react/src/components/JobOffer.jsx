function JobOffer({
  id,
  company,
  logo,
  isNew,
  isFeatured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  addTag,
}) {
  // This component receives data from Offers component,
  // then it maps and for every entry returns div offer
  // with values
  const tags = [role, level, ...languages, ...tools];
  const selectTag = (tag) => {
    addTag(tag);
  };
  return (
    <div key={id} className={isFeatured ? "offer offer--featured" : "offer"}>
      <div className="offer__info">
        <div className="info__img">
          <img src={logo} />
        </div>

        <div className="info__content">
          <div className="company-wrap">
            <p className="info__company">{company}</p>
            {isNew && (
              <div className="highlight new">
                <p>NEW!</p>
              </div>
            )}
            {isFeatured && (
              <div className="highlight featured">
                <p>FEATURED</p>
              </div>
            )}
          </div>
          <p className="info__position">{position}</p>
          <div className="info__details">
            <p>{postedAt}</p>
            <p>{contract}</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className="offer__tags">
        {tags.map((tag, index) => (
          <div key={index} className="tag" onClick={() => selectTag(tag)}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
export default JobOffer;
