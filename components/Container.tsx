
import React from 'react'
import { Orb, OrbContainer } from './Orb'

type Props = {children:any}

export default function Container({children}: Props) {
  return (
    <div className=" max-w-2xl px-4   sm:px-6 xl:max-w-3xl xl:px-0 flex flex-col gap-10 sm:gap-14 mx-auto">
    {/* <div className=" max-w-2xl px-4 mx-auto sm:px-6 md:max-w-3xl xl:max-w-4xl xl:px-0 flex flex-col gap-10 sm:gap-14"> */}

    <>

    <OrbContainer >
				<Orb className="h-[25rem] w-[25rem] lg:top-10 top-20 right-0 bg-purple-700/30 dark:bg-purple-700/30" />
				<Orb className="  h-[25rem] w-[25rem] -left-20  top-72 bg-fuchsia-400/30 dark:bg-fuchsia-600/20" />
			</OrbContainer>
        {children}

        <OrbContainer>
          <Orb className="   h-72 w-[20rem] lg:-top-32  md:-top-24 top-0 right-0 bg-cyan-700/30 dark:bg-cyan-700/20" />
          </OrbContainer>
    </>
    </div>
  )
}