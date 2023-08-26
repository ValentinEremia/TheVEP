
import React from 'react'

type Props = {children:any}

export default function Container({children}: Props) {
  return (
    <div className=" max-w-2xl px-4 mx-auto sm:px-6 xl:max-w-3xl xl:px-0 flex flex-col gap-10 sm:gap-14">
    {/* <div className=" max-w-2xl px-4 mx-auto sm:px-6 md:max-w-3xl xl:max-w-4xl xl:px-0 flex flex-col gap-10 sm:gap-14"> */}
        {children}
    </div>
  )
}