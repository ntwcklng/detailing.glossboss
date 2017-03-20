export default({img, link, title}) => (
  <div className="referenz">
    <a href={link} target="_blank">
      <div className="inner">
        <h1>{title}</h1>
        <img src={img} />
      </div>
    </a>
    <style jsx>{`
      .referenz {
        text-align: center;
        color: #282A36;
        padding: 30px;
        border: 1px solid white;
      }
      .referenz:hover {
        border: 1px solid #50A8DB;
      }
      a {
        text-decoration: none;
      }
      img {
        opacity: .9;
      }
      .inner:hover > img {
        opacity: 1;
      }
    `}</style>
  </div>
)