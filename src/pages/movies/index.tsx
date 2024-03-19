import type { PageComponent } from '@nxweb/react';

import CardMovie from './CardMovie';

const Products: PageComponent = () => {
  return (
    <CardMovie />
  );
};

Products.displayName = 'Products';

export default Products;
