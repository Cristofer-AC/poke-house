import styled from "styled-components";

export const CategoryCard = styled.div`
    width: 350px;
    height: 350px;
    position: relative;
    margin: auto;
    margin-bottom: 10px;
    color: white;

    img {
        width: 100%;
        height: 100%;
        position: absolute;
    }

    div.cover {
        background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,1));
        width: 100%;
        height: 100%;
        position: absolute;
    }

    div.product_info {
        position: absolute;
        bottom: 10px;
        padding: 0 20px;
    }
`