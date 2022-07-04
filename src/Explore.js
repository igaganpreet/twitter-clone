import ExploreData from "./ExploreData"
import {BiDotsHorizontalRounded} from "react-icons/bi"

export default function Explore(props) {
let data=ExploreData.data
let categories=["For you","COVID-19","Trending","News","Sports","Entertainment"]

let displayExploreContent=data.map((items)=>{
  return( 
    <div className="displayExploreContent">
      <div className="exploreContent">
      <h6 className="exploreInfo">{items.info}</h6>
      <h5 className="exploreInfoTitle">{items.title}</h5>
      <h6 className="exploreInfoNumber">{items.number}</h6>
      </div>
      {items.img?<img className="exploreContentImg" src={items.img}></img>:<BiDotsHorizontalRounded className="infoDotsIcon"/>}  
    </div>
    )
  }
)
let displayCategories=categories.map((item)=>{
  return(   
      <li className="categories"><a>{item}</a></li>
  )
})


    return (
      <main className="Explore">
        <ul className="exploreCategories">
          {displayCategories}
        </ul>

      <div className="exploreImg">
        <div className="exporeImgContent">
          <div className="imgType">
            <h6 className="imgCategory">News</h6>
            <h6 className="imgDate"> . June 28, 2022</h6>
          </div>
          <h3 className="imgHeading">Eoin Morgan accounces retirement from international cricket</h3>
          <h6 className="imgInfo">Trending with #eoinmorgan</h6>
        </div>
      </div>
      {displayExploreContent}
      </main>
    )
  }
