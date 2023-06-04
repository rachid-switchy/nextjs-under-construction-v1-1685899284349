/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import SEO from '../components/seo'
import Layout from '../components/layout'
import injected from '../injected.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiamondTurnRight, faCopyright, faHeart } from '@fortawesome/free-solid-svg-icons'

export default function IndexPage() {
  return (
    <Layout>
      <SEO
        title={injected.title}
        author={injected.author.name}
        meta={[{ keywords: injected.keywords }]}
        url={injected.manifest.url}
        description={injected.description}
      />
      <div className='flex flex-wrap h-full w-full'>
        <div className='relative flex flex-wrap items-center justify-center overflow-hidden lg:w-8/12'>
          <video
            className='object-cover absolute z-10 h-full w-full max-w-none'
            autoPlay
            muted
            loop
          >
            <source src='video.mp4'></source>
            <source src='video.mp4'></source>
            <source src='video.webm'></source>
          </video>
          <div className='bg-black/70 relative z-30 h-full flex justify-between px-12 pt-12 pb-5 w-full flex-col text-white'>
            <div className='pb-10'>
              <Image width='200' height='200' src='logo.svg' alt={injected.description} />
            </div>
            <div className='pb-20 pt-10'>
              <p className='pb-5 text-3xl font-light'>{injected.headline.title}</p>
              <h3 className='text-9xl font-bold'>
                <span className='words-wrapper'>
                  <b className='is-visible'>{injected.headline.chips[0]}</b>
                </span>
              </h3>
              <p className='pt-10 text-3xl font-light'>{injected.headline.subTitle}</p>
              <p className='pt-10 font-light'>{injected.headline.description}</p>
              <div className='pt-20 font-semibold'>
                <a
                  href={`tel:${injected.tel.tel}`}
                  className='transition-all mb-10 rounded-md p-5 bg-[#76c0ab] text-[#152E27] hover:bg-transparent hover:text-white hover:border-2'
                >
                  <span>{injected.headline.caption}</span>
                </a>
              </div>
            </div>
            <div className='flex flex-row w-full justify-between'>
              <div>
                <span>{injected.countdownTitle}</span>
              </div>
              <div className='flex flex-row'>
                <div className='uppercase opacity-60'>
                  made with
                  <FontAwesomeIcon className='px-2' icon={faHeart} />
                  by
                </div>
                <a
                  href={injected.author.url}
                  className='transition-all uppercase hover:text-[#76c0ab] pl-2'
                  target='_blank'
                  rel='noreferrer'
                >
                  {injected.author.name}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full bg-[#76c0ab] lg:px-24 lg:py-20 lg:w-4/12 sm:px-4 sm:py-4 text-white'>
          <h1 className='mb-12 text-sm font-bold lg:text-2xl'>{injected.asideContent.title}</h1>
          {injected.asideContent.text.map((t, index) => (
            <p key={index} className='mb-10 text-lg font-extralight'>
              {t}
            </p>
          ))}
          <div className='pb-12 pt-3 font-bold'>
            <a
              href={`mailto:${injected.mail.mail}`}
              className='transition-all mb-10 rounded-md border-2 p-5 text-lg hover:bg-transparent hover:text-[#152E27] hover:border-0'
            >
              <span>{injected.mail.caption}</span>
            </a>
          </div>
          <div className='pb-20 font-bold'>
            <a
              href={`tel:${injected.tel.tel}`}
              className='transition-all mb-10 rounded-md border-2 p-5 text-lg hover:bg-transparent hover:text-[#152E27] hover:border-0'
            >
              <span>{injected.tel.caption}</span>
            </a>
          </div>
          <p className='mb-1 text-sm font-extralight'>
            <a
              href={injected.address.url}
              className='transition-all uppercase font-medium hover:text-[#152E27]'
              target='_blank'
              rel='noreferrer'
            >
              {injected.address.address}
            </a>
            <FontAwesomeIcon className='px-2' icon={faDiamondTurnRight} />
          </p>
          <div className='mb-1 text-sm font-extralight inline-flex uppercase'>
            <div className='uppercase font-medium'>
              <a
                href={injected.manifest.url}
                target='_blank'
                className='transition-all hover:text-[#152E27]'
                rel='noreferrer'
              >
                {injected.manifest.projectShortName}
              </a>
              <FontAwesomeIcon icon={faCopyright} className='px-2' />
            </div>
            <div className='opacity-60 ml-2'>{injected.manifest.copyright}</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
