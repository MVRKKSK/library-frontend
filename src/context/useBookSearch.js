import { useEffect, useState } from 'react';

export default function useBookSearch(query, pageNumber, jsonData) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [books, setBooks] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setBooks([]);
    }, [query]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        const startIndex = (pageNumber - 1) * 10;
        const endIndex = startIndex + 10;
        const filteredData = jsonData.filter((book) =>
            book.title.toLowerCase().includes(query.toLowerCase())
        );
        const slicedData = filteredData.slice(startIndex, endIndex);

        setBooks((prevBooks) => {
            return [...new Set([...prevBooks, ...slicedData])];
        });
        setHasMore(slicedData.length > 0);
        setLoading(false);
    }, [query, pageNumber, jsonData]);

    return { loading, error, books, hasMore };
}