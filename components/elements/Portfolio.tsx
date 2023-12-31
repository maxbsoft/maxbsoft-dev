import FsLightbox from 'fslightbox-react';
import { Portal } from 'react-portal';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { RiExternalLinkLine, RiImageLine, RiVideoLine } from 'react-icons/ri';
import { imageLoader, shimmer, toBase64 } from '@/lib/utils';
import { PortfolioItemModel } from '@/models';
import React from 'react';

export interface PortfolioProps {
  portfolio: PortfolioItemModel;
}
const Portfolio = React.memo(
  ({
    portfolio: { title, subtitle, coverimage, imagegallery, videogallery, url },
  }: PortfolioProps) => {
    const [videoGalleryOpen, setVideoGalleryOpen] = useState<boolean>(false);
    const [imageGalleryOpen, setImageGalleryOpen] = useState<boolean>(false);
    return (
      <div className="portfolio card hovercard group p-4 md:p-5">
        <div className="portfolio-top relative overflow-hidden">
          <div className="portfolio-image fiximage blur-0 filter transition-all duration-500 group-hover:blur">
            <Image
              loader={imageLoader}
              unoptimized={true}
              src={coverimage}
              height={384}
              width={550}
              alt={title}
              layout="responsive"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(550, 384))}`}
            />
          </div>
          <div className="portfolio-hovercontent absolute left-0 top-0 z-20 flex h-full w-full -translate-x-full transform items-center justify-center gap-4 overflow-hidden bg-grey bg-opacity-80 transition-all duration-500 group-hover:translate-x-0">
            {Array.isArray(imagegallery) ? (
              <button
                className="inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey"
                onClick={() => setImageGalleryOpen(true)}
              >
                <RiImageLine />
              </button>
            ) : null}
            {Array.isArray(videogallery) ? (
              <button
                className="inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey"
                onClick={() => setVideoGalleryOpen(true)}
              >
                <RiVideoLine />
              </button>
            ) : null}
            {url ? (
              <Link href={url} legacyBehavior>
                <a
                  target="_blank"
                  className="inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey"
                >
                  <RiExternalLinkLine />
                </a>
              </Link>
            ) : null}
          </div>
        </div>
        <div className="portfolio-content mt-4">
          <h5 className="mb-0">{title}</h5>
          <p>{subtitle}</p>
        </div>

        {Array.isArray(imagegallery) && imageGalleryOpen && (
          <Portal>
            <FsLightbox
              openOnMount={true}
              toggler={imageGalleryOpen}
              onClose={() => setImageGalleryOpen(false)}
              sources={imagegallery.map((item) =>
                item.indexOf('.mp4') < 0 ? (
                  item
                ) : (
                  <video
                    key={item}
                    src={item}
                    autoPlay
                    loop
                    controls={false}
                    playsInline={true}
                    muted
                    style={{
                      minWidth: `${window.innerWidth}px`,
                      minHeight: `${window.innerHeight}px`,
                    }}
                  />
                ),
              )}
            />
          </Portal>
        )}
        {Array.isArray(videogallery) && videoGalleryOpen && (
          <Portal>
            <FsLightbox
              onClose={() => setImageGalleryOpen(false)}
              openOnMount={true}
              toggler={videoGalleryOpen}
              sources={videogallery}
            />
          </Portal>
        )}
      </div>
    );
  },
);

Portfolio.displayName = 'Portfolio';

export default Portfolio;
