import {Card} from "react-bootstrap"
import thebig4 from "../assets/img/trending/thebig4.jpg"
const Trending = () => {
    return (
        <div>
           <Card className="bg-dark text-white">
            <Card.Img src="{thebig4}" alt="The Big 4" />
            <Card.ImgOverlay>
                <Card.Title>The Big 4</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default Trending