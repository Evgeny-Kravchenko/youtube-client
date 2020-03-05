import { IItem } from './ResponeYouTubeItem.model';

interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface IResponseYouTubeVideo {
  kind: string;
  etag: string;
  pageInfo: IPageInfo;
  items: Array<IItem>;
}
