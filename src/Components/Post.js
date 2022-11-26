import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Header';
import ContentActions from '../Components/ContentActions';
import '../index.css';

export default function Post(props){
return (<div className="row gy-5" style={{display:'flex',justifyContent:"center",marginLeft:"30px",padding:"10px"}}>
<div className="col-12">
  <div  style={{
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: "5px 2px 10px",
 gap:"100px"
}}>
    <div className="col-8">
    <Header/>  
    <div className="h-20 row">
        <h1>
           {props.title}
        </h1>
            </div>
            <div className="h-25 row">
<p>{props.Text}         
</p>
</div>   
      <div  style={{
      display: "flex",
      flexDirection: "row",
      
    }}>
        <ContentActions/>
        <div className="col-8">
          <p>
            <small className="text-muted">12 min read</small>
            <small className="text-muted">Selected for you</small>
          </p>
        </div>
        <div className="col-2">
          <img src={require('../assets/skeleton-rect.png')} alt="..." />
          <img src={require('../assets/skeleton-rect.png')}  alt="..." />
          <img src={require('../assets/skeleton-rect.png')}  alt="..." />
        </div>
      </div>
    </div>
    <div className="col">
      <img className="img-fluid" src={props.Img}  alt="..."/>
    </div>
      </div>
  <hr />
</div>
</div>
  )
}
