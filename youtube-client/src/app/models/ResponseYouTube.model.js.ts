import { ResponseYouTubeItem } from './ResponeYouTubeItem.model';

export interface ResponseYouTube {
  kind: string;
  etag: string;
  pageInfo: object;
  items: ResponseYouTubeItem;
}
