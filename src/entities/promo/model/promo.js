export const promos = [
  {
    id: 1,
    title: "Скидка 30%",
    label: "Брискет ",
    image: new URL(
      "@/app/assets/images/promoImages/brisket.jpg",
      import.meta.url
    ).href,
    size: "large",
  },
  {
    id: 2,
    title: "Счастливый час с 15:00",
    label: "Колбаса ",
    image: new URL(
      "@/app/assets/images/promoImages/sausage.jpg",
      import.meta.url
    ).href,
    size: "small",
  },
  {
    id: 3,
    title: "2+1 в день рождения",
    label: "Лучшие закуски",
    image: new URL(
      "@/app/assets/images/promoImages/snacks.jpg",
      import.meta.url
    ).href,
    size: "small",
  },
  {
    id: 4,
    title: "Новая вкус",
    label: "Новая продукция",
    image: new URL(
      "@/app/assets/images/promoImages/new_product.jpg",
      import.meta.url
    ).href,
    size: "small",
  },
  {
    id: 5,
    title: "О нас",
    label: "История компании ",
    image: new URL("@/app/assets/images/promoImages/about.jpg", import.meta.url)
      .href,
    size: "small",
  },
];
