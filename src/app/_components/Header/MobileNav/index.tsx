import Link from 'next/link'
import React from 'react'
import { Gutter } from '../../Gutter'
import { Header } from '../../../../payload/payload-types'

import classes from './index.module.scss'

import Image from 'next/image'
import { HeaderNav } from '../Nav'

const MobileNav= ({header}: {header: Header}) => {
  return (
     <h3>mobilenav</h3>
  )
}

export default MobileNav