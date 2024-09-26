import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

const CategoryBreadcrumbs = ({ categories }) => {

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {categories.map((category, index) => (
        <Link
          key={index}
          component={RouterLink} // Use RouterLink for client-side navigation
          to={`/category/${category._id}`}
          color="inherit"
          underline="hover"
        >
          {category?.name || "no name"}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default CategoryBreadcrumbs;




