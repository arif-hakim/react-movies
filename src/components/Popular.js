import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import api from '../api/movies'
import helper from '../utils/helper'

const Popular = () => {
    const defaultMovies = {
        totalResult: 0,
        data: []
    }
    const [movies, setMovies] = useState(defaultMovies)

    const fetchData = async () => {
        let result = await api.getPopular()
        setMovies(() => {
            return {
                data: result.results.slice(0, 6),
                totalResult: result.results.length
            }
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    // ========= STYLES
    const sectionIndent = {
        paddingTop: '4rem',
        paddingBottom: '4rem'
    }
    const darkTheme = {
        background: '#000',
        color: '#fff'
    }

    const figureStyle = {
        width: '230px',
        height: '300px',
        borderRadius: '8px',
        overflow: 'hidden',
        marginRight: '1rem'
    }

    const figureImageStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '8px',
        objectFit: 'cover'
    }

    return (
        <>
            <div style={{ ...darkTheme, ...sectionIndent }}>
                <Container fluid style={{ padding: '0 4rem' }}>
                    <h1 className="ml-n3 mb-3">Popular</h1>
                    <Row>
                        {movies.data.length > 0 && movies.data.map((item, index) => {
                            return (
                                <figure style={figureStyle}>
                                    <img style={figureImageStyle} src={helper.image_original_url + item.poster_path} alt="" />
                                </figure>
                            )
                        })}
                        <figure style={{ ...figureStyle, background: '#222', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <span style={{ color: '#999', fontSize: '1.25rem' }}>View All</span>
                        </figure>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Popular