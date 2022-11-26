export default function ContentImages(props){
  console.log(props);
    return (
        <div className="col">
      <img id="idImg"  className="img-fluid" src={props.Img}  alt="..."/>
    </div>
    )
}
