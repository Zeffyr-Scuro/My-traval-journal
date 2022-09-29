import React from "react"

export default function Holiday(props){
    return(
        <section>
            <div className="img" >
                <img src={props.imageUrl} />
            </div>
            <div className="text" >
                <div className="holiday-map-loca" >
                    <p className="holiday-loca" >{props.location}</p>
                    <p><a className="holiday-map" href={props.googleMapsUrl}>View on Google Maps</a></p>
                </div>
                <h1 className="holiday-title" >{props.title}</h1>
                <h4 className="holiday-date" >{props.startDate} - {props.endDate}</h4>
                <p className="holiday-desc" >{props.description}</p>
            </div>
            <hr />
        </section>
    )
}