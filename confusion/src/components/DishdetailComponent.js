import React from "react";
import {
  Container,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

import { Link } from "react-router-dom";

function RenderDish({ dish }) {
  
  if (dish != null)
    return (
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
    );
  else return <div></div>;
}

function RenderComments({ comments }) {
  if(comments!=null)
  return (
    <div className="col-12 col-md-5 m-1">
    <h4> Comments</h4>
    <ul className="list-unstyled">
      {comments.map((comment) => {
        return(
          <li key={comment.id} >
            <p>{comment.comment}</p>
            <p>-- {comment.author}{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(comment.date)))}</p>
        </li>
        );
      })}
      </ul>
      </div>
  );
     
    }

const DishDetail = (props) => {
  console.log("dishes props");
  console.log(props.dish);

  return (
    <div class="container">
    <div className="row">
        <Breadcrumb>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
        </div>                
    </div>
    <div className="row">
        <div className="">
            <RenderDish dish={props.dish} />
        </div>
        <div>
            <RenderComments comments={props.comments} />
        </div>
    </div>
    </div>
);
};

export default DishDetail;
