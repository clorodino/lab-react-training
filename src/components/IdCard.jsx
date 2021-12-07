export default function IdCard(props) {
  const { person } = props;
  return (
    <div className="card">
      <div>
        <img src={person.picture} alt="" />
      </div>
      <div className="cardInfo">
        <span className="cardName">First Name: </span>{person.firstName}<br />
        

        <span className="cardName">Last Name: </span>
        {person.lastName}
        <br />

        <span className="cardName">gender: </span>
        {person.gender}
        <br />

        <span className="cardName">height: </span>
        {person.height}
        <br />

        <span className="cardName">birth: </span>
        {person.birth.toString()}
      </div>
    </div>
  );
}
