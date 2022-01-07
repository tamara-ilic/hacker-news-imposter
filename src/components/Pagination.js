// export default function Pagination({ props, onPageChange }) {
//     const storiesPerPage = 20
//     let pages = []
//     const maxPages = props.numberOfPages > 10 ? 10 : props.numberOfPages
//     for (let i = 0; i < maxPages; i++) {
//       pages.push(i + 1)
//     }
//     return (
//       <>
//         <ul className='pagination'>
//           {pages.map((page) => (
//             <li><a onClick={onPageChange} className={`${props.pageNumber + 1 === page ? "active" : ""}`} key={`page-${page}`} >{page}</a></li>
//           ))}
//         </ul>
//       </>
//     )
//   }

// add below to App.js when own component

/*
 *
<Pagination onPageChange={handlePageChange} />
 * 
 */