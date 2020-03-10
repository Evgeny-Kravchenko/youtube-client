interface IImage {
  url: string;
  width: number;
  height: number;
}

interface IThumbnails {
  default: IImage;
  medium: IImage;
  high: IImage;
}

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
}

interface IId {
  kind: string;
  videoId: string;
}

interface IItemSearch {
  kind: string;
  etag: string;
  id: IId;
  snippet: ISnippet;
}

interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface IYouTubeResponseSearch {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: IPageInfo;
  items: IItemSearch[];
}
