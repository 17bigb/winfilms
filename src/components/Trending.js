import  {useEffect, useState} from "react"

import {Card, Col, Container, Row, Image} from "react-bootstrap"

import thebig4 from "../assets/img/trending/thebig4.jpg"
import aquaman from "../assets/img/trending/aquaman.jpg"
import avatar from "../assets/img/trending/avatar.jpeg"
import batman from "../assets/img/trending/batman.jpg"
import blackphanter from "../assets/img/trending/blackphanter.jpeg"
import blackadam from "../assets/img/trending/blackadam.jpg"
import axios from "axios"


const Trending = () => {
    const [movies, setMovies] = useState ([])
    useEffect (() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        }).then((response) => {            
            setMovies(response.data.results)
        })
    }, [])

    return (
        <div>
            <Container>                
            <br/>
                <h1 className="text-white text-center">Trending Movies</h1>              
                <Row>
                    {movies.map((result, index) => {
                        return(
                            <Col md={4} className="movieWrapper" id="trending" key={index}>
                                <Card className="bg-dark movieImage">
                                    <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt="test" className="images"/>  
                                    <div className="bg-dark">
                                        <div className="p-2 m-1 text-white">
                                            <Card.Title className="text-center">{result.title}</Card.Title>
                                            <Card.Text className="text-left">
                                            {result.overview}
                                            </Card.Text>
                                            <Card.Text className="text-left">{result.release_date}</Card.Text>                        
                                        </div>
                                    </div>
                                </Card>  
                            </Col>
                        )
                    })}
                </Row>
            </Container>     
        </div>
    )
}

export default Trending