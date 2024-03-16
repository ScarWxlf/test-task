import React from "react";
import "./style.scss";
import ReviewCard from "../ReviewCard";
import Avatar from "../../images/Avatar.png";
import pagination from "../../images/hotProdImg/Pagination (2).png";

const reviews = [{
  name: "Жора Ремінгтон",
  avatar: Avatar,
  stars: 4,
  text:"Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...",
},
{
  name: "Жора Ремінгтон",
  avatar: Avatar,
  stars: 4,
  text:"Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...",
},
{
  name: "Жора Ремінгтон",
  avatar: Avatar,
  stars: 4,
  text:"Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...",
},
{
  name: "Жора Ремінгтон",
  avatar: Avatar,
  stars: 4,
  text:"Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...",
}
]

function ReviewsBlock() {
  return (
    <div className="reviews-block">
      <div className="reviews-header">
        <h1>Відгуки наших клієнтів</h1>
        <img src={pagination} alt="pagination" />
      </div>
      <div className="reviews">
        {reviews.map((review, index) => {
          return(
            <ReviewCard
              key={index}
              name={review.name}
              avatar={review.avatar}
              stars={review.stars}
              text={review.text}
            />
          )
        })}
      </div>
    </div>
  );
}

export default ReviewsBlock;
