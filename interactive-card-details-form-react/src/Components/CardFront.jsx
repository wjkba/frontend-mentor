function CardFront({ formData, setFormData }) {
  const [name, number, month, year, cvc] = formData;
  const [setName, setNumber, setMonth, setYear, setCvc] = setFormData;
  return (
    <>
      <div className="card-front">
        <img src="/images/card-logo.svg" />
        <div>
          {number === "" ? <p>0000 0000 0000 0000</p> : <p>{number}</p>}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {name === "" ? <p>JAN KOWALSKI</p> : <p>{name.toUpperCase()}</p>}
            {year != "" || month != "" ? (
              <p>
                {month}/{year}
              </p>
            ) : (
              <p>00/00</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardFront;
