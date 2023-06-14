import { Container, Row, Col,Card } from "react-bootstrap"
import { Services } from "./SeviceList"
import { useState } from "react"

const Service = () =>{
    const [serviceList] = useState(Services)
    return (
        <>
            <Container >
                <div className="d-flex justify-content-center">
                    <h1 className="text-white p-3" >My Services</h1>
                </div>
                <div>
                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor eleifend aliquet. Vivamus vitae consectetur elit. Donec placerat </p>
                </div>
                
                    
                    {serviceList.map((data) => {
                        return (
                            <>
                            <Row className="mt-5">
                                <Col className="md-4" >
                                    <Card className="p-3 text-white" style={{backgroundColor:'rgb(39, 37, 37)'}}>
                                        <div className="d-flex flex-row mb-3"><div class="d-flex flex-column ml-2"><span></span><span class="text-black-50"></span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                                        </div>
                                        <img src={data.img} alt="" />
                                        <h2 className="text-center">{data.title}</h2>
                                        <div className="text-center">{data.describe}</div>
                                    </Card>
                                </Col>
                                </Row>
                            </>
                        )
                    })}
                
            </Container>
        </>
    )
}
export default Service