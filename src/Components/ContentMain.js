import 'bootstrap/dist/css/bootstrap.min.css';
import ContentTitles from '../Components/ContentTitles';
import ContentTexts from '../Components/ContentTexts';
import ContentImages from '../Components/ContentImages';
import ContentActions from '../Components/ContentActions';

export default function ContentMain(props1,props2,props3){
    console.log(props1);
return (<div className="row gy-5" style={{display:'flex',justifyContent:"center",margin:"10px",padding:"10px"}}>
<div className="col-12">
  <div className="row">
    <div className="col-8">
      <div className="h-25 row">
        <div className="col-1">
          <img src="./assets/avatar_default.png" alt="..." />
        </div>
        <div className="col">
          <p>
            <b>Author name</b> <small className="text-muted">in</small>
            <b>Topics name</b> <small className="text-muted">7th July</small>
          </p>
        </div>
      </div>
      <ContentTitles/>
      {<ContentTitles title={props1.title}/>}
      <ContentTexts/>
      {<ContentTexts Text={props2.Text}/>/* { {myMainText.map((Texts, index)=><ContentTexts key={index} Text={Texts.Text}/>)}     } */}
      <div className="mt20 row" id="MyDiv">
        <ContentActions/>
        <div className="col-8">
          <p>
            <small className="text-muted">12 min read</small>
            <small className="text-muted">Selected for you</small>
          </p>
        </div>
        <div className="col-2">
          <img src="../assets/skeleton-rect.png" alt="..." />
          <img src="../assets/skeleton-rect.png" alt="..." />
          <img src="../assets/skeleton-rect.png" alt="..." />
        </div>
      </div>
    </div>
    <ContentImages/>
    {<ContentImages Img={props3.Img}/>/* {myImages.map((Images, index)=><ContentImages key={index} Img={Images.Img}/>)}  */}
      </div>
  <hr />
</div>
</div>
  )
}
