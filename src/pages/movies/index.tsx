import type { PageComponent } from '@nxweb/react';

import CardMovie from './cardMovie';

const Products: PageComponent = () => {
  
  return (
    <>
    <CardMovie/>
      </>
  );
};

Products.displayName = 'Products';

export default Products;
