export default function BoxColor(props) {

    const divStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        /* display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        height: `100`,
        border: `1 solid black`,
        margin: `15` */
        
    };

  console.log(props);
  return <div className="box-color" style={divStyle}>rgb({props.r},{props.g},{props.b},)</div>;
}
