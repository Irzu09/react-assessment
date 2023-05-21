export const addSearchHistory = (search) => {
    return {
      type: 'ADD_SEARCH_HISTORY',
      payload: search,
    };
  };