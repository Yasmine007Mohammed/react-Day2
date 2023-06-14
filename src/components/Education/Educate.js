import { Container } from "react-bootstrap";
import { Educates } from "./EducateList";
import { useState } from "react";

const Education = () => {
  const [educateList] = useState(Educates)
    return(
      <>
        <Container className="mt-5">
          <div className="row d-flex flex-column text-white text-center">
              <h1 className="text-white p-3 text-center" >Education</h1>
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor eleifend aliquet. Vivamus vitae consectetur elit. Donec placerat </p>
              <div className="row my-5 bg-dark d-flex align-items-center justify-content-around">
                {educateList.map((data) => {
                  return(
                    <>
                      <div className="d-flex align-items-center justify-content-around">
                        <div className="col-3" >
                          <h3> {data.facality}</h3>
                          <p>{data.job} <span className="bg-warning">{data.date}</span></p>
                        </div>
                      <div className="col-5" style={{textAlign:'left'}}>
                        <h3>{data.certificate}</h3>
                        <p>{data.description}</p>
                      </div>
                      <br/>
                      </div>
                    </>
                  )
                })}
            
            </div>
            </div>

        </Container>
    </>
  )
}
export default Education