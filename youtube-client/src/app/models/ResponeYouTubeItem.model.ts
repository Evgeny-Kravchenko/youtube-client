interface IStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

interface ILocalized {
  title: string;
  description: string;
}

interface ISnippetOption {
  url: string;
  width: number;
  height: number;
}

interface IThumbnails {
  default: ISnippetOption;
  medium: ISnippetOption;
  height: ISnippetOption;
  standart: ISnippetOption;
  maxres: ISnippetOption;
}

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  tags: Array<string>;
  categoryId: string;
  liveBroadcastContent: string;
  localized: ILocalized;
  defaultAudioLanguage: string;
}

export interface IItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
  statistics: IStatistics;
}
