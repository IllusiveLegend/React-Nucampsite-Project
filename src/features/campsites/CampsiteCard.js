import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const CampsiteCard = ({ campsite }) => {
    const { id, name, image } = campsite;
    return(
        <Link to ={`${id}`}>
            <Card>
                <CardImg
                    width='100%'
                    src={image}
                    alt={name}
                />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    );
}

export default CampsiteCard;

//The above is an example of destructuring, people looking to hire will want to see this. Destructuring assignment syntax makes your code easier to read and saves you time. 