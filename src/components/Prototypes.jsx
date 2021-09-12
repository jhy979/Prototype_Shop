import useActions from "../hooks/useActions";
import usePrototypes from "../hooks/usePrototypes";

export default function Prototypes() {
  const prototypes = usePrototypes();
  const {addToOrder,remove,removeAll} = useActions();
  return (
    <main>
      <div className="prototypes">
        {prototypes.map((el,idx)=>{
          const {id,thumbnail,title,price,desc,pieUrl} = el;
          const click=()=>{
            addToOrder(id);
          }
          return (
            <div className="prototype" key={id}>
              <a href={pieUrl} target="_BLANK" rel="noreferrer">
                <div style={
                  {padding:"25px 0 33px 0"}
                }>
                  <video autoPlay loop playsInline className = "prototype__artwork prototype__edit" src={thumbnail} style ={ {
                    objectFit :"contain",
                  }}></video>
                </div>
              </a>
              {/* 상품정보 */}
              <div className="prototype__body">
                <div className="prototype__title">
                  <div className="btn btn--primary float--right" onClick={click}>
                    <i className = "icon icon--plus"></i>
                  </div>
                  {title}
                </div>
                <p className= "prototype__price">$ {price}</p>
                <p className= "prototype__desc">{desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  ); 
}