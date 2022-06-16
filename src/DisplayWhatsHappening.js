
export default function DisplayWhatsHappening(props) {

    return (
      props.img?
      <div className="DisplayWhatsHappening dwhHasImg" >
        <p className="dwhInfo dwhHasImgInfo">{props.info}</p>
        <h6 className="dwhTitle dwhHasImgTitle">{props.title}</h6>
        <p className="dwhAdditionalInfo dwhHasImgAdditionalInfo">{props.additionalInfo}</p>
        <img className="dwhImg" src={props.img}></img>
      </div>
      :
      <div className="DisplayWhatsHappening">
        <p className="dwhInfo">{props.info}</p>
        <h6 className="dwhTitle">{props.title}</h6>
        <p className="dwhAdditionalInfo">{props.additionalInfo}</p>
      </div>
    );
  }