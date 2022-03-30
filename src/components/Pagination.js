import { useContext } from 'react'
import { UserContext } from '../context/userContext'

export default function Pagination() {

    const { numberOfPages, pageNumber, handlePageChange } = useContext(UserContext)

    let pages = []
    const maxPages = numberOfPages > 10 ? 10 : numberOfPages
    for (let i = 0; i < maxPages; i++) {
      pages.push(i + 1)
    }

    return (
      <>
        <ul className='pagination'>
          {pages.map((page, i) => (
            <li key={i}>
              <button
                onClick={handlePageChange}
                className={`${pageNumber + 1 === page ? 'active' : ''}`}
                key={`page-${page}`}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </>
    )
  }