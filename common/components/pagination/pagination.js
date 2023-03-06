import styles from './pagination-style'
import { ttw } from "@utilts"

import { useLayoutEffect, useState } from 'react'

import Link from 'next/link'
import Chevron from './icons/chevron'


export function Pagination ({itemSize, pageSize, currentPage, onPageChange}) {

  const pageCount = Math.ceil(itemSize / pageSize)
  if (pageCount <= 1) return null

  const pages = Array.from({length: pageCount}, (_, i) => i+1)
  const [rendered, setRendered] = useState([])

  useLayoutEffect(() => {
    if (currentPage === pages[0]) {
      setRendered(pages.slice(0, 3))
      return 
    }
    if (currentPage+2 >= pages[pages.length-1]) {
      setRendered(pages.slice(-3))
      return 
    }
    setRendered([currentPage, currentPage+1])
  }, [currentPage])


  function handlePrev () {
    onPageChange(value => value-1)
  }
  function handleNext () {
    onPageChange(value => value+1)
  }
  function handleN (value) {
    onPageChange(value)
  }


  function getBtnClassName (index) {
    return ttw([
      styles.Pagination.Button.common,
      index === currentPage 
        ? styles.Pagination.Button.state.active
        : styles.Pagination.Button.state.normal
    ])
  }

  return (
    <>
    <h1>{pages}</h1>
    <h1>{currentPage}</h1>
    <div className={ttw(styles.Pagination.Wrapper)}>
      <div className={ttw(styles.Pagination.Group)}>

        {(currentPage > 1 && pages.length > 3) && (
          <Link href="#hhhh" className={getBtnClassName('')} onClick={handlePrev}>
            <Chevron direction="left"/>
          </Link>
        )}

        {rendered.map((value, i) => (
          <Link href="#hhhh" className={getBtnClassName(value)} key={i} onClick={() => handleN(value)}>
            {value}
          </Link>
        ))}

        {currentPage+2 < pages[pages.length-1] && (
          <Link href="#hhhh" className={getBtnClassName('')} onClick={handleNext}>
            <Chevron direction="right"/>
          </Link>
        )}

      </div>
    </div>
    </>
  )
}