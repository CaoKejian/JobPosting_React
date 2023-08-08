import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Logining: FC<IProps> = () => {
  return (
    <div>123123
      {/* <NavLink
        to={''}
      >
        haha
      </NavLink> */}
    </div>
  )
}

export default memo(Logining)