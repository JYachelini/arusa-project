import React from 'react';
import { Badge, IconButton, Tooltip, Typography } from '@mui/material';
import Modal from '../../../common/Modal';
import { ICart } from '../../../interfaces/cart.interface';
import Bag from './Bag';

function Right({
  color,
  isOpen,
  toggleDrawer,
  cart
}: {
  color: boolean;
  isOpen: boolean;
  toggleDrawer: () => (event: React.KeyboardEvent | React.MouseEvent) => void;
  cart: ICart;
}): React.ReactElement {
  const getTotal = (): { totalPrice: number; totalItems: number } => {
    let totalItems = 0;
    let totalPrice = 0;
    cart.products.forEach((item) => {
      totalItems += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalItems };
  };
  return (
    <>
      <Tooltip title="Click to see bag">
        <IconButton
          sx={{
            display: 'flex',
            justifyContent: 'end',
            gap: '1rem',
            margin: 0,
            marginRight: { mobile: '1rem', tablet: '4.5rem' },
            alignItems: 'center',
            cursor: 'pointer',
            color: `${!color ? 'black' : 'white'}.main`
          }}
          onClick={toggleDrawer()}
        >
          <Typography variant="small" lineHeight="32px">
            BAG
          </Typography>
          <Badge
            badgeContent={getTotal().totalItems}
            showZero={true}
            color="opal"
            sx={{ color: 'white.main', typography: 'small', lineHeight: '1px' }}
          ></Badge>
        </IconButton>
      </Tooltip>
      <Modal anchor="right" isOpen={isOpen} toggleDrawer={toggleDrawer}>
        <Bag
          cart={cart}
          totalPrice={getTotal().totalPrice}
          toggleDrawer={toggleDrawer}
        />
      </Modal>
    </>
  );
}

export default Right;
