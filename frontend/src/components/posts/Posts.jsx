import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Post from './post/Post'
import useStyles from './style'

const Posts = ({ setCurrentId }) => {

    const posts = useSelector((state) => state.posts)
    console.log(posts, 'postsssss');
    const classes = useStyles()
    // const result = posts.posts
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid Container className={classes.container} container alignItems='stretch' spacing={3}>
                {posts.map((posts) => (
                    <Grid Grid key={posts._id} item xs={12} sm={6} md={6} >

                        <Post post={posts} setCurrentId={setCurrentId} />

                    </Grid>


                ))
                }
            </Grid >
        )
    )
}
{/*   */ }

export default Posts