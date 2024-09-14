import {listData} from "../../lib/dummydata";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card"
import "./listpage.scss"

function ListPage() {

  const data = listData;
  return <div className="listpage">
    <div className="listContainer">
      <div className="wrapper">
      <Filter/>

      </div>
   
    
       

      
    </div>
    <div className="mapContainer">map</div>




  </div>
   
  
}

export default ListPage
