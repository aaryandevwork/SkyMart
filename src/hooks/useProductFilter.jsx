import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router";

const useProductFilter = (products) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFromURL = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL);
  const [sortBy, setSortBy] = useState("Featured");
  const [search, setSearch] = useState("");

  //if category changed by option then it happens
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({
        category,
      });
    }
  };

  useEffect(() => {
    setSelectedCategory(categoryFromURL || "All");
  }, [categoryFromURL]);


  // filter logics here
  const getFilteredData = () => {
    let filteredData = [...products];

    if (search.trim()) {
      filteredData = filteredData.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase());
      });
    }

    if (selectedCategory !== "All") {
      filteredData = filteredData.filter((product) => {
        return product.category === selectedCategory;
      });
    }

    switch (sortBy) {
      case "Price: Low to High":
        filteredData.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        filteredData.sort((a, b) => b.price - a.price);
        break;
      case "Highest Rated":
        filteredData.sort((a, b) => b.rating - a.rating);
        break;
      case "Newest":
        filteredData.sort((a, b) => b.id - a.id);
        break;
      default:
        filteredData.sort((a, b) => b.featured - a.featured);
        break;
    }

    return filteredData;
  };

  const finalProducts = useMemo(() => {
    return getFilteredData();
  }, [products, search, selectedCategory, sortBy]);

  return {search, setSearch , sortBy ,setSortBy ,selectedCategory , handleCategoryChange ,finalProducts };
};

export default useProductFilter;
