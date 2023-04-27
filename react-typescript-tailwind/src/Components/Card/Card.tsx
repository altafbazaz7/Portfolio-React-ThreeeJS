import { useEffect, useState } from "react"
import "./Card.css"

const Card = (props : any) => {
  const [active , setActive]= useState('')

  useEffect(() => {
    if(props.type === 'ACADEMICS'){
      setActive('ACADEMICS')
    } else if(props.type === 'PROJECTS'){
      setActive('PROJECTS')
    }
  },[props.type])

  let cardContent

  if (active === 'PROJECTS') {
    cardContent = (
      <>
      <img className="w-full card-image"  src={props.data.image}  />
      <div className="font-bold  text-silver text-3xl mb-2 card-title ">{props.data.title}</div>

      <div className="bg-gray-light card-tags p-2">
        {
          props.data?.tags?.map((curElem : any,index : any) => {
            return(
              <span key={index} className="inline-block tag-elem bg-silver rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{curElem}
              </span>
            )
          })
        }
      </div>
      </>
    )
  } else {
    cardContent = (
      <>

      <div className="px-6 py-4   bg-gray-light"    >
      <img className="w-full card-image"  style={{height:"300px", width:"500px"}} src={props.data.image}  />

        
        <div className="font-bold text-silver text-3xl mb-2 card-title ">{props.data.title}</div>

        
        {
          props.data?.tags?.map((curElem : any,index : any) => {
            return(
              <span key={index} className="inline-block tag-elem bg-silver rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {curElem}
              </span>
            )
          })
        }
      </div>
      </>
    )
  }

  return (
    <div className="rounded overflow-hidden shadow-lg card-main" onClick={() => window.open(props.data.link)}>
      {cardContent}
    </div>
  )
}

export default Card
