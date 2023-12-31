import React from 'react';
import {
  RiDribbbleFill,
  RiFacebookFill,
  RiGithubFill,
  RiStackOverflowFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from 'react-icons/ri';
import { SocialAddressMapModel } from '@/models';

export interface SocialIconsProps {
  data: SocialAddressMapModel;
  rounded?: boolean;
}
const SocialIcons = ({ data, rounded }: SocialIconsProps) => {
  if (!data) {
    return null;
  }

  return (
    <ul className="mb-0 inline-flex list-none flex-wrap gap-3 pl-0 sm:gap-4">
      {!!data.github && (
        <li className="inline-block align-middle">
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
              rounded ? 'rounded-full' : 'rounded'
            }`}
          >
            <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
              <RiGithubFill className="inline-block" />
            </span>
            <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
              <RiGithubFill className="inline-block" />
            </span>
          </a>
        </li>
      )}
      {!!data.stackoverflow && (
        <li className="inline-block align-middle">
          <a
            href={data.stackoverflow}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
              rounded ? 'rounded-full' : 'rounded'
            }`}
          >
            <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
              <RiStackOverflowFill className="inline-block" />
            </span>
            <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
              <RiStackOverflowFill className="inline-block" />
            </span>
          </a>
        </li>
      )}
      {!!data.linkedin && (
        <li className="inline-block align-middle">
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
              rounded ? 'rounded-full' : 'rounded'
            }`}
          >
            <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
              <RiLinkedinBoxFill className="inline-block" />
            </span>
            <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
              <RiLinkedinBoxFill className="inline-block" />
            </span>
          </a>
        </li>
      )}
      {!!data.facebook && (
        <li className="inline-block align-middle">
          <a
            href={data.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
              rounded ? 'rounded-full' : 'rounded'
            }`}
          >
            <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
              <RiFacebookFill className="inline-block" />
            </span>
            <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
              <RiFacebookFill className="inline-block" />
            </span>
          </a>
        </li>
      )}
      {!!data.twitter && (
        <li className="inline-block align-middle">
          <a
            href={data.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
              rounded ? 'rounded-full' : 'rounded'
            }`}
          >
            <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
              <RiTwitterFill className="inline-block" />
            </span>
            <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
              <RiTwitterFill className="inline-block" />
            </span>
          </a>
        </li>
      )}
      {!!data.dribbble && (
        <li className="inline-block align-middle">
          <a
            href={data.dribbble}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
              rounded ? 'rounded-full' : 'rounded'
            }`}
          >
            <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
              <RiDribbbleFill className="inline-block" />
            </span>
            <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
              <RiDribbbleFill className="inline-block" />
            </span>
          </a>
        </li>
      )}
    </ul>
  );
};

export default SocialIcons;
