import React from 'react';
import styled from 'styled-components';
import HyperButton from 'components/atoms/Buttons/HyperButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import { ftSize, ftFamily } from 'styles/theme';
import Nav from 'components/molcules/Nav';
import ProductGrid from 'components/atoms/ProductGrid';
import PSomenail from 'components/atoms/ProductSomenail';
import P1 from 'assets/imgs/1.png';
import P2 from 'assets/imgs/2.png';
import P3 from 'assets/imgs/3.png';
import P4 from 'assets/imgs/4.png';
import P5 from 'assets/imgs/5.png';
import P6 from 'assets/imgs/6.png';
import P7 from 'assets/imgs/7.png';
import P8 from 'assets/imgs/8.png';
import P9 from 'assets/imgs/9.png';
import P10 from 'assets/imgs/10.png';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 3rem 0;
`;
type Props = {
  sz: string;
  ff?: keyof typeof ftFamily;
  fw?: number;
  mb: number;
};

const GrayContainer = styled.div`
  height: 9rem;
  background-color: ${({ theme }) => theme.color.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;

  width: 100%;
`;

const Text = styled.div<Props>`
  font-weight: 600;
  font-size: ${({ sz }) => sz};
  font-family: ${({ ff }) => ff};
  font-weight: ${({ fw }) => fw};
  margin-bottom: ${({ mb }) => `${mb}rem`};
`;

const SamplePage: React.FC = () => {
  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (anchor: 'left', open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState(open);
    };

  const list = (anchor: 'left') => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Nav />
      <Container>
        <Text sz={ftSize.sm} mb={1.2}>
          HOME - BAGS - MESSENGER - F11 LASSIE
        </Text>

        <Text
          sz={ftSize.md}
          mb={2}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          onClick={toggleDrawer('left', true)}
        >
          <div style={{ marginRight: '0.5rem' }}>
            <FilterListIcon />
          </div>
          <div>FILTERS (0)</div>
        </Text>

        <Text sz={ftSize.xxl} fw={700} mb={0.5}>
          F11 LASSIE
        </Text>

        <Text sz={ftSize.xl} fw={600} mb={1}>
          MESSENGER SMALL ₩288,000
        </Text>
        <div>
          <ProductGrid>
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
        </div>
      </Container>

      <GrayContainer>
        <HyperButton sz="md">
          This product spent its first life as a truck tarp on the road and is
          made of PVC: don’t chew, don’t suck, don’t eat. Not suitable for
          children under the age of 3. More
        </HyperButton>
      </GrayContainer>

      <div>
        <React.Fragment>
          <Drawer
            anchor="left"
            open={state}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
        </React.Fragment>
      </div>
    </div>
  );
};

export default SamplePage;
