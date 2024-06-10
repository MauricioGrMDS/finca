import { Avatar, Box, Button, CssBaseline, Grid, Paper, TextField, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { useCallback } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { LoginData, useAuth } from '../../hooks/useAuth';

export const Login = () => {
    const { onLogin } = useAuth();
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Debe ser un email válido').required('El correo es requerido'),
        password: Yup.string().min(6, 'Debe tener al menos 6 caracteres!').required('La contraseña es requerida'),
    });
    
    const onSubmit = useCallback(async (loginData: LoginData) => {
        onLogin(loginData);
    }, [onLogin])
    

    return (
        <Formik initialValues={{ email: 'ka@gmail.com', password: 'basdnajknd' }} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ errors, touched, values, handleChange, handleBlur }: FormikProps<LoginData>) => (
                <Form>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                        <Grid item sm={4} md={7} sx={{
                            backgroundImage: `url(${require("../../assets/loginBackgroundImage.png")})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: { xs: 'none', sm: 'flex'},
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 2
                        }}>
                            <img src={require("../../assets/logo-light.svg").default} alt="Logo" width={299}/>

                        </Grid>
                        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: { xs: 2 } }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                            <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56, mb: 5 }}>
                                <LockOutlined />
                            </Avatar>
                            <Typography component="h1" variant="h5">Inicia sesión para acceder a tu cuenta</Typography>
                            <Box sx={{mt: 2, width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    label="Correo Electrónico"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.email && Boolean(errors.email)}
                                    helperText={touched.email && errors.email}
                                />
                                <TextField
                                    fullWidth
                                    name="password"
                                    label="Contraseña"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.password && Boolean(errors.password)}
                                    helperText={touched.password && errors.password}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                >
                                    Iniciar Sesión
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                </Form>
            )}
        </Formik>
    )
}
