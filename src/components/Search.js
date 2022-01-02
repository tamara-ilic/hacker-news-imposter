export default function Search(props) {
    const {query, setQuery, fetchNews} = props
    const handleSearch = (e) => {
        e.preventDefault()
        setQuery((query) => e.target.value)
        fetchNews()
    }

    return (
        <form onSubmit={handleSearch}>
            <input
                type='text'
                placeholder='Search stories by title, url or author'>
            </input>
        </form>
    )
}