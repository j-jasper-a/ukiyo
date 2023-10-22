"use client";

import { useState } from "react";
import { reviews } from "../../../DUMMY_DATA";
import Container from "../Layouts/Container";
import Review from "./Review";
import SectionTitle from "../Headers/SectionTitle";
import Section from "../Layouts/Section";
import {
  ArrowLongRightIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/solid";

const ReviewSection = () => {
  const [visibleReviews, setVisibleReviews] = useState([0, 4]);

  const reviewsButtonHandler = () => {
    if (visibleReviews[0] === 0) {
      setVisibleReviews([4, 8]);
    }
    if (visibleReviews[0] === 4) {
      setVisibleReviews([0, 4]);
    }
  };

  return (
    <Section id={"reviews"}>
      <SectionTitle title="Reviews" slogan="Satisfaction & Gratitude" />
      <Container>
        <div className="relative grid grid-cols-2 gap-4 md:grid-cols-4">
          {reviews.slice(...visibleReviews).map((review) => {
            return (
              <Review
                key={review.id}
                id={review.id}
                message={review.message}
                name={review.name}
              />
            );
          })}
        </div>
      </Container>
      <button
        className={`${
          visibleReviews[0] === 0 ? "flex" : "hidden"
        } group mx-auto items-center gap-4 opacity-50 transition duration-300 hover:opacity-100`}
        onClick={reviewsButtonHandler}
      >
        <p className="text-sm uppercase">Read more</p>
        <ArrowLongRightIcon className="w-8 transition duration-300 group-hover:text-brand " />
      </button>
      <button
        className={`${
          visibleReviews[0] === 0 ? "hidden" : "flex"
        } group mx-auto items-center gap-4 opacity-50 transition duration-300 hover:opacity-100`}
        onClick={reviewsButtonHandler}
      >
        <p className="text-sm uppercase">Go back</p>
        <ArrowUturnLeftIcon className="w-8 transition duration-300 group-hover:text-brand" />
      </button>
    </Section>
  );
};

export default ReviewSection;
