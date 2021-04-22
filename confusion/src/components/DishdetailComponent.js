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
} from "reactstrap";

  function RenderDish({dish}) {
    if (dish != null)
      return (
        <Container>
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-12 col-sm-5 m-1">
              <h4> Comments</h4>

             
              < RenderComment comments={dish.comments} />
            </div>
          </div>
        </Container>
      );
    else return <div></div>;
  }

  function RenderComment({comments}) {
    // console.log(comments.map((comment) => comment.comment));
    return (
      <ul>
        {comments.map((comment) => (
          <div>
            <p> {comment.comment}</p>
            <p>
              {" "}
             {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
            </p>
          </div>
        ))}
      </ul>
    );
  }

  const DishDetail=(props)=> {
    return <div className ="container">
    <div><RenderDish dish ={props.dish} /></div>
    </div>
  }


export default DishDetail;
