import {Card, Col, Container, Row, Image} from "react-bootstrap"
import captMarvel from "../assets/img/superhero/captMarvel.jpg"
import captMarvel2 from "../assets/img/superhero/captmarvel2.jpg"
import quantumania from "../assets/img/superhero/quantumania.jpg"
import shangchi from "../assets/img/superhero/shangchi.jpeg"
import spiderman from "../assets/img/superhero/spiderman.jpeg"
import thor from "../assets/img/superhero/thor.jpeg"
const Superhero = () => {
    return (
        <div>
            <Container>                
            <br/>
                <h1 className="text-white text-center">Marvel Movies</h1>              
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="bg-dark movieImage">
                            <Image src={thor} alt="Thor" className="images"/>  
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Thor</Card.Title>
                              x      <Card.Text className="text-left">
                                    Empat pensiunan pembunuh bayaran kembali beraksi saat mereka bertemu dengan polisi yang bersih yang bertekad untuk melacak seorang pembunuh yang sulit ditangkap.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>                        
                                </div>
                            </div>
                        </Card>  
                    </Col>                
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark movieImage">
                            <Image src={spiderman} alt="Spiderman" className="images"/>  
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Spiderman</Card.Title>
                                    <Card.Text className="text-left">
                                    Empat pensiunan pembunuh bayaran kembali beraksi saat mereka bertemu dengan polisi yang bersih yang bertekad untuk melacak seorang pembunuh yang sulit ditangkap.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>                        
                                </div>
                            </div>
                        </Card>  
                    </Col>                
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark movieImage">
                            <Image src={quantumania} alt="Quantumania" className="images"/>  
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Quantumania</Card.Title>
                                    <Card.Text className="text-left">
                                    Empat pensiunan pembunuh bayaran kembali beraksi saat mereka bertemu dengan polisi yang bersih yang bertekad untuk melacak seorang pembunuh yang sulit ditangkap.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>                        
                                </div>
                            </div>
                        </Card>  
                    </Col>                
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark movieImage">
                            <Image src={captMarvel} alt="Caotain Marvel" className="images"/>  
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Captain Marvel</Card.Title>
                                    <Card.Text className="text-left">
                                    Empat pensiunan pembunuh bayaran kembali beraksi saat mereka bertemu dengan polisi yang bersih yang bertekad untuk melacak seorang pembunuh yang sulit ditangkap.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>                        
                                </div>
                            </div>
                        </Card>  
                    </Col>                
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark movieImage">
                            <Image src={shangchi} alt="Shangchi" className="images"/>  
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Shangchi</Card.Title>
                                    <Card.Text className="text-left">
                                    Empat pensiunan pembunuh bayaran kembali beraksi saat mereka bertemu dengan polisi yang bersih yang bertekad untuk melacak seorang pembunuh yang sulit ditangkap.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>                        
                                </div>
                            </div>
                        </Card>  
                    </Col>                
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark movieImage">
                            <Image src={captMarvel2} alt="Captain Marvel 2" className="images"/>  
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Captain Marvel 2</Card.Title>
                                    <Card.Text className="text-left">
                                    Empat pensiunan pembunuh bayaran kembali beraksi saat mereka bertemu dengan polisi yang bersih yang bertekad untuk melacak seorang pembunuh yang sulit ditangkap.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>                        
                                </div>
                            </div>
                        </Card>  
                    </Col>                
                </Row>
            </Container>     
        </div>
    )
}

export default Superhero