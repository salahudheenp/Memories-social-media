import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core'
import { GoogleLogin } from '@react-oauth/google'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import useStyles from './style'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Icon from './icon'
import Inputs from './Inputs'
import { signIn, signUp } from '../../redux/actions/authActions'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

const Auth = () => {
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)
    const [formData, setFormData] = useState(initialState)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)



    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSignUp) {
            dispatch(signUp(formData, navigate))
        } else {
            dispatch(signIn(formData, navigate))

        }
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
        setShowPassword(false)
    }

    const googleSuccess = (res) => {
        const result = res.profileObj
        const token = res.token

        try {
            dispatch({ type: 'AUTH', data: { result, token } })

            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }
    const googleFailure = (error) => {
        console.log(error);
        console.log('Google Sign in was unsuccessful.');
    }

    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Inputs name='firstName' label='First Name' handleChange={handleChange} half />
                                    <Inputs name='lastName' label='Last Name' handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Inputs name='email' label='Email Address' handleChange={handleChange} type='email' />
                        <Inputs name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        {isSignUp && <Inputs name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />}
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit} >
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin
                        clientId='478680087616-q5o7cpdk6ap4u20p6lqfqvhmerjkllbf.apps.googleusercontent.com'
                        render={(renderProps) => (
                            <Button
                                className={classes.googleButton}
                                color='primary'
                                fullWidth
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon />}
                                variant='contained'
                            >
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onError={googleFailure}
                        cookiePolicy='single_host_origin'
                    />


                    <Grid container justify='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignUp ? 'Already have an account ? Sign In' : "don't have an account ? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
