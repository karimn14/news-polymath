import { ArticleData, ReadingListItem } from '../types';
import { SEED_ARTICLE_TOPIC_1 } from '../data/seedArticle';

const STORAGE_KEY_LAST_TOPIC = 'polymath_last_topic_id';
const STORAGE_KEY_READ_TOPICS = 'polymath_read_topics';
const STORAGE_KEY_CACHE_PREFIX = 'polymath_article_';
const STORAGE_KEY_READING_LIST = 'polymath_reading_list';

export function getLastTopicId(): number {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_LAST_TOPIC);
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (!isNaN(parsed) && parsed >= 1 && parsed <= 230) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Failed to read last topic id from localStorage', e);
  }
  return 1;
}

export function saveLastTopicId(topicId: number): void {
  try {
    localStorage.setItem(STORAGE_KEY_LAST_TOPIC, topicId.toString());
    markTopicAsRead(topicId);
  } catch (e) {
    console.error('Failed to save last topic id to localStorage', e);
  }
}

export function getReadTopics(): number[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_READ_TOPICS);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Failed to read read topics from localStorage', e);
  }
  return [1];
}

export function markTopicAsRead(topicId: number): void {
  try {
    const current = getReadTopics();
    if (!current.includes(topicId)) {
      current.push(topicId);
      localStorage.setItem(STORAGE_KEY_READ_TOPICS, JSON.stringify(current));
    }
  } catch (e) {
    console.error('Failed to mark topic as read', e);
  }
}

export function getCachedArticle(topicId: number): ArticleData | null {
  // If topic 1 and nothing cached yet, return the pre-seeded seed article
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_CACHE_PREFIX}${topicId}`);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to get cached article', e);
  }

  if (topicId === 1) {
    return SEED_ARTICLE_TOPIC_1;
  }

  return null;
}

export function cacheArticle(article: ArticleData): void {
  try {
    localStorage.setItem(
      `${STORAGE_KEY_CACHE_PREFIX}${article.topicId}`,
      JSON.stringify(article)
    );
    markTopicAsRead(article.topicId);
  } catch (e) {
    console.error('Failed to cache article', e);
  }
}

export function getReadingList(): ReadingListItem[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_READING_LIST);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Failed to read reading list from localStorage', e);
  }
  return [];
}

export function isArticleSaved(topicId: number): boolean {
  const list = getReadingList();
  return list.some((item) => item.topicId === topicId);
}

export function saveArticleToReadingList(article: ArticleData): ReadingListItem[] {
  try {
    const list = getReadingList();
    const existingIndex = list.findIndex((item) => item.topicId === article.topicId);

    const newItem: ReadingListItem = {
      topicId: article.topicId,
      headline: article.headline,
      professionLabel: article.professionLabel,
      savedAt: new Date().toISOString(),
    };

    if (existingIndex >= 0) {
      list[existingIndex] = newItem;
    } else {
      list.unshift(newItem);
    }

    localStorage.setItem(STORAGE_KEY_READING_LIST, JSON.stringify(list));
    return list;
  } catch (e) {
    console.error('Failed to save article to reading list', e);
    return getReadingList();
  }
}

export function removeArticleFromReadingList(topicId: number): ReadingListItem[] {
  try {
    const list = getReadingList().filter((item) => item.topicId !== topicId);
    localStorage.setItem(STORAGE_KEY_READING_LIST, JSON.stringify(list));
    return list;
  } catch (e) {
    console.error('Failed to remove article from reading list', e);
    return getReadingList();
  }
}

export function toggleArticleInReadingList(article: ArticleData): {
  isSaved: boolean;
  list: ReadingListItem[];
} {
  const currentList = getReadingList();
  const exists = currentList.some((item) => item.topicId === article.topicId);
  if (exists) {
    const updated = removeArticleFromReadingList(article.topicId);
    return { isSaved: false, list: updated };
  } else {
    const updated = saveArticleToReadingList(article);
    return { isSaved: true, list: updated };
  }
}

