interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

interface Localized {
  title: string;
  description: string;
}

interface SnippetOption {
  url: string;
  width: number;
  height: number;
}

interface Thumbnails {
  default: SnippetOption;
  medium: SnippetOption;
  height: SnippetOption;
  standart: SnippetOption;
  maxres: SnippetOption;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: Array<string>;
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultAudioLanguage: string;
}

interface Item {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}

export interface ResponseYouTubeItem {
  [index: number]: Item;
}
