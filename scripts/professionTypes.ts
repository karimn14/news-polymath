export interface ProfessionKnowledge {
  name: string;
  category: string;
  morningRoutine: string;
  firstDocumentOrTool: string;
  criticalMetrics: string;
  codeWordsAndTerms: string[];
  failureModes: string;
  highStakesDilemma: string;
  hardwareEngineerParallels: string[];
  topicFocuses: {
    [dayIndex: number]: {
      headline: string;
      leadContext: string;
      section1Title: string;
      section1Focus: string;
      section2Title: string;
      section2Focus: string;
      section3Title: string;
      section3Focus: string;
      section4Title: string;
      section4Focus: string;
      takeaways: string[];
      reflectiveQuestion: string;
    };
  };
}
