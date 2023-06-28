export type brand = {
  image: string | any;
  alt: string;
};

export type title = {
  title: string;
};

export type feature = title & {
  content: string;
};

export type article = {
  img: string | any;
  date: string;
  content: string;
};
