import Image from 'next/image';
import StarRatings from 'react-star-ratings';
import { imageLoader, shimmer, toBase64 } from '@/lib/utils';
import { ClientReviewItemModel } from '@/models';
import { Locale } from '@/types';
import { useState } from 'react';

export interface ReviewProps {
  locale: Locale;
  review: ClientReviewItemModel;
}
const Review = ({
  locale = 'en',
  review: { nameLatin, meta, rate, avatar, projectName, feedbackText },
}: ReviewProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="review card mt-11 p-4 md:p-5">
      <div className="review-image fiximage relative -mt-14 mb-4 inline-block h-20 w-20 overflow-hidden rounded-full border-4 border-primary md:-mt-16">
        <Image
          loader={imageLoader}
          unoptimized={true}
          src={avatar ?? `https://ui-avatars.com/api/?name=${nameLatin}`}
          alt="user image"
          height={80}
          width={80}
          layout="responsive"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(80, 80))}`}
        />
      </div>
      <h5 className="mb-0">{nameLatin}</h5>
      <p className="mb-2 text-body">
        <small>{meta}</small>
      </p>
      <div className="review-stars mb-3">
        <StarRatings
          rating={Number(rate / 10) * 5}
          starRatedColor="#FFD233"
          numberOfStars={5}
          name="rating"
          starSpacing="2px"
          starDimension="18px"
        />
      </div>
      <h5>{projectName[locale]}</h5>
      <p className={`overflow-hidden ${isExpanded ? '' : 'line-clamp-4'}`}>
        {feedbackText[locale]}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-primary mt-2 hover:underline focus:outline-none"
      >
        {isExpanded ? 'Hide' : 'Read more'}
      </button>
    </div>
  );
};

export default Review;
