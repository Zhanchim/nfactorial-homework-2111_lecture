export default function Header(){
    return (<div className="h-25 row">
    <div className="col-1">
      <img src={require('../assets/avatar_default.png')} alt="..." />
    </div>
    <div className="col">
      <p>
        <b>Author name</b> <small className="text-muted">in</small>
        <b>Topics name</b> <small className="text-muted">7th July</small>
      </p>
    </div>
  </div>)
}