import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
      <div className="hero-map" />

      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        <Image
          src='/camp.svg'
          alt='camp'
          width={50}
          height={50}
          className='abolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
        />
        <h1 className='bold-52 lg:bold-88'>Angola Camp Area</h1>
        <p className='regular-16 mt-6 text-gray-30 xl:max-w-[450px]'>
          Queremos estar contigo em cada uma das tuas jornadas na procura da satisfação de presenciar a natureza. Podemos ajudar nas tuas aventuras, tudo em um único app.
        </p>

        <div className='my-11 flex flex-wrap gap-5'>
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image
                src='/star.svg'
                key={index}
                alt='star'
                width={24}
                height={24}
              />
            ))}
          </div>
          <p className='bold-16 lg:bold-20 text-blue-70'>198 Mil</p>
          <span className='regular-16 lg:regular-20 ml-1 '>Críticas Excelentes</span>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
          type='button'
          title='Baixar'
            variant='btn_green'
          />
          <Button
          type='button'
          title='O que fazemos?'
          icon='/play.svg'
          variant='btn_white_text'
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

          <div className="flex flex-col">
            <div className='flexBetween'>
                <p className='regular-16 text-gray-20'>Localização</p>
                  <Image
                    src='/close.svg'
                    alt='close'
                    width={24}
                    height={24}
                  />
              </div>
                <p className='bold-20 text-white'>Serra da Leba</p>
          </div>

            <div className="flexBetween">
              <div className="flex flex-col">
                <p className='regular-16 block text-gray-20'>Distância</p>
                <p className='bold-20 text-white'>50,3 Km</p>
              </div>
              <div className="flex flex-col">
                <p className='regular-16 block text-gray-20'>Elevação</p>
                <p className='bold-20 text-white'>1,81 Km</p>
              </div>
            </div>

          </div>
        </div>

    </section>
  )
}

export default Hero
