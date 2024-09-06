import {Container, Row, Col} from 'react-bootstrap'
import { useSelector } from "react-redux"

function FavouriteSong() {
    const fav = useSelector(state => state.favourite.list)
    return (
        <div className=' overflow-y-auto'>
            <h5 className="text-white ms-2">Brani che ti piacciono</h5>
            <Container>
                    {
                        fav.map((s)=>{
                            return (
                                <Row className='g-0' key={s.id}>
                                <Col xs={4}>
                                    <img alt='' src={s.album.cover_small}></img>
                                </Col>
                                <Col xs={6}>
                                    <p className='custom mb-0'>{s.title}</p>
                                    <p className='custom'>{s.artist.name}</p>
                                </Col>
                                </Row>
                            )
                        })
                    }
            </Container>
        </div>
    )

}

export default FavouriteSong