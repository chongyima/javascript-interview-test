var categories = [
  {
    id: "men",
    displayName: "Men",
    products: [],
    subCategories: [
      {
        id: "underwear",
        displayName: "Underwear",
        products: [],
        subCategories: [
          {
            id: "boxers",
            displayName: "Boxers",
            products: [
              {
                id: "5B5S1CMU",
              },
              {
                id: "4B55CSMU",
              },
            ],
          },
          {
            id: "boxer-briefs",
            displayName: "Boxer Briefs",
            products: [
              {
                id: "3B5S1CMU",
              },
              {
                id: "2B55CSMU",
              },
            ],
          },
          {
            id: "briefs",
            displayName: "Briefs",
            products: [
              {
                id: "1B5S1CMU",
              },
            ],
          },
        ],
      },
      {
        id: "apparel",
        displayName: "Apparel",
        products: [],
        subCategories: [
          {
            id: "t-shirts",
            displayName: "T-Shirts",
            products: [
              {
                id: "5B5S1CMA",
              },
              {
                id: "4B55CSMA",
              },
            ],
          },
          {
            id: "shorts",
            displayName: "Shorts",
            products: [
              {
                id: "3B5S1CMA",
              },
            ],
          },
          {
            id: "sweatshirts",
            displayName: "Sweatshirts",
            products: [
              {
                id: "1B5S1CMA",
              },
              {
                id: "0B55CSMA",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "women",
    displayName: "Women",
    products: [],
    subCategories: [
      {
        id: "underwear",
        displayName: "Underwear",
        products: [],
        subCategories: [
          {
            id: "bikinis",
            displayName: "Bikinis",
            products: [
              {
                id: "5B5S1CWU",
              },
              {
                id: "4B55CSWU",
              },
            ],
          },
          {
            id: "boy-shorts",
            displayName: "Boy Shorts",
            products: [
              {
                id: "3B5S1CWU",
              },
              {
                id: "2B55CSWU",
              },
            ],
          },
          {
            id: "briefs",
            displayName: "Briefs",
            products: [
              {
                id: "1B5S1CWU",
              },
            ],
          },
        ],
      },
      {
        id: "apparel",
        displayName: "Apparel",
        products: [],
        subCategories: [
          {
            id: "t-shirts",
            displayName: "T-Shirts",
            products: [
              {
                id: "5B5S1CWA",
              },
              {
                id: "4B55CSWA",
              },
            ],
          },
          {
            id: "sleepwear",
            displayName: "Sleepwear",
            products: [
              {
                id: "3B5S1CWA",
              },
            ],
          },
          {
            id: "sweatshirts",
            displayName: "Sweatshirts",
            products: [
              {
                id: "1B5S1CWA",
              },
              {
                id: "0B55CSWA",
              },
            ],
          },
        ],
      },
    ],
  },
];
const getBreadCrumb = (productId) => {
  const findProduct = (categoryId, categoryList, currentPath = []) => {
    let routes = [];
    for (const category of categoryList) {
      const newPath = currentPath.concat(category.displayName);
      if (category.id === categoryId) {
        routes.push(newPath);
      }
      if (category.subCategories) {
        const subRoutes = findProduct(
          categoryId,
          category.subCategories,
          newPath
        );
        routes.push(...subRoutes);
      }
    }
    return routes;
  };
  const findProductId = (productId, categories, currentPath = []) => {
    let routes = [];
    for (const category of categories) {
      const newPath = currentPath.concat(category.displayName);
      if (category.products) {
        for (const product of category.products) {
          if (product.id === productId) {
            const productRoutes = findProduct(category.id, categories);
            for (const productRoute of productRoutes) {
              routes.push(newPath.concat(productRoute));
            }
          }
        }
      }
      if (category.subCategories) {
        const subRoutes = findProductId(
          productId,
          category.subCategories,
          newPath
        );
        routes.push(...subRoutes);
      }
    }
    return routes;
  };
  const routes = findProductId(productId, categories).flat();
  if (routes) {
    routes.pop();
    return routes.join("/");
  }
  return "";
};
console.log(getBreadCrumb("0B55CSWA"));
