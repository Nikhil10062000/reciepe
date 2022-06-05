import React from "react";
import { Card , Button} from "react-bootstrap";
const ImageC = (props) => {
  console.log(props.imaged);
  return (
    <>
      <Card className="colo text-white mt-4 mb-4 ">
        <Card.Img src={props.imaged.strMealThumb} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{props.imaged.strMeal}</Card.Title>
        </Card.ImgOverlay>
        <ul className="text-black">
          <li>
            <Card.Text className="text-black">
              {props.imaged.strIngredient1}
            </Card.Text>
          </li>
          <li>
            <Card.Text className="text-black">
              {props.imaged.strIngredient2}
            </Card.Text>
          </li>

          <li>
            <Card.Text className="text-black">
              {props.imaged.strIngredient3}
            </Card.Text>
          </li>
          <li>
            <Card.Text className="text-black">
              {props.imaged.strIngredient4}
            </Card.Text>
          </li>
          <li>
            <Card.Text className="text-black">
              {props.imaged.strIngredient5}
            </Card.Text>
          </li>
          <li>
            <Card.Text className="text-black">
              {props.imaged.strIngredient6}
            </Card.Text>
          </li>
          <li>
            <Card.Text className="text-black">
              {props.imaged.strIngredient7}
            </Card.Text>
          </li>
          <li>
            <Card.Text className="text-black">
              {props.imaged.strIngredient8}
            </Card.Text>
          </li>
          <li>
            <Card.Text className="text-black">
              {props.imaged.strIngredient9}
            </Card.Text>
          </li>
          <li>
            <Card.Text className="text-black">
              {props.imaged.strIngredient10}
            </Card.Text>
          </li>
          <li>
            <Card.Text className="text-black">
              {props.imaged.strIngredient11}
            </Card.Text>
          </li>
          <li>
            <Card.Text className="text-black">
              {props.imaged.strIngredient12}
            </Card.Text>
          </li>
          <li>
            <Card.Text className="text-black">
              {props.imaged.strIngredient13}
            </Card.Text>
          </li>
          <li>
            {" "}
            <Card.Text className="text-black">
              {props.imaged.strIngredient14}
            </Card.Text>
          </li>
          <li>
            {" "}
            <Card.Text className="text-black">
              {props.imaged.strIngredient15}
            </Card.Text>
          </li>
        </ul>
        <Card.Text className="text-black" >{props.imaged.strInstructions}</Card.Text>
        <Button variant="link">{props.imaged.strYoutube}</Button>
      </Card>
    </>
  );
};

export default ImageC;
