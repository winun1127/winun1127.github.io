export const publications = [
  {
    id: "publication-2027-design-system-ui-generation-extended",
    title:
      "LLM Agents for Design System-Compliant User Interface Generation: A Comparative Study of Context Engineering and User Prompting Strategies",
    authors: ["SeungEon Cha", "Dongyub Lee", "Sunghyun Jo", "Kyoungwon Seo"],
    venue: "CHI 2027",
    year: 2027,
    type: "Conference",
    status: "Under Review",
    tags: ["AI Agent", "LLM", "UI/UX", "Design System"],
    abstract:
      "Large language model (LLM) agents are increasingly used for user interface (UI) generation, yet enterprise settings require compliance with organizational design systems. However, it remains unclear how design system knowledge might be provided to agents, and how practitioners actually interact with them. Study 1 compares three context engineering strategies—instruction-based, context-based, and registry-based—for design system-compliant UI generation. Results show that the registry-based strategy achieved the highest compliance and visual similarity, while other strategies were less accurate but more cost-efficient. Study 2 identifies three prompting strategy types—Full-spec Starter, Layout-first Builder, and Low-spec Starter—of practitioners by characterizing real-world interactions with a deployed LLM agent-based design system-compliant UI generation, revealing differences in upfront specification and subsequent behavior. Together, these studies offer empirical guidance for selecting context engineering strategies based on desired compliance granularity and for understanding how users interact with LLM agents for UI generation.",
    image:
      "/images/publications/publication-2027-design-system-ui-generation-extended.png",
    relatedProjects: ["hyundai-uiux-agentic-automation"] as string[],
  },
  {
    id: "publication-2027-a11y-auditor-agent",
    title:
      "A11yAuditor: An Agentic Workflow for Focused Reasoning and Precise Context Retrieval in Automated Web Accessibility Auditing",
    authors: ["SeungEon Cha", "Dongyub Lee", "Sunyoung Jang", "Kyoungwon Seo"],
    venue: "CHI 2027",
    year: 2027,
    type: "Conference",
    status: "Under Review",
    tags: ["AI Agent", "LLM", "UI/UX", "Accessibility"],
    abstract:
      "Large language model-based agents are increasingly used for automated web accessibility auditing by invoking existing hard-coded checkers as tools. However, current approaches suffer from two fundamental limitations: (1) a broad task scope requires a single agent to audit multiple accessibility criteria simultaneously, causing reasoning interference; and (2) noisy observations introduced by tool outputs force the agent to reason over large amounts of criterion-irrelevant context, degrading audit performance. To address these limitations, we propose A11yAuditor, a novel agentic workflow consisting of two complementary components: (i) per-criterion audit decomposes accessibility auditing into dedicated criterion-specific agents, transforming broad task scopes into focused reasoning tasks; and (ii) agentic search persists tool outputs in a virtual filesystem and enables each agent to actively retrieve only criterion-relevant evidence, enabling precise context retrieval. Together, these components reduce reasoning interference and context noise during agent execution. We evaluate both A11yAuditor and a representative tool-using agent baseline against real-world accessibility audit reports produced by certified human experts as ground truth. Experimental results show that A11yAuditor significantly improves accessibility audit performance, achieving higher precision, recall, and F1 through focused task scopes and precise context retrieval. Ablation studies reveal that per-criterion audit and agentic search contribute synergistically, while scalability experiments demonstrate that the proposed workflow remains robust as the number of accessibility criteria increases.",
    featured: 2,
    image: "/images/publications/publication-2027-a11y-auditor-agent.png",
    relatedProjects: [
      "snc-a11y-expert-agent",
      "snc-gui-a11y-eval-agent",
    ] as string[],
  },
  {
    id: "publication-2026-design-system-ui-generation",
    title:
      "Design System-Compliant User Interface Generation with LLM Agents: A Comparative Study of Context Engineering Strategies",
    authors: ["SeungEon Cha", "Sunghyun Jo", "Jongho Shin", "Kyoungwon Seo"],
    venue: "CHI 2026",
    year: 2026,
    type: "Conference",
    status: "Completed",
    tags: ["AI Agent", "LLM", "UI/UX", "Design System"],
    url: "https://dl.acm.org/doi/full/10.1145/3772363.3798616",
    abstract:
      "Large language model (LLM) agents are increasingly used for user interface (UI) generation, yet they often fail to apply organization-specific design systems. It remains unclear which context engineering strategy enables dependable compliance. This study compares three context engineering strategies for integrating design systems into LLM agents: instruction-based (embedding complete style guides in prompts), context-based (injecting task-relevant style guides into the context window), and registry-based (assembling pre-built components in the registry). We evaluate each strategy on compliance rate, task completion time, and token usage by generating six real-world UIs. Results show that the registry-based strategy achieved the highest compliance rate (95.08%), outperforming others with only moderate overhead. Our pilot study with nine practitioners further indicates reduced perceived difficulty and time burden while enhancing self-efficacy in their workflows. These findings demonstrate that using pre-built components in the registry enables more reliable and scalable design system-compliant UI generation with LLM agents.",
    featured: 1,
    image:
      "/images/publications/publication-2026-design-system-ui-generation.png",
    relatedProjects: ["hyundai-uiux-agentic-automation"] as string[],
  },
  {
    id: "publication-2026-agentic-ui-generation-eval",
    title:
      "Evaluating LLM-based Agentic Approaches for Design Guidelines-Compliant User Interface Generation",
    authors: ["SeungEon Cha", "Sunghyun Jo", "Jongho Shin", "Kyoungwon Seo"],
    venue: "HCI Korea 2026",
    year: 2026,
    type: "Conference",
    status: "Completed",
    tags: ["AI Agent", "LLM", "UI/UX", "Design System"],
    url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12745764",
    abstract:
      "Recent advances in AI-powered user interface (UI) generation using large language model (LLM)-based agents enable users to create UIs from natural language descriptions. However, most existing systems struggle to satisfy enterprise-specific design guidelines, limiting real-world adoption. To investigate how LLM-based agents can more reliably generate design guidelines-compliant UIs, we compare three distinct approaches. The component-based approach achieves the highest compliance rate, outperforming the other methods despite moderately higher costs and latency. These findings suggest that generating UIs through reusable components is more effective for ensuring design guideline compliance than relying on LLM interpretation of textual specifications.",
    image:
      "/images/publications/publication-2026-agentic-ui-generation-eval.png",
    relatedProjects: ["hyundai-uiux-agentic-automation"] as string[],
  },
  {
    id: "publication-2025-clone-mci-diagnosis",
    title:
      "CLONE: Synthetic Guideline-based Clinical Reasoning with LLMs for Early Diagnosis of Mild Cognitive Impairment",
    authors: [
      "SeungEon Cha",
      "Jinseok Park",
      "Hojin Choi",
      "Hokyoung Ryu",
      "Kyoungwon Seo",
    ],
    venue: "CHI 2025",
    year: 2025,
    type: "Conference",
    featured: 4,
    status: "Completed",
    tags: ["LLM", "Reasoning", "Medical AI"],
    url: "https://dl.acm.org/doi/full/10.1145/3706599.3720111",
    abstract:
      "Early diagnosis of mild cognitive impairment (MCI) is essential to prevent its progression to Alzheimer's disease. Human expert-driven diagnosis provides interpretable rationales but is time-consuming, while machine learning-based approaches offer efficiency but lack human-readable rationales. To address these limitations, we propose CLONE (Clinical Reasoning via Neuropsychologist Emulation), a three-stage framework leveraging large language models (LLMs) for MCI diagnosis: (1) emulating experts through role-playing, (2) synthesizing step-by-step diagnostic guidelines, and (3) performing clinical reasoning using the guideline. CLONE was evaluated on a real-world dataset of 65 subjects, achieving 89.23% diagnostic accuracy and outperforming the few-shot chain-of-thought (CoT) baseline by 6.15%, with specificity improving by 10.71%. Moreover, the synthesized guideline enhanced rationale quality, making rationales more consistent, correct, specific, helpful, and human-like compared to baselines. These findings highlight CLONE's potential to enable accurate diagnosis and reliable clinical reasoning, addressing challenges in the field of MCI diagnosis.",
    image: "/images/publications/publication-2025-clone-mci-diagnosis.png",
    relatedProjects: ["hai-vr-eeg-mri-biomarker-lab"] as string[],
  },
  {
    id: "publication-2025-tool-description-language",
    title:
      "Effects of Tool Description Language on Language Model's Tool Calling in Korean Dialogue",
    authors: ["SeungEon Cha", "Yuwon Kim", "Kyoungwon Seo"],
    venue: "HCI Korea 2025",
    year: 2025,
    type: "Conference",
    status: "Completed",
    featured: 3,
    tags: ["AI Agent", "LLM", "Tool Calling"],
    url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12131535",
    abstract:
      "Tool calling has become a key component that allows language models (LMs) to interact with the real-world. In particular, clearly written tool descriptions guide LMs to select the appropriate tool and extract correct arguments from user queries. However, the effect of the language used in tool descriptions on tool calling in LM, especially in non-English conversation contexts, has been underexplored. This study investigates how the language of tool descriptions (e.g., English vs. Korean) affects tool calling in LMs in Korean dialogues. Using FunctionChat-Bench, we evaluated various LMs, including multilingual, fine-tuned in Korean, and non-supported Korean. The results showed that large multilingual LMs performed well regardless of the language in tool description, while small low-performing LMs tended to perform better with tool descriptions written in Korean. These findings underscore the importance of linguistic consistency between user queries and tool descriptions, particularly for small LMs with lower multilingual proficiency.",
    image:
      "/images/publications/publication-2025-tool-description-language.png",
    relatedProjects: [] as string[],
  },
  {
    id: "publication-2024-hybrid-rag",
    title:
      "Hybrid RAG: Enhancing Graph Retrieval-Augmented Generation through Vector Similarity-based Search",
    authors: ["SeungEon Cha", "Kyoungwon Seo", "Dongho Kim"],
    venue: "한국방송·미디어공학회 2024",
    year: 2024,
    type: "Conference",
    status: "Completed",
    tags: ["LLM", "RAG", "Graph RAG"],
    url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11995493",
    abstract:
      "최근 자연어 처리 분야에서 거대 언어 모델(Large Language Models, LLMs)의 외부 정보를 필요로 하는 작업에서의 한계를 극복하기 위해 검색-증강-생성(Retrieval-Augmented Generation, RAG) 기법의 중요성이 커지고 있다. 기존 방식인 Vector RAG는 문맥적 유사성 검색에 강점이 있지만 글로벌 질문이나 다단계 추론에 한계가 있다. 이를 극복하기 위해 개체 간의 관계 추론에 강점을 보이는 Graph RAG가 제안되어왔으나, 검색을 위해 사용자의 요청으로부터 오류 없이 정확한 쿼리를 작성하는데 어려움이 있다. 본 연구에서는 이 두 접근법의 상호보완을 위해 벡터 기반의 유사도를 그래프 데이터베이스 검색 프로세스에 적용한 Hybrid RAG 모델을 제안한다. Hybrid RAG는 ARAGOG 벤치마크 데이터셋에서 기존의 RAG 접근법 대비 전반적으로 우수한 성능을 보였으며, 특히 답변의 관련도와 정확도에서의 성능이 각각 4.4%, 6.2% 유의미하게 향상된 것으로 나타났다. 이러한 결과는 Hybrid RAG를 통해 컨텍스트 정보에 '노드-관계-노드'와 같은 명시적인 정보를 포함시키고, 벡터 유사도 기반 노드 검색을 통해 더 넓은 그래프 탐색 공간을 확보함으로써 달성했다고 볼 수 있다.",
    image: "/images/publications/publication-2024-hybrid-rag.png",
    relatedProjects: ["hybrid-rag-capstone"] as string[],
  },
  {
    id: "publication-2024-ai-course-recommender",
    title:
      "The Impact of AI-based Course-Recommender System on Students' Course-Selection Decision-Making Process",
    authors: ["SeungEon Cha", "Martin Loeser", "Kyoungwon Seo"],
    venue: "Applied Sciences",
    year: 2024,
    type: "Journal",
    status: "Completed",
    tags: ["AIEd", "Recommender System", "Speed Dating"],
    url: "https://www.mdpi.com/2076-3417/14/9/3672",
    abstract:
      "The course-recommender system (CRS), designed to aid students' course-selection decision-making process by suggesting courses aligned with their interests and grades, plays a crucial role in fulfilling curricular requirements, enhancing career opportunities, and fostering intellectual growth. Recent advancements in artificial intelligence (AI) have empowered CRSs to deliver personalized recommendations by considering individual contexts. However, the impact of AI-based CRS on students' course-selection decision-making process (inter alia, search and evaluation phases) is an open question. Understanding student perceptions and expectations of AI-based CRSs is key to optimizing their decision-making process in course selection. For this purpose, we employed speed dating with storyboards to gather insights from 24 students on five different types of AI-based CRS. The results revealed that students expected AI-based CRSs to play an assistive role in the search phase, helping them efficiently complete time-consuming search tasks in less time. Conversely, during the evaluation phase, students expected AI-based CRSs to play a leading role as a benchmark to address their uncertainty about course suitability, learning value, and serendipity. These findings underscore the adaptive nature of AI-based CRSs, which adjust according to the intricacies of students' course-selection decision-making process, fostering fruitful collaboration between students and AI.",
    featured: 5,
    image: "/images/publications/publication-2024-ai-course-recommender.png",
    relatedProjects: [
      "hai-future-classroom-copilot",
      "seoul-office-of-education-ai-service",
    ] as string[],
  },
  {
    id: "publication-2022-seoul-office-of-education-ai-service",
    title: "인공지능 기반 맞춤형 교육서비스 지원 방안 연구",
    authors: [],
    venue: "서울특별시교육청 교육연구정보원",
    year: 2022,
    type: "Report",
    status: "Completed",
    tags: ["AIEd", "LRS", "xAPI"],
    url: "https://www.serii.re.kr/fus/MI000000000000000487/board/BO00000361/ctgynone/view0010v.do?board_seq=4657",
    abstract:
      "서울교육 관계자 대상 요구 분석을 바탕으로 서울시 교육에 부합하는 AI·빅데이터 기반 맞춤형 교육서비스 지원 방안을 제시한 연구보고서.",
    image:
      "/images/publications/publication-2022-seoul-office-of-education-ai-service.png",
    relatedProjects: ["seoul-office-of-education-ai-service"] as string[],
  },
];
