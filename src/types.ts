export interface TopicInfo {
  id: number;
  professionId: number;
  professionName: string;
  professionCategory: string;
  dayInProfession: number;
  topicTitle: string;
}

export interface ArticleSection {
  title: string;
  content: string;
}

export interface ArticleData {
  topicId: number;
  professionLabel: string;
  headline: string;
  leadParagraph: string;
  sections: ArticleSection[];
  takeaways: string[];
  reflectiveQuestion: string;
  rawMarkdown?: string;
  readingTimeMinutes?: number;
  generatedAt?: string;
}

export interface GenerateArticleResponse {
  success: boolean;
  article?: ArticleData;
  error?: string;
}

export interface ReadingListItem {
  topicId: number;
  headline: string;
  professionLabel: string;
  savedAt: string;
}

