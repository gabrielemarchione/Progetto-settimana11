import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { AddSongAction, StopSongAction } from '../redux/actions/actions'


function Section(props) {
    const [songs, setSongs] = useState([])
    const fillMusicSection = async () => {
        try {
            let response = await fetch(
                'https://striveschool-api.herokuapp.com/api/deezer/search?q=' + props.search
            )
            if (response.ok) {
                let { data } = await response.json()
                console.log(data)
                setSongs(data.slice(0,4))
            } else {
                throw new Error('Error in fetching songs')
            }
        } catch (err) {
            console.log('error', err)
        }
    }
    useEffect(()=>{
        dispatch(StopSongAction)
        fillMusicSection()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const dispatch = useDispatch()
    return (
        <Col xs={10} className='custom-section'>
            <h2>{props.title}</h2>
            <Row xs={1} sm={2} lg={4} xl={4} className='py-3 imgLinks'>
                {
                    songs.map(s=>{
                        return (
                            <Col key={s.id} className='text-center pointer' onClick={()=>dispatch(AddSongAction(s))}>
                                <img src={s.album.cover_medium} alt="track" className='img-fluid'/>
                                <p className='mb-0'>Track: {s.title}</p>
                                <p>Artist: {s.artist.name}</p>
                            </Col>
                        )
                    })
                }
            </Row>
        </Col>
        
    )
}

export default Section