
export default function Explore(props) {


    return (
      <main className="Explore">
        <ul className="exploreCategories">
          <li className="categories"><a className="active">For you</a></li>
          <li className="categories">COVID-19</li>
          <li className="categories">Trending</li>
          <li className="categories">News</li>
          <li className="categories">Sports</li>
          <li className="categories">Entertainment</li>
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
      <div>
        {/* <h6>category</h6>
        <h5>title</h5>
        <h6>info</h6>
        <img></img> */}
      </div>


      </main>
    )
  }
