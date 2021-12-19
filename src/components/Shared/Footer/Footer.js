import { Container, Grid, IconButton, List, ListItemText, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';
import MuiButton from '../../../Styled/Button';

const useStyle = makeStyles({
        socialIcon: {
            color: '#19dE !important',
            border: '1px solid #19dE !important',
            margin: '20px 10px 30px 0 ! important',
            '&:hover': {
                background: '#19dE !important',
                color: '#fff !important'
            }
        }
    })

const Footer = () => {
    const { socialIcon } = useStyle();
    
    return (
        <footer>
            <Container>
                <Grid container spacing={3} sx={{ my: 3 }}>
                    <Grid item xs={12} md={6} sm={12} lg={6}>
                        <List sx={{mt: 4}}>
                            <ListItemText sx={{ color: '#19dE', mb: 1}}>VEHICLES</ListItemText>
                            <ListItemText>Charger</ListItemText>
                            <ListItemText>Challenger</ListItemText>
                            <ListItemText>Durango</ListItemText>
                            <ListItemText>SRT</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={6} sm={12} lg={6}>
                        <List>
                            <ListItemText sx={{ color: '#19dE', mb: 1}}>RESEARCH</ListItemText>
                            <ListItemText>Competitive Compare</ListItemText>
                            <ListItemText>Build & Price</ListItemText>
                            <ListItemText>Compare Models</ListItemText>
                            <ListItemText>Warranty</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={6} sm={12} lg={6}>
                        <List>
                            <ListItemText sx={{ color: '#19dE', mb: 1}}> ENTHUSIASTS</ListItemText>
                            <ListItemText>Mercury Car Services</ListItemText>
                            <ListItemText>Commercials</ListItemText>
                            <ListItemText>Merchandise</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={6} sm={12} lg={6}>
                        <List>
                            <ListItemText sx={{ color: '#19dE', mb: 1}}>FOLLOW US</ListItemText>
                            <IconButton className={socialIcon}>
                                <GoogleIcon />
                            </IconButton>
                            <IconButton className={socialIcon}>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton className={socialIcon}>
                                <InstagramIcon />
                            </IconButton>
                            <Typography>Call Us</Typography>
                            <MuiButton>+123-3453-4567</MuiButton>
                        </List>
                    </Grid>
                </Grid>
                <Typography
                    sx={{ textAlign: 'center', pt: 4 }}
                    variant="subtitle2"
                 >Copyright &copy; {new Date().getFullYear()} All Rights Reserved</Typography>
            </Container>
        </footer>
    );
};

export default Footer;