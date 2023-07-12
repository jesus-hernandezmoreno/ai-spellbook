type Creator = {
  _id?: string;
  email: string;
  username: string;
  image: string;
  __v?: number;
};
export type Post = {
  _id?: string;
  creator?: Creator;
  prompt?: string;
  tag?: string;
  __v?: number;
};
