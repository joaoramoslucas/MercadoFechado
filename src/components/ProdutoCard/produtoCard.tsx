import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
  max-width: 300px;
  background-color: yellow; /* Define a cor de fundo como amarela */
`;
const Title = styled.h2`
  font-size: 18px;
  color: #000;
`;
const Id = styled.span`
  font-size: 16px;
  color: #555;
`;
const Price = styled.span`
  font-size: 20px;
  color: #FF0000;
`;
interface ProductCardProps {
    title: string;
    id: string;
    price: string;
}
const ProductCard: React.FC<ProductCardProps> = ({ title, id, price }) => {
    return (
        <CardContainer>
            <Title>{title}</Title>
            <Id>ID: {id}</Id>
            <Price>Price: {price}</Price>
        </CardContainer>
    );
};
export default ProductCard;