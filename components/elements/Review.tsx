import Image from 'next/image';
import StarRatings from 'react-star-ratings';
import { imageLoader, shimmer, toBase64 } from '@/lib/utils';
import { ClientReviewItemModel } from '@/models';
import { Locale } from '@/types';
import { useLayoutEffect, useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export interface ReviewProps {
  locale: Locale;
  review: ClientReviewItemModel;
}
const Review = ({
  locale = 'en',
  review: { name, meta, rate, avatar, projectName, profileUrl, originLocale, feedbackText },
}: ReviewProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [currentLocale, setCurrentLocale] = useState(locale);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => setCurrentLocale(locale), [locale]);

  const checkTextOverflow = () => {
    if (textRef.current) {
      const element = textRef.current;
      const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
      const maxHeight = lineHeight * 3 + 12;
      setShowMoreButton(element.scrollHeight > maxHeight);
    }
  };

  useLayoutEffect(() => {
    checkTextOverflow();
  }, []);

  return (
    <div className="review card mt-11 p-4 md:p-5">
      <div className="review-image fiximage relative -mt-14 mb-4 inline-block h-20 w-20 overflow-hidden rounded-full border-4 border-primary md:-mt-16">
        <Image
          loader={imageLoader}
          unoptimized={true}
          src={avatar ?? `https://ui-avatars.com/api/?name=${name['en']}&background=random`}
          alt="user image"
          height={80}
          width={80}
          layout="responsive"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(80, 80))}`}
        />
      </div>
      <h5 className="mb-0">{name[currentLocale]}</h5>
      <p className="mb-2 text-body">
        {profileUrl ? (
          <Link href={profileUrl} target="_blank">
            <small>{meta}</small>
          </Link>
        ) : (
          <small>{meta}</small>
        )}
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
      <h5>{projectName[currentLocale]}</h5>
      <p ref={textRef} className={`overflow-hidden ${isExpanded ? '' : `line-clamp-3`}`}>
        {feedbackText[currentLocale]}
      </p>
      <div className="flex w-full justify-between">
        {showMoreButton && (
          <a
            className="text-primary mt-2 hover:underline focus:outline-none"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <small>{isExpanded ? 'Hide' : 'Read more'}</small>
          </a>
        )}
        {originLocale !== locale && (
          <a
            className=" mt-2 hover:underline focus:outline-none underline"
            onClick={() =>
              setCurrentLocale(originLocale !== currentLocale ? originLocale : locale)
            }
          >
            <small>
              {originLocale !== currentLocale
                ? 'translated - show original'
                : 'original - show translation'}
            </small>
          </a>
        )}
      </div>
    </div>
  );
};

export default Review;
