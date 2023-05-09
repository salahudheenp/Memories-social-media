import React, { useEffect, useState } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import Form from '../../components/form/Form'
import Posts from '../../components/posts/Posts'

import { useDispatch } from 'react-redux'
import { getPosts } from '../../redux/actions/postsActions'

import useStyles from './style'


const Home = () => {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles()


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())


    }, [dispatch])

    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>


                </Grid>
            </Container>

        </Grow>
    )
}

export default Home
