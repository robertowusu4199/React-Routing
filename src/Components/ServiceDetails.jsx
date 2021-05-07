import React from "react";

const ServiceDetails = (props) => {
    return (
        <div>
            <h1>Services Details:1{props.match.params.id}</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, exercitationem, 
                earum, repellat blanditiis recusandae quia sequi aliquid soluta adipisci 
                laudantium vero rem nemo iste deleniti. Fugit vero velit cupiditate doloremque.
            </p>
        </div>
    )
}

export default ServiceDetails;