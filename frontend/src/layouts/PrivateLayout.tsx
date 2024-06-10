import { Box, Typography, CssBaseline, Button } from '@mui/material'
import { FC, PropsWithChildren } from 'react'
import { useAuth } from '../hooks/useAuth'

export const PrivateLayout: FC<PropsWithChildren> = ({ children }) => {
    const { onLogout } = useAuth();
  return (
    <Box>
        <CssBaseline />
        <Box sx={{ backgroundColor: 'primary.main', color: 'white', height: '60px', display: 'flex', justifyContent: 'space-between', padding: 1, alignItems: 'center' }}>
            <Typography component="p">Header</Typography>
            <Button variant="contained" color="secondary" onClick={onLogout}>Logout</Button>
        </Box> 
    
        <Box sx={{ height: 'calc(100vh - 95px)' }}>
            { children }
        </Box>
    
        <Box sx={{ backgroundColor: 'primary.main', color: 'white', height: '35px', padding: 1, borderTopRightRadius: 10 ,borderTopLeftRadius: 10, display: 'flex', justifyContent: 'center' }}>
            <Typography component="p" fontSize={14}>@2024 Sistema Cafetero | Jose Mauricio Granados M </Typography>
        </Box>
    </Box>
  )
}