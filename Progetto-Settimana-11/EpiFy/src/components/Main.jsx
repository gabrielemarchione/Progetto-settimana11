import { Col, Row } from "react-bootstrap";
import Section from "./Section";
import { useDispatch, useSelector } from "react-redux";
import { StopSongAction } from "../redux/actions/actions";
import { useEffect, useRef,  } from "react";

function Main() {
   
    const song = useSelector(state=>state.song.song)
    const isPlaying = useSelector(state=>state.song.isPlaying)
    const audioRef = useRef(null); // la canzone attiva
    const dispatch = useDispatch()
    useEffect(()=>{
       
        if(audioRef) {
            if(isPlaying) {
                audioRef.current.play()
            } else {
                audioRef.current.pause()
            }
        }
    }, [isPlaying])
    return (
        <>
            <Row>
                <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
                    <a href="#1">TRENDING</a>
                    <a href="#2">PODCAST</a>
                    <a href="#3">MOODS AND GENRES</a>
                    <a href="#4">NEW RELEASES</a>
                    <a href="#5">DISCOVER</a>
                </Col>
            </Row>
            <Row>
                <Section title='Pop Rock' search='queen' />
                <Section title='Rock n Blues' search='led zeppelin' />
                <Section title='Progressive Rock' search='pink floyd' />
                <div className=" invisible custom-margin">
                    {
                        song && <audio ref={audioRef} src={song.preview} onEnded={()=>dispatch(StopSongAction())} autoPlay></audio>
                    }
                    
                </div>
            </Row>
        </>
    )
}

export default Main