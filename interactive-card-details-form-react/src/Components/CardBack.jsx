function CardBack({ formData, setFormData }) {
  const [name, number, month, year, cvc] = formData;
  const [setName, setNumber, setMonth, setYear, setCvc] = setFormData;
  return (
    <>
      <div className="card-back">{cvc != "" ? <p>{cvc}</p> : <p>000</p>}</div>
    </>
  );
}

export default CardBack;
