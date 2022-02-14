import { styled as muiStyled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import P1 from 'assets/imgs/1.jpeg';
import P2 from 'assets/imgs/2.jpeg';
import P3 from 'assets/imgs/3.jpeg';
import P4 from 'assets/imgs/4.jpeg';
import P5 from 'assets/imgs/5.jpeg';
import P6 from 'assets/imgs/6.jpeg';
import P7 from 'assets/imgs/7.jpeg';
import P8 from 'assets/imgs/8.jpeg';
import P9 from 'assets/imgs/9.jpeg';
import P10 from 'assets/imgs/10.jpeg';
import PSomenail from '../ProductSomenail';
import ProductGrid from '.';
import { Title } from '../StoryComponent';

const Item = muiStyled(Paper)(({ theme }) => ({
  backgroundColor: '#ececec',
  border: '1px solid #333',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#333',
  boxShadow: 'none',
}));

const customViewports = {
  iPhoneXR: {
    name: 'iPhoneXR',
    styles: {
      width: '414px',
      height: '896px',
    },
  },
  labtop: {
    name: 'labtop',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
};

export default {
  title: 'atoms/Grid',
  component: Grid,
  parameters: {
    viewport: {
      viewports: customViewports,
    },
  },
};

export const ProductView = () => {
  return (
    <>
      <Title>Mobile - Labtop - Desktop</Title>
      <ProductGrid style={{ background: '#ececec' }}>
        <PSomenail bg={P1} />
        <PSomenail bg={P2} />
        <PSomenail bg={P3} />
        <PSomenail bg={P4} />
        <PSomenail bg={P5} />
        <PSomenail bg={P6} />
        <PSomenail bg={P7} />
        <PSomenail bg={P8} />
        <PSomenail bg={P9} />
        <PSomenail bg={P10} />
      </ProductGrid>
    </>
  );
};

export const MuiDefault = () => {
  return (
    <>
      <Title>Basic Grid</Title>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Item>xs=2</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>xs=2</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>xs=2</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>xs=2</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>xs=2</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>xs=2</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>xs=6</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={10}>
            <Item>xs=10</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>xs=12</Item>
          </Grid>
        </Grid>
      </Box>

      <Title>Multiple Breakpoints Grid</Title>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2} md={4} lg={6}>
            <Item>xs=2, md=4, lg=6</Item>
          </Grid>
          <Grid item xs={2} md={4} lg={6}>
            <Item>xs=2, md=4, lg=6</Item>
          </Grid>
          <Grid item xs={2} md={4} lg={6}>
            <Item>xs=2, md=4, lg=6</Item>
          </Grid>
          <Grid item xs={2} md={4} lg={6}>
            <Item>xs=2, md=4, lg=6</Item>
          </Grid>
          <Grid item xs={2} md={4} lg={6}>
            <Item>xs=2, md=4, lg=6</Item>
          </Grid>
          <Grid item xs={2} md={4} lg={6}>
            <Item>xs=2, md=4, lg=6</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
