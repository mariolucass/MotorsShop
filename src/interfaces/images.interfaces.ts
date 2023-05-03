export interface iImage {
  id: string;
  name: string;
  size: number;
  url: string;
  key: string;
}

export interface iListImage {
  image: iImage;
}
