import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "../models/IProduct";
import { useCartStore } from "../store/useCartStore";

const ProductsPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { addToCart } = useCartStore();

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <h1>Products</h1>
      <Grid container spacing={2}>
        {/* Loop thru here later */}
        {products?.map((product: IProduct) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardMedia
                  sx={{ height: 140 }}
                  image={product.image}
                  title={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {product.description}
                  </Typography>
                  <Typography variant="h5">${product.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    color="error"
                    onClick={() => addToCart(product)}
                  >
                    Add To Cart
                  </Button>
                  <Button size="small" variant="outlined">
                    Add to Wishlist
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ProductsPage;
