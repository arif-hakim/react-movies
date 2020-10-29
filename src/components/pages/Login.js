import React from 'react'
import Header from '../Header'
import { Form, Button, Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const Login = () => {

    const { register, handleSubmit, errors } = useForm()

    let loginHandle = async (data) => {
        let base_url = 'http://localhost:8000/api'
        let response = await fetch(`${base_url}/login`, {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            method: 'POST'
        })

        let result = await response.json()
        if (result.code == 200) {
            alert('Login Success!')
            // localStorage.setItem('token', result.data.token)
        } else alert('Username/Password invalid!')
    }

    return (
        <>
            <Header></Header>
            <Container className="mt-4">
                <h2>Welcome!</h2><p>Please sign in to continue.</p>
                <hr />
                <Form onSubmit={handleSubmit(loginHandle)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="username" ref={register} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" ref={register} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Login