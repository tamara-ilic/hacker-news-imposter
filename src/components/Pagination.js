export default function Pagination() {

    let pages = []
    const maxPages = numberOfPages > 10 ? 10 : numberOfPages
    for (let i = 0; i < maxPages; i++) {
      pages.push(i + 1)
    }

    return (
      <>
        <ul className='pagination'>
          {pages.map((page) => (
            <li>
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