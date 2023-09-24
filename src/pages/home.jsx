import {useState , useEffect} from "react"
import {Posts} from "../posts"
import axios from "axios"
import Navbar from "../components/navbar";
import {BookFilter} from "../components/functionalities/BookFilter"
import InfiniteScroll from "react-infinite-scroll-component";
import Cart from "../pages/Cart";
import { LoadingPosts } from "../components/loadingposts";
function Home() {
  const [data, setData] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
  };

  const [filteredBooks, setFilteredBooks] = useState(data);
  const [authors, setAuthors] = useState([]);
  const [titles, setTitles] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [filterData, setFilterData] = useState({
    authors: [],
    titles: [],
    subjects: [],
  });

  async function fetchData(limit, offset) {
    try {
      const res = await axios.get(
        `https://drab-jade-lamb-wig.cyclic.cloud/api/getBooks?limit=${limit}&offset=${offset}`
      );
      if (res.data) {
        setData([...data, ...res.data]);
        const filteredData = [...data, ...res.data].filter((book) => {
          return (
            (filterData.authors.length === 0 ||
              filterData.authors.includes(book.author)) &&
            (filterData.titles.length === 0 ||
              filterData.titles.includes(book.title)) &&
            (filterData.subjects.length === 0 ||
              filterData.subjects.includes(book.subject))
          );
        });

        // Limit unique authors, titles, and subjects to a maximum of 5
        const uniqueAuthors = [...new Set(filteredData.map((book) => book.author))].slice(0, 5);
        const uniqueTitles = [...new Set(filteredData.map((book) => book.title))].slice(0, 5);
        const uniqueSubjects = [...new Set(filteredData.map((book) => book.subject))].slice(0, 5);

        setFilteredBooks(filteredData);
        setAuthors(uniqueAuthors);
        setTitles(uniqueTitles);
        setSubjects(uniqueSubjects);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData(10 , 0);
  },[]);

  const handleFilter = (filterData) => {
    setFilterData(filterData)
    const filtered = data.filter((book) => {
      return (
        (filterData.authors.length === 0 ||
          filterData.authors.includes(book.author)) &&
        (filterData.titles.length === 0 ||
          filterData.titles.includes(book.title)) &&
        (filterData.subjects.length === 0 ||
          filterData.subjects.includes(book.subject))
      );
    });
    setFilteredBooks(filtered);
  };

  const fetchMoreData = () => {
    fetchData(10, filteredBooks.length);
  };
  console.log(filteredBooks)
  return (
    <div className="bg-gradient-to-r from-violet-600 to-indigo-600">
      {/* <LoadingPosts /> */}
      <Navbar isCartOpen={isCartOpen} toggleCart={toggleCart} />
      <Cart isCartOpen={isCartOpen} toggleCart={toggleCart} />
      <BookFilter
        authors={authors}
        titles={titles}
        subjects={subjects}
        onFilter={handleFilter}
      />
      <InfiniteScroll
        dataLength={filteredBooks.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<LoadingPosts />}
      >
        <Posts images={filteredBooks} />
      </InfiniteScroll>
    </div>
  );
}

export default Home;
