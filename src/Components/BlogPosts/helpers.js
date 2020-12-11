export function getFilteredBlogs(data, filters) {
    if (!filters.type) {
      return data;
    }
    return data.filter((item) => item.type === filters.type );
   }
