import whatsHappeningData from "./whatsHappeningData";
import DisplayWhatsHappening from "./DisplayWhatsHappening";


export default function WhatsHappening() {

  const whData=whatsHappeningData.data
  const displayWH=whData.map((item)=>{
      return <DisplayWhatsHappening 
                key={item.id}
                id={item.id}
                info={item.info}
                title={item.title}
                additionalInfo={item.additionalInfo}
                img={item.img}
      />
    }
  )

    return (
      <div className="WhatsHappening">
        <h5>What's happening</h5>
        {displayWH}
      </div>
    );
  }