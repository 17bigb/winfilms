import {Card, Col, Container, Row, Image} from "react-bootstrap"
import thebig4 from "../assets/img/trending/thebig4.jpg"
import aquaman from "../assets/img/trending/aquaman.jpg"
import avatar from "../assets/img/trending/avatar.jpeg"
import batman from "../assets/img/trending/batman.jpg"
import blackphanter from "../assets/img/trending/blackphanter.jpeg"
import blackadam from "../assets/img/trending/blackadam.jpg"
const Trending = () => {
    return (
        <div>
            <Container>                
            <br/>
                <h1 className="text-white">Trending Movies</h1>              
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="bg-dark movieImage">
                            <Image src={thebig4} alt="The Big 4" className="images"/>  
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">The Big 4</Card.Title>
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
                            <Image src={aquaman} alt="Aquaman" className="images"/>  
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Aquaman</Card.Title>
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
                            <Image src={avatar} alt="Avatar" className="images"/>  
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Avatar</Card.Title>
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
                            <Image src={batman} alt="Batman" className="images"/>  
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Batman</Card.Title>
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
                            <Image src={blackphanter} alt="Blackphanter" className="images"/>  
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Blackphanter</Card.Title>
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
                            <Image src={blackadam} alt="Black Adam" className="images"/>  
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Black Adam</Card.Title>
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

export default Trending