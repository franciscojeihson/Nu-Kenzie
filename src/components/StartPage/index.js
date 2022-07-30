import "./style.css"
import img1 from '../../imgs/NuTitle.svg'
import img2 from '../../imgs/img2.svg'
import img3 from '../../imgs/img3.svg'
import img4 from '../../imgs/img4.jpeg'


const Home = ({toIndex}) => {
  return (
    <>
    <body className="homePageDiv">
      <div className="globalDiv">
    <div className="div1Home">
      <img src={img1} alt="img1" className="img1"></img>
      <img src={img2} alt="img2" className="img2"></img>
      <img src={img3} alt="img3" className="img3"></img>
      <button onClick={toIndex} className="inicio">Iniciar</button>
    </div>
      <img src={img4} alt="img4" className="img4"></img>
    </div>
    </body>
    </>
  );
};

export default Home;
