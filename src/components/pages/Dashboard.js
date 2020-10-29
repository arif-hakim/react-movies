import React from 'react'
import Header from '../Header'
import Popular from '../Popular'
import { Carousel } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import api from '../../api/movies'
import helper from '../../utils/helper'

const defaultMovie = {
    movies: [],
    totalResult: 0
}

const Dashboard = () => {
    const [movie, setMovie] = useState(defaultMovie)
    const [isError, setIsError] = useState(false)

    const fetchData = async () => {
        let result = await api.getPopular()
        setMovie((currentState) => {
            return {
                movies: result.results.slice(0, 10),
                totalResult: result.results.length
            }
        });
    }

    useEffect(() => {
        fetchData();
    }, []);



    // ======= STYLES
    const bgDark = {
        background: 'rgba(0,0,0,.5)'
    }

    return (
        <>
            <Header></Header>
            {movie.totalResult > 0 &&
                <Carousel>
                    {movie.movies.map((item, index) => {
                        return (
                            <Carousel.Item key={index} style={{ maxHeight: '700px' }}>
                                <img
                                    className="d-block w-100"
                                    src={helper.image_original_url + item.poster_path}
                                    alt="First slide"
                                />
                                <Carousel.Caption className='d-inline' style={bgDark}>
                                    <h3>{item.original_title}</h3>
                                    <p>{item.overview}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            }
            <Popular />
        </>
    )
}

export default Dashboard