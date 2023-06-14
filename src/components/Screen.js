import { Container } from "react-bootstrap"

function Screen(){
    return(
    <>
    <Container style={{backgroundColor:'rgb(39, 37, 37)'}}>
        <div className="col-6 md-6 col-sm-6 text-white m-5 p-4" >
        <h2>I'm Yasmine Mohamed</h2>
        <h3 style={{color:'orange'}}>Front-End Developer</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor eleifend aliquet. Vivamus vitae consectetur elit. Donec placerat</p>
        <button className="bg-warning">HIRE ME</button>
</div>

</Container>
</>
    )
}
export default Screen