import { Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { AddToFavAction, PlaySongAction, RemoveFromFavAction, StopSongAction } from "../redux/actions/actions"


function Player() {
    const song = useSelector(state => state.song.song)
    const isPlaying = useSelector(state => state.song.isPlaying)
    const fav = useSelector(state => state.favourite.list)
    const dispatch = useDispatch()
    return (
        <Row className="h-100">
            <Col lg={10} className="offset-md-2 offset-lg-2">
                <Row className="h-100 justify-content-around align-items-center">
                    <Col xs={3} md={3} className="d-flex ">
                        {
                            song && <>
                                <div>
                                    <img className="MarginAlbumImgPlayer" src={song.album.cover_medium} alt="" width={80} />
                                </div>
                                <div>
                                    <p className="text-white mb-0  custom">{song.title}</p>
                                    <p className="text-white mb-0 custom">{song.artist.name}</p>
                                </div>
                            </>
                        }

                    </Col>
                    <Col xs={6} md={4} className="playerControls">
                        <div className="d-flex align-items-center">
                            <a href="#7">
                                <img src="/shuffle.png" alt="shuffle" />
                            </a>
                            <a href="#8">
                                <img src="/prev.png" alt="prev" />
                            </a>
                            {
                                isPlaying ? (
                                    <a href="#9">
                                        <img src="/stop-circle.svg" alt="stop" onClick={()=>dispatch(StopSongAction())}/>
                                    </a>
                                ) : (
                                    <a href="#10">
                                        <img src="/play.png" alt="play" onClick={()=>dispatch(PlaySongAction())} />
                                    </a>
                                )
                            }
                            <a href="#11">
                                <img src="/next.png" alt="next" />
                            </a>
                            <a href="#12">
                                <img src="/repeat.png" alt="repeat" />
                            </a>
                        </div>
                        <div className="progress mt-3">
                            <div role="progressbar"></div>
                        </div>
                    </Col>
                    <Col xs={1}>
                        <div className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill={
                                fav.find(s=> s.id === song.id) ? 'green' : "gray"
                            } className="bi bi-heart-fill" viewBox="0 0 16 16"  onClick={() => {
                                !fav.find(s=> s.id === song.id) ?
                                  dispatch(AddToFavAction(song)) : dispatch(RemoveFromFavAction(song))
                              }}>
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                            </svg>
                        </div>
                    </Col>
                </Row>
            </Col >
        </Row >
    )
}

export default Player