export const getPath = (path) => {
  let currentPage = null;
  switch (path) {
    case "/dashboard":
      currentPage = "Dashboard";
      break;
    case "/orders":
      currentPage = "All orders";
      break;
    case "/products":
      currentPage = "All products";
      break;
    case "/customers":
      currentPage = "All customers";
      break;
    case "/suppliers":
      currentPage = "All suppliers";
      break;
    default:
      currentPage = "null";
      break;
  }

  return currentPage;
};
