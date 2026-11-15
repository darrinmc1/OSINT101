// Learning Modules for OSINT 101 - ported from Vite OSINT Academy
// Original structure preserved: modules have nested `sections` with
// content + exercises, rather than a single content blob.

export interface ModuleSection {
  title: string
  duration: string
  content: string
  exercise?: string
}

export interface LearningModule {
  id: string
  title: string
  description: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  estimatedTime: string
  sections: ModuleSection[]
}

export const learningModules: Record<string, LearningModule> =
{
  "build-vs-buy-ai": {
    "id": "build-vs-buy-ai",
    "title": "The Million-Dollar Question: Build vs. Buy for AI Solutions",
    "description": "Navigate the critical decision of whether to develop custom AI solutions in-house or leverage off-the-shelf products. This lesson provides a structured framework for evaluating factors like cost, expertise, data needs, and strategic alignment to make the optimal choice for your organization.",
    "level": "Intermediate",
    "estimatedTime": "15 min",
    "sections": [
      {
        "title": "The Million-Dollar Question: Build vs. Buy for AI Solutions",
        "duration": "15 min",
        "content": "## The Million-Dollar Question: Build vs. Buy for AI Solutions\n\nThe integration of Artificial Intelligence (AI) into operational frameworks presents a pivotal strategic choice for organizations: should you invest in building custom AI capabilities from the ground up, or is it more prudent to acquire and adapt existing AI solutions from vendors? This decision, often termed the 'build vs. buy' dilemma, carries significant implications for resource allocation, time-to-market, and long-term competitive advantage. Understanding the nuances of this choice is crucial for maximizing the return on AI investments.\n\n### Factors Influencing the Build vs. Buy Decision\n\nSeveral key factors must be meticulously evaluated to arrive at an informed decision:\n\n1.  **Strategic Uniqueness and Competitive Advantage:** If the AI capability you require is core to your unique value proposition or provides a significant, defensible competitive edge, building a custom solution may be the preferred route. Tailored AI can address proprietary data, unique workflows, or specific market niches that off-the-shelf solutions cannot adequately serve. Conversely, if the AI function is a common business requirement (e.g., basic customer service chatbots, standard data analytics), buying a mature, well-supported product is often more efficient.\n\n2.  **Data Volume, Quality, and Proprietary Nature:** The success of most AI models hinges on data. If your organization possesses vast quantities of unique, high-quality data that is central to the AI's function, building might offer greater control and optimization. However, if data is scarce, of variable quality, or not a strategic differentiator, leveraging vendor solutions trained on larger, more diverse datasets can be advantageous. Consider the effort and cost associated with data acquisition, cleaning, and labeling for a custom build.\n\n3.  **Internal Expertise and Resource Availability:** Building AI requires a specialized skillset, including data scientists, machine learning engineers, AI ethicists, and domain experts. Assess your organization's current talent pool and its capacity to recruit, train, and retain such personnel. If internal expertise is limited or costly to acquire, buying a solution that requires less specialized internal management might be more feasible. A custom build also demands significant computational resources and infrastructure, which must be factored into the cost.\n\n4.  **Cost Considerations and Total Cost of Ownership (TCO):** While the upfront cost of buying an AI solution might seem lower, the TCO can be substantial when factoring in licensing, customization, integration, ongoing maintenance, and potential vendor lock-in. Building a custom solution involves significant initial R&D, development, and infrastructure costs, but can potentially lead to lower long-term operational expenses and greater flexibility. A detailed TCO analysis for both scenarios, extending over several years, is indispensable. For instance, a custom-built predictive maintenance model might cost $500,000-$1,000,000 to develop and deploy, plus ongoing maintenance. A comparable off-the-shelf solution might have an initial license fee of $50,000-$100,000, with annual subscriptions of $20,000-$50,000 and integration costs of $30,000-$70,000, but may offer a faster path to value.\n\n5.  **Time-to-Market and Agility:** If rapid deployment is critical, off-the-shelf solutions often provide a faster path to implementation. Vendors have already invested in development and testing, allowing organizations to integrate and begin realizing benefits sooner. Building from scratch is inherently time-consuming, involving research, development, testing, and iteration cycles. However, a custom build offers greater agility for future pivots and adaptations once operational, as you control the roadmap.\n\n6.  **Integration Complexity and Scalability:** Consider how seamlessly the AI solution will integrate with your existing technology stack and business processes. Off-the-shelf solutions may offer standardized APIs and integration tools, but might still require significant customization. Custom-built solutions offer the highest degree of control over integration and scalability, ensuring they are precisely architected for your environment.\n\n### Making the Decision\n\nThere is no universal answer to the build vs. buy question. The optimal choice depends on a thorough assessment of your organization's specific context, strategic objectives, and resource constraints. A hybrid approach is also common, where organizations might buy a foundational AI platform and then build custom modules or integrations on top of it.\n\nBefore committing, conduct a pilot project or proof-of-concept for both options if feasible. This hands-on experience can reveal unforeseen challenges and benefits, providing empirical data to support your final decision. Ultimately, the goal is to select the approach that best enables your organization to leverage AI for sustainable growth and strategic advantage, ensuring that the investment aligns with both immediate needs and long-term vision."
      }
    ]
  },
  "llms-txt": {
    "id": "llms-txt",
    "title": "Understanding Large Language Models (LLMs) in OSINT",
    "description": "An introduction to Large Language Models (LLMs) and their applications in Open Source Intelligence (OSINT), focusing on ethical considerations and responsible use.",
    "level": "Intermediate",
    "estimatedTime": "15 min",
    "sections": [
      {
        "title": "Understanding Large Language Models (LLMs) in OSINT",
        "duration": "15 min",
        "content": "## Understanding Large Language Models (LLMs) in OSINT\n\nLarge Language Models (LLMs) represent a significant advancement in artificial intelligence, capable of understanding, generating, and manipulating human language. For practitioners in Open Source Intelligence (OSINT), LLMs offer a powerful new toolkit, but also necessitate a careful consideration of ethical implications and responsible deployment.\n\n### What are LLMs?\n\nLLMs are a type of artificial intelligence model trained on vast amounts of text data. This training allows them to identify patterns, understand context, and generate coherent and relevant text. Popular examples include OpenAI's GPT series, Google's LaMDA and PaLM, and Meta's LLaMA. Their capabilities span a wide range of natural language processing (NLP) tasks, such as text summarization, translation, question answering, and content creation.\n\n### Applications in OSINT\n\nThe application of LLMs in OSINT is multifaceted and rapidly evolving. They can significantly enhance efficiency and analytical depth:\n\n*   **Information Extraction and Summarization:** LLMs can process large volumes of unstructured text data from the open web, social media, news articles, and forums, extracting key entities, relationships, and events. They can then summarize this information concisely, allowing analysts to quickly grasp the essence of complex datasets.\n*   **Trend Analysis and Anomaly Detection:** By analyzing patterns in large text corpora, LLMs can help identify emerging trends, detect subtle shifts in discourse, or flag anomalous information that might warrant further investigation.\n*   **Sentiment Analysis:** Understanding public sentiment towards specific topics, individuals, or organizations is crucial in many OSINT investigations. LLMs can perform nuanced sentiment analysis, going beyond simple positive/negative classifications to identify specific emotions and underlying reasoning.\n*   **Disinformation and Propaganda Detection:** LLMs can be trained to identify linguistic markers, stylistic patterns, and thematic elements commonly found in disinformation campaigns and propaganda. This can aid in flagging potentially false or misleading content for human review.\n*   **Language Translation:** In a globalized information landscape, the ability to process and understand information in multiple languages is vital. LLMs offer advanced translation capabilities, breaking down language barriers in OSINT research.\n*   **Hypothesis Generation:** By identifying connections and patterns that might not be immediately obvious to a human analyst, LLMs can assist in generating new hypotheses or lines of inquiry.\n\n### Ethical Considerations and Responsible Use\n\nWhile the potential benefits of LLMs in OSINT are substantial, their use is accompanied by critical ethical considerations that must be addressed to maintain the integrity and legitimacy of OSINT practices:\n\n*   **Bias in Data and Outputs:** LLMs are trained on data that reflects existing societal biases. Consequently, their outputs can inadvertently perpetuate or amplify these biases, leading to unfair or discriminatory conclusions. Analysts must be aware of this potential and critically evaluate LLM-generated information.\n*   **Accuracy and Hallucinations:** LLMs can sometimes generate plausible-sounding but factually incorrect information, often referred to as 'hallucinations.' It is imperative that all LLM-generated intelligence is rigorously fact-checked and verified against reliable sources by human analysts. LLMs should be treated as tools to assist analysis, not as infallible sources of truth.\n*   **Privacy and Data Handling:** The use of LLMs may involve processing sensitive or personal information. Adherence to data privacy regulations (e.g., GDPR) and ethical guidelines regarding the collection, storage, and use of such data is paramount. Never input classified or highly sensitive personal data into publicly accessible LLM interfaces.\n*   **Transparency and Explainability:** The 'black box' nature of some LLMs can make it difficult to understand how a particular output was generated. In OSINT, where findings must often be justifiable, a lack of transparency can be problematic. Strive to use LLMs in ways that allow for a clear audit trail and understand their limitations.\n*   **Potential for Misuse:** The power of LLMs could be exploited for malicious purposes, such as generating sophisticated phishing campaigns, creating convincing fake news, or automating harassment. Responsible OSINT practitioners must be aware of these risks and actively work to counter them.\n\n### Best Practices for LLM Integration in OSINT\n\nTo leverage LLMs effectively and ethically in OSINT:\n\n1.  **Treat LLMs as Assistants, Not Authorities:** Use LLMs to augment human analysis, not replace it. Critical thinking and human judgment remain indispensable.\n2.  **Verify All Outputs:** Implement a strict verification process for any information generated or summarized by an LLM. Cross-reference with multiple, authoritative sources.\n3.  **Understand Model Limitations:** Be aware of the specific capabilities and limitations of the LLM you are using. Familiarize yourself with its training data, potential biases, and known failure modes.\n4.  **Secure Data Handling:** Use enterprise-grade or locally hosted LLMs for sensitive investigations where data privacy is a concern. Avoid inputting confidential information into public-facing tools.\n5.  **Continuous Learning:** The field of AI and LLMs is evolving rapidly. Stay informed about new developments, ethical guidelines, and best practices.\n\nBy understanding both the powerful capabilities and the inherent risks, OSINT professionals can integrate LLMs into their workflows in a manner that is both effective and ethically sound, enhancing their ability to gather and analyze open-source information responsibly."
      }
    ]
  },
  "llm": {
    "id": "llm",
    "title": "Understanding Large Language Models (LLMs) for OSINT",
    "description": "An introduction to Large Language Models (LLMs) and their applications in Open Source Intelligence (OSINT), focusing on ethical considerations and responsible use.",
    "level": "Beginner",
    "estimatedTime": "15 min",
    "sections": [
      {
        "title": "Understanding Large Language Models (LLMs) for OSINT",
        "duration": "15 min",
        "content": "## Understanding Large Language Models (LLMs) for OSINT\n\nLarge Language Models (LLMs) are a rapidly evolving area of artificial intelligence that have significant implications for the field of Open Source Intelligence (OSINT). These powerful tools can process, analyze, and generate human-like text, offering new avenues for information gathering, analysis, and reporting. However, their use in OSINT also raises important ethical considerations and requires a responsible approach.\n\n### What are LLMs?\n\nAt their core, LLMs are sophisticated machine learning models trained on vast amounts of text data. This training allows them to understand grammar, context, facts, reasoning abilities, and various writing styles. Examples of well-known LLMs include OpenAI's GPT series, Google's LaMDA and PaLM, and Meta's Llama. They function by predicting the next word in a sequence, enabling them to perform a wide range of natural language processing (NLP) tasks.\n\n### Applications of LLMs in OSINT\n\nLLMs offer several potential applications for OSINT practitioners:\n\n1.  **Information Extraction and Summarization:** LLMs can quickly sift through large volumes of text from news articles, social media, reports, and other sources to extract key information, identify entities (people, organizations, locations), and summarize lengthy documents. This significantly speeds up the initial stages of research.\n2.  **Trend Analysis and Pattern Recognition:** By analyzing patterns in large datasets of text, LLMs can help identify emerging trends, sentiment shifts, and connections that might be missed by manual review. This can be invaluable for understanding public opinion or tracking narrative development.\n3.  **Content Generation and Reporting:** LLMs can assist in drafting reports, creating summaries, or even generating hypothetical scenarios based on available intelligence. This can improve the efficiency and consistency of reporting.\n4.  **Language Translation and Understanding:** For OSINT conducted across different linguistic barriers, LLMs can provide rapid and reasonably accurate translations, facilitating the analysis of foreign-language sources.\n5.  **Question Answering and Knowledge Retrieval:** LLMs can act as advanced search engines, allowing analysts to ask complex questions and receive synthesized answers drawn from their training data, potentially uncovering less obvious connections.\n\n### Ethical Considerations and Responsible Use\n\nThe power of LLMs comes with significant ethical responsibilities, especially in the context of OSINT. It is crucial to adhere to legal frameworks and ethical guidelines:\n\n*   **Bias and Misinformation:** LLMs are trained on data that may contain biases, inaccuracies, or even misinformation. The output generated by an LLM can reflect these biases, leading to skewed analysis or the unintentional propagation of false information. It is imperative for OSINT practitioners to critically evaluate LLM outputs and cross-reference information with reliable sources.\n*   **Privacy and Data Protection:** When using LLMs, particularly those hosted by third parties, care must be taken regarding the type of data inputted. Sensitive or personally identifiable information (PII) should not be fed into public LLM interfaces, as this could violate privacy regulations and ethical standards.\n*   **Transparency and Attribution:** When LLM-generated content is used in reports or analysis, it is important to maintain transparency about its origin. While direct attribution of every LLM-generated sentence might be impractical, the reliance on AI tools for analysis should be acknowledged where appropriate, particularly if it significantly influences the findings.\n*   **Legality of Data Sources:** LLMs are trained on publicly available data. However, the *use* of LLM-generated insights derived from specific sources must still comply with the terms of service of those original sources and relevant data protection laws. Ensure that the methods used to gather and process information, even with AI assistance, remain legal and ethical.\n*   **Over-reliance and Critical Thinking:** LLMs are tools to augment human analysis, not replace it. Over-reliance on LLM outputs without critical human oversight can lead to significant errors. The analyst's judgment, contextual understanding, and domain expertise remain paramount.\n\n### Best Practices for OSINT Practitioners\n\nTo leverage LLMs effectively and ethically in OSINT:\n\n*   **Verify Outputs:** Always cross-reference information provided by LLMs with authoritative and verified sources.\n*   **Understand Limitations:** Be aware of the potential for bias, hallucinations (generating factual-sounding but incorrect information), and outdated information in LLM outputs.\n*   **Protect Sensitive Data:** Never input confidential or PII into public LLM interfaces.\n*   **Use LLMs as Assistants:** Employ LLMs to enhance efficiency in tasks like summarization and initial data processing, but retain human control over the final analysis and conclusions.\n*   **Stay Informed:** The field of AI is evolving rapidly. Keep abreast of new developments, limitations, and ethical guidelines related to LLMs.\n\nBy understanding both the capabilities and limitations of LLMs, and by committing to responsible and ethical practices, OSINT professionals can harness these powerful AI tools to enhance their investigations while upholding the integrity of their work."
      }
    ]
  },
  "pricing": {
    "id": "pricing",
    "title": "Accurate Pricing for OSINT Training",
    "description": "Clarifies the actual cost of OSINT training, correcting misinformation about free foundational courses.",
    "level": "Beginner",
    "estimatedTime": "15 min",
    "sections": [
      {
        "title": "Accurate Pricing for OSINT Training",
        "duration": "15 min",
        "content": "## Understanding OSINT Training Costs\n\nIt's crucial for aspiring OSINT professionals to have a clear understanding of the costs associated with acquiring valuable skills and knowledge. Recently, there have been claims circulating that certain foundational OSINT training modules are offered for free, with a \"Free $0 forever Foundations training and a Case File plan grounded in Beginner modules.\" This statement is misleading and requires correction to provide accurate information.\n\n### The Reality of Foundational Training\n\nWhile the desire for free resources is understandable, especially when embarking on a new career path, it's important to recognize that comprehensive and high-quality foundational training in any field, including Open Source Intelligence (OSINT), often comes with a cost. This cost reflects the expertise, development, and ongoing maintenance required to deliver effective learning experiences.\n\n**Foundations are NOT Free:** The claim that \"Foundations are not free\" is accurate. The development of robust training materials, including detailed modules, practical exercises, and expert instruction, involves significant investment. These resources are designed to provide a solid bedrock of knowledge that is essential for success in the OSINT domain. Expecting such comprehensive content to be entirely free is unrealistic and can lead to disappointment or the acquisition of sub-par materials.\n\n### What to Expect in Paid Foundations\n\nWhen you invest in paid foundational OSINT training, you should anticipate a curriculum that covers essential topics such as:\n\n*   **Introduction to OSINT:** Understanding the principles, ethics, and legal considerations of open-source intelligence gathering.\n*   **Information Sources:** Identifying and utilizing various public sources like social media, search engines, public records, and news archives.\n*   **Search Techniques:** Mastering advanced search operators and methodologies for efficient and effective data retrieval.\n*   **Data Analysis and Verification:** Learning to analyze gathered information, assess its credibility, and identify potential biases.\n*   **Tools and Technologies:** Familiarization with common OSINT tools and software that aid in the collection and analysis process.\n*   **Reporting and Documentation:** Developing skills in presenting findings in a clear, concise, and actionable manner.\n\n### The \"Case File Plan\" Misconception\n\nThe mention of a \"Case File plan grounded in Beginner modules\" can also be a point of confusion. While beginner modules are indeed the starting point, a \"Case File plan\" typically implies a more advanced, practical application of OSINT skills. This often involves simulations, real-world scenario analysis, and the development of investigative strategies. Such plans usually build upon the foundational knowledge and require a deeper level of engagement, which is often reflected in the overall cost of a comprehensive training program.\n\n### Why Investing in OSINT Training is Worthwhile\n\nInvesting in quality OSINT training is an investment in your future. The skills you acquire can open doors to diverse career opportunities in law enforcement, cybersecurity, journalism, corporate investigations, and more. High-quality training provides:\n\n*   **Credible Knowledge:** Learn from experienced professionals who impart accurate and up-to-date information.\n*   **Practical Skills:** Gain hands-on experience through exercises and simulations.\n*   **Networking Opportunities:** Connect with instructors and fellow students, building a professional network.\n*   **Career Advancement:** Enhance your resume and qualify for specialized roles.\n\n### Conclusion\n\nWhen evaluating OSINT training programs, always look for transparent and accurate pricing information. Be wary of claims that offer extensive foundational training for free. While introductory materials or webinars might be available at no cost, comprehensive foundational courses that equip you with the necessary skills for a professional career in OSINT are typically paid offerings. Understanding this upfront will help you make informed decisions and invest wisely in your professional development."
      }
    ]
  },
  "case-file": {
    "id": "case-file",
    "title": "OSINT Case File Analysis: Identifying and Verifying Information",
    "description": "Learn how to critically analyze OSINT case files, focusing on identifying and verifying claims, statistics, and superlative language to ensure accuracy and reliability.",
    "level": "Intermediate",
    "estimatedTime": "15 min",
    "sections": [
      {
        "title": "OSINT Case File Analysis: Identifying and Verifying Information",
        "duration": "15 min",
        "content": "## OSINT Case File Analysis: Identifying and Verifying Information\n\nOpen-source intelligence (OSINT) case files are invaluable resources, but their utility hinges on the accuracy and reliability of the information they contain. As OSINT practitioners, it's our responsibility to approach these files with a critical eye, meticulously verifying claims and scrutinizing the language used. This lesson focuses on two key areas of potential weakness in OSINT case files: superlative language lacking evidence and statistics presented without a verifiable source.\n\n### The Pitfalls of Superlative Language\n\nOne of the most common and insidious forms of unsubstantiated information in any report, including OSINT case files, is the use of superlative language. Phrases like 'the best,' 'world-class,' 'guaranteed,' 'proven to,' 'always,' 'never fails,' '#1,' 'revolutionary,' 'game-changing,' and 'industry-leading' are designed to persuade and impress. However, without concrete evidence to back them up, they are merely rhetorical devices. In the context of OSINT, such language can lead to biased conclusions and flawed intelligence.\n\n**Why Superlatives are Problematic in OSINT:**\n\n*   **Lack of Objectivity:** Superlatives inherently introduce subjectivity. What one person considers 'the best' might be mediocre to another. OSINT demands objectivity.\n*   **Unverifiable Claims:** These terms are often impossible to verify through open-source means. There's rarely a universally accepted metric for 'guaranteed' success or being '#1' across all contexts.\n*   **Potential for Misdirection:** Malicious actors or even well-meaning but careless report writers might use superlatives to inflate the perceived value or effectiveness of a person, organization, technology, or event.\n\n**Strategies for Handling Superlative Language:**\n\nWhen you encounter superlative language in an OSINT case file, your immediate response should be skepticism and a drive to verify. Ask yourself:\n\n*   **What is the evidence?** Is there data, research, or a credible source cited that supports this claim?\n*   **What are the criteria?** If something is 'industry-leading,' what industry? What metrics define 'leading'?\n*   **Is there an alternative perspective?** Could another source present a different, perhaps contradictory, view?\n\n**Actionable Steps:**\n\n1.  **Flag the Language:** Make a note of every instance of superlative language.\n2.  **Seek Corroboration:** Conduct further OSINT to find evidence that supports or refutes the superlative claim. Look for independent reviews, comparative analyses, or official reports.\n3.  **Qualify or Remove:** If evidence is found, qualify the superlative (e.g., 'Company X is considered industry-leading by its own marketing materials, but independent reviews suggest mixed performance'). If no evidence can be found after a reasonable effort, the superlative should be removed or presented as an unsubstantiated assertion made by the source of the case file.\n\n### The Importance of Cited Statistics\n\nNumbers and statistics can lend an air of authority and precision to information. However, like superlative language, statistics can be misleading or outright false if they lack a credible source. A statistic such as '73% of businesses' is meaningless without knowing *which* businesses were surveyed, *who* conducted the survey, *when* it was conducted, and *how* the data was collected.\n\n**Why Uncited Statistics are Dangerous:**\n\n*   **Fabrication Potential:** Statistics can be easily fabricated or manipulated to support a particular narrative.\n*   **Cherry-Picking Data:** Even legitimate data can be presented selectively to create a skewed impression.\n*   **Outdated Information:** Statistics, especially those related to rapidly changing fields, can become irrelevant quickly if not sourced with a date.\n\n**Strategies for Handling Uncited Statistics:**\n\nWhen faced with a statistic in an OSINT case file, treat it as an assertion that requires verification.\n\n*   **Identify the Claim:** Note the specific statistic and the context in which it is presented.\n*   **Search for the Source:** Use search engines and specialized databases to find the original study, report, or article that published the statistic. Look for keywords related to the statistic and its subject matter.\n*   **Evaluate the Source:** Once found, critically evaluate the credibility of the source. Is it a reputable research institution, a government agency, a peer-reviewed journal, or a biased advocacy group?\n*   **Check the Methodology and Date:** Understand how the data was gathered and when. Is the methodology sound? Is the data current enough to be relevant?\n\n**Actionable Steps:**\n\n1.  **Flag the Statistic:** Record the statistic and its surrounding context.\n2.  **Attempt Source Tracing:** Perform targeted searches to locate the original data source. Look for phrases like 'according to a report by...', 'a survey found...', 'data from...' followed by the statistic.\n3.  **Verify or Discard:** If a credible source is found and the statistic is verifiable, acknowledge it and cite the source properly. If no verifiable source can be identified after a diligent search, the statistic should be discarded or noted as an unsubstantiated claim within the case file.\n\n### Conclusion\n\nMastering the art of critical analysis is paramount in OSINT. By diligently identifying and addressing superlative language and uncited statistics, you enhance the integrity of your intelligence products. Always question, always seek evidence, and always strive for objectivity. This rigorous approach ensures that your OSINT case files are not just collections of data, but reliable foundations for sound decision-making."
      }
    ]
  },
  "requests": {
    "id": "requests",
    "title": "Mastering Information Requests for Open-Source Intelligence",
    "description": "Learn how to craft effective information requests to gather intelligence from public sources, including legal and ethical considerations.",
    "level": "Intermediate",
    "estimatedTime": "10 min",
    "sections": [
      {
        "title": "Mastering Information Requests for Open-Source Intelligence",
        "duration": "10 min",
        "content": "## Mastering Information Requests for Open-Source Intelligence\n\nOpen-source intelligence (OSINT) is a powerful discipline that relies on publicly available information to gather insights. While much OSINT involves passive collection and analysis, there are times when direct information requests are necessary. This lesson focuses on how to effectively and ethically request information from various public sources to enhance your intelligence gathering.\n\n### Why Make Information Requests?\n\nIn OSINT, direct requests are typically made when:\n\n*   **Information is not readily indexed or easily discoverable:** Publicly available data might exist but is not captured by standard search engines or databases.\n*   **Specific clarification or confirmation is needed:** You may require details that are not explicitly stated in existing public records.\n*   **Access to restricted public data is required:** Certain government or organizational reports might be accessible upon request, even if not freely downloadable.\n*   **Building rapport for future intelligence:** In some scenarios, making a formal request can be the first step in establishing communication with an entity or individual.\n\n### Types of Information Requests\n\nInformation requests can span a wide range, from simple inquiries to formal legal demands. The approach you take will depend on the nature of the information sought and the target of your request.\n\n1.  **Informal Inquiries:** These are typically sent via email or social media direct messages to individuals or organizations. They are best suited for seeking clarifications or non-sensitive information.\n    *   **Example:** Emailing a company's press office to ask for the publication date of a specific press release that is difficult to locate.\n\n2.  **Formal Public Records Requests:** In many jurisdictions, laws like the Freedom of Information Act (FOIA) in the United States, or similar legislation elsewhere, allow citizens to request access to government records. These requests must adhere to specific procedures and timelines.\n    *   **Effectiveness:** Studies on FOIA usage show a significant volume of requests are made annually. For instance, according to the U.S. Department of Justice, federal agencies processed over 800,000 FOIA requests in fiscal year 2021. While not all requests yield immediate or complete results, the aggregate data demonstrates its utility for accessing governmental information.\n    *   **Example:** Filing a FOIA request with a local planning department for records pertaining to a specific development project.\n\n3.  **Research Proposals/Inquiries to Academic Institutions:** If seeking data or insights from academic research, a formal inquiry to the relevant department or researcher might be necessary.\n    *   **Example:** Contacting a university's sociology department to inquire about publicly available datasets from a recent study on social media trends.\n\n4.  **Requests to Non-Profits and NGOs:** Many non-profit organizations have public reports or data they are willing to share upon request.\n    *   **Example:** Requesting a specific annual report from an environmental watchdog group that is not posted on their website.\n\n### Crafting Effective Requests\n\nRegardless of the type, a well-crafted request is crucial for success.\n\n*   **Be Specific:** Clearly define the information you are seeking. Vague requests are often denied or result in irrelevant information.\n*   **State Your Purpose (Briefly and Honestly):** While you don't need to reveal your entire investigation, providing a general, truthful purpose can increase the likelihood of cooperation. For instance, stating you are conducting \"academic research\" or \"journalistic inquiry\" can be helpful.\n*   **Identify the Target:** Know who you are requesting information from. This helps tailor your language and approach.\n*   **Be Polite and Professional:** Maintain a respectful tone throughout your communication.\n*   **Understand Limitations:** Be aware of what information is legally protected or falls outside the scope of public access.\n*   **Follow Up:** If you don't receive a response within a reasonable timeframe, a polite follow-up is appropriate.\n\n### Legal and Ethical Considerations\n\nIt is paramount to conduct all information requests within legal and ethical boundaries.\n\n*   **Privacy Laws:** Always respect individuals' privacy. Do not request or attempt to obtain personal information that is not legitimately public.\n*   **Data Protection Regulations:** Be mindful of regulations like GDPR or CCPA when requesting data that might contain personal information.\n*   **Misrepresentation:** Never misrepresent yourself or your intentions to obtain information. This can have severe legal and reputational consequences.\n*   **Abuse of Process:** Do not use information request mechanisms (like FOIA) for harassment or frivolous purposes.\n\n### Statistics and Evidence of Effectiveness\n\nWhile specific statistics on the success rate of individual OSINT information requests are hard to quantify due to their varied nature, the broader landscape of public information access demonstrates their value. For example, government transparency initiatives, often driven by FOIA-like laws, have led to the public release of millions of documents annually, ranging from environmental impact reports to financial disclosures. The U.S. Securities and Exchange Commission (SEC), for instance, makes vast amounts of corporate filings publicly available, which are crucial for financial OSINT. In 2022, the SEC's EDGAR system received over 2.5 billion requests, highlighting the immense public interest and utility of accessible corporate data. Similarly, academic repositories and data archives, such as those managed by organizations like the Inter-university Consortium for Political and Social Research (ICPSR), hold and provide access to numerous datasets, often requiring a formal request or institutional affiliation, which are invaluable for research and analysis.\n\nBy understanding the different types of requests, mastering the art of clear communication, and adhering to legal and ethical standards, you can significantly enhance your OSINT capabilities by effectively tapping into the vast reservoir of publicly available information."
      }
    ]
  },
  "contact": {
    "id": "contact",
    "title": "Understanding Contact Information in OSINT",
    "description": "Learn how to ethically and effectively gather contact information using open-source intelligence techniques. This lesson covers methods for finding emails, phone numbers, and social media profiles, emphasizing privacy and legal considerations.",
    "level": "Intermediate",
    "estimatedTime": "15 min",
    "sections": [
      {
        "title": "Understanding Contact Information in OSINT",
        "duration": "15 min",
        "content": "## Gathering Contact Information with OSINT\n\nIn the realm of Open-Source Intelligence (OSINT), contact information is a fundamental building block. Whether you're conducting background checks, investigating fraud, performing competitive analysis, or simply trying to connect with an individual for legitimate purposes, knowing how to ethically and legally obtain contact details is crucial. This lesson delves into the various methods and tools available for gathering this information, while also stressing the importance of privacy and legal boundaries.\n\n### Why is Contact Information Important in OSINT?\n\nContact information serves as a gateway to further investigation. It can:\n\n*   **Verify Identity:** Cross-referencing contact details with other publicly available information can help confirm an individual's or organization's identity.\n*   **Establish Communication:** Directly reaching out to a person or entity can yield valuable insights, though this should always be done with transparency and respect.\n*   **Map Networks:** Understanding how individuals or organizations connect through shared contact points can reveal hidden relationships and influence.\n*   **Trace Digital Footprints:** Email addresses and phone numbers are often linked to various online accounts and services, acting as keys to unlock further digital traces.\n\n### Methods for Gathering Contact Information\n\nSeveral techniques can be employed to find contact details. It's essential to combine multiple methods for a more comprehensive picture and to verify the accuracy of the information obtained.\n\n#### 1. Email Address Discovery\n\nEmail addresses are ubiquitous and can be found through various means:\n\n*   **Website Analysis:** Look for 'Contact Us' pages, team directories, 'About Us' sections, or author bylines on websites. Sometimes, email addresses are obfuscated (e.g., `name [at] domain [dot] com`) to prevent scraping; these can often be deciphered.\n*   **Social Media Profiles:** Many social media platforms allow users to list their email addresses in their profile settings, though privacy controls may limit visibility.\n*   **Public Records and Databases:** Certain public records, like business registrations or professional licenses, might contain contact information.\n*   **Search Engines:** Using advanced search operators (e.g., `site:domain.com email`, `\"@domain.com\" \"John Doe\"`) can uncover email addresses indexed by search engines.\n*   **Email Header Analysis:** If you have received an email from the target, analyzing its headers can sometimes reveal IP addresses or other related information, though direct contact discovery is less common here.\n*   **Specialized Tools:** Tools like Hunter.io, Skrapp.io, or Email Permutator can help generate potential email addresses based on common patterns used by an organization and verify their validity.\n\n#### 2. Phone Number Discovery\n\nFinding phone numbers can be more challenging due to privacy concerns, but here are some approaches:\n\n*   **Website Information:** Similar to email, check 'Contact Us' pages, business directories, or public-facing employee listings.\n*   **Social Media:** Some users opt to share their phone numbers publicly on platforms like LinkedIn or Facebook.\n*   **Public Directories:** Online white pages and business directories can be useful, though many are outdated or focus on landlines.\n*   **Reverse Phone Lookups:** While often associated with paid services, basic reverse lookups might provide some associated names or locations for publicly listed numbers.\n*   **Company Websites:** For businesses, main phone numbers are usually prominently displayed.\n\n#### 3. Social Media Profile Discovery\n\nIdentifying social media profiles is a cornerstone of OSINT:\n\n*   **Username Searches:** If you know a username, try searching for it across various platforms (e.g., `\"username\" twitter`, `\"username\" instagram`, `\"username\" linkedin`).\n*   **Name and Location Searches:** Combine a person's name with their known location or workplace on search engines and social media platforms.\n*   **Email-to-Profile Tools:** Services like Sherlock or Picus can sometimes link email addresses to associated social media profiles.\n*   **Website Footprints:** Check the 'About Us' or 'Team' pages of websites for links to personal social media profiles.\n*   **Reverse Image Search:** If you have a profile picture, a reverse image search can sometimes lead you to other profiles using the same image.\n\n### Ethical and Legal Considerations\n\nIt is paramount to conduct OSINT investigations ethically and within legal boundaries. The information gathered should be used responsibly.\n\n*   **Privacy Laws:** Be aware of and adhere to privacy regulations such as GDPR, CCPA, and others relevant to your jurisdiction and the target's location.\n*   **Terms of Service:** Respect the Terms of Service of the platforms you are using. Automated scraping or unauthorized access can lead to account suspension or legal repercussions.\n*   **Purpose Limitation:** Use the information only for the legitimate purpose for which it was gathered. Avoid misuse for harassment, stalking, or illegal activities.\n*   **Data Accuracy:** Always strive to verify the accuracy of the contact information obtained. Outdated or incorrect information can lead to flawed conclusions.\n*   **Transparency:** When initiating contact, be transparent about who you are and why you are reaching out, unless specific investigative circumstances warrant otherwise (and even then, ensure legality).\n\n### Conclusion\n\nGathering contact information is a vital skill in OSINT. By employing a combination of search techniques, utilizing specialized tools, and always prioritizing ethical conduct and legal compliance, investigators can effectively build a more complete picture of their subjects. Remember that verification and responsible use are key to maintaining the integrity of your investigations and respecting individual privacy."
      }
    ]
  },
  "contribute": {
    "id": "contribute",
    "title": "Contributing to Open Source Intelligence (OSINT) Projects",
    "description": "Learn how to effectively contribute to open-source intelligence projects, from understanding project needs to submitting your work and fostering collaboration.",
    "level": "Intermediate",
    "estimatedTime": "15 min",
    "sections": [
      {
        "title": "Contributing to Open Source Intelligence (OSINT) Projects",
        "duration": "15 min",
        "content": "## Contributing to Open Source Intelligence (OSINT) Projects\n\nOpen Source Intelligence (OSINT) is a rapidly evolving field, and its growth is often fueled by the collaborative efforts of a dedicated community. Contributing to OSINT projects is a fantastic way to deepen your understanding, share your expertise, and help advance the collective knowledge base. This lesson will guide you through the process of becoming a valuable contributor to OSINT initiatives.\n\n### Why Contribute to OSINT Projects?\n\nThere are numerous benefits to participating in OSINT projects:\n\n*   **Skill Development:** Working on real-world projects exposes you to new tools, techniques, and methodologies. You'll learn by doing, often under the guidance of experienced practitioners.\n*   **Networking:** Collaboration connects you with like-minded individuals, potential mentors, and future colleagues. Building these relationships is crucial in the OSINT community.\n*   **Portfolio Building:** Contributions serve as tangible proof of your skills and dedication, which can be invaluable for career advancement.\n*   **Community Impact:** Your efforts directly benefit the OSINT community by improving tools, documenting processes, or creating new resources. For example, the development of tools like Maltego or SpiderFoot relies heavily on community contributions and extensions.\n*   **Knowledge Sharing:** You can share your unique insights and solutions, helping others overcome similar challenges. A significant portion of OSINT tool development, such as plugins for popular scraping frameworks or data visualization libraries, is driven by community input.\n\n### Types of OSINT Contributions\n\nContributions can take many forms, catering to diverse skill sets:\n\n1.  **Code Contributions:** This includes writing new tools, improving existing ones, fixing bugs, and optimizing performance. For instance, many Python libraries used for web scraping or data analysis in OSINT are maintained and expanded by community contributions. Projects like `theHarvester` or `Recon-ng` are prime examples where code contributions are vital.\n2.  **Documentation:** Clear, comprehensive documentation is essential for any project's success. Contributions can involve writing tutorials, updating user guides, creating FAQs, or translating existing documentation into other languages. Well-documented projects see higher adoption rates, with studies showing that projects with good documentation can experience up to 50% higher contribution rates.\n3.  **Data and Knowledge Bases:** Many OSINT projects rely on curated datasets or knowledge bases. You might contribute by identifying new data sources, validating existing information, or organizing and structuring data for easier access. Projects focused on tracking disinformation campaigns or mapping threat actors often benefit from such contributions.\n4.  **Testing and Feedback:** Simply using a tool or resource and providing constructive feedback is a valuable contribution. Reporting bugs, suggesting new features, and identifying usability issues helps developers refine their work. A study by IBM found that bug reports from users are crucial for improving software quality, with effective bug reporting leading to faster resolution times.\n5.  **Advocacy and Outreach:** Spreading awareness about OSINT projects, organizing community events, or mentoring new contributors also plays a significant role.\n\n### Getting Started: A Step-by-Step Approach\n\n1.  **Identify Projects of Interest:** Explore platforms like GitHub, GitLab, or specialized OSINT forums. Look for projects that align with your interests and skills. Consider the project's activity level, community engagement, and stated goals. A recent analysis of GitHub projects indicated that active projects with clear contribution guidelines receive, on average, 30% more pull requests.\n2.  **Understand Project Guidelines:** Most projects have a `CONTRIBUTING.md` file or similar documentation outlining contribution policies, coding standards, and communication channels. Read this carefully.\n3.  **Engage with the Community:** Join the project's mailing list, Discord server, or forum. Introduce yourself, ask questions, and observe discussions. This helps you understand the project's current focus and challenges.\n4.  **Start Small:** For your first contribution, consider fixing a minor bug, improving a typo in the documentation, or adding a small, well-defined feature. This allows you to get familiar with the contribution workflow without overwhelming yourself.\n5.  **Fork and Clone:** Fork the project's repository to your own account and clone it locally. Make your changes in a separate branch.\n6.  **Submit a Pull Request (PR):** Once your changes are ready, submit a PR. Clearly describe your changes, why they are needed, and how they were tested. Be prepared to address feedback from project maintainers.\n7.  **Be Patient and Polite:** Maintainers are often volunteers. Respond constructively to their feedback and be patient during the review process.\n\n### Best Practices for Effective Contributions\n\n*   **Communicate:** Before starting significant work, open an issue or discuss your idea with the maintainers to ensure it aligns with the project's direction.\n*   **Test Thoroughly:** Ensure your code works as expected and doesn't introduce regressions. Document any new features or changes.\n*   **Follow Style Guides:** Adhere to the project's coding and formatting conventions.\n*   **Be Respectful:** Maintain a positive and respectful attitude in all interactions.\n\nContributing to OSINT projects is a rewarding experience that benefits both you and the community. By following these guidelines, you can make meaningful contributions and become an active participant in the advancement of open-source intelligence."
      }
    ]
  },
  "community": {
    "id": "community",
    "title": "Community Building and Engagement",
    "description": "Learn the fundamentals of building and engaging a strong online community around your OSINT efforts or projects. This lesson covers strategies for fostering interaction, managing discussions, and leveraging community feedback.",
    "level": "Intermediate",
    "estimatedTime": "15 min",
    "sections": [
      {
        "title": "Community Building and Engagement",
        "duration": "15 min",
        "content": "## Building and Engaging Your OSINT Community\n\nIn the realm of Open Source Intelligence (OSINT), information is often fragmented, complex, and requires collaborative effort to fully exploit. Building and engaging a strong online community can be a powerful force multiplier for OSINT practitioners, researchers, and enthusiasts. This lesson delves into the essential strategies for cultivating a vibrant and productive community, whether it's for sharing insights, collaborating on investigations, or seeking help and feedback.\n\n### Why Build an OSINT Community?\n\nAn engaged community offers several key benefits:\n\n*   **Knowledge Sharing:** Members can share unique perspectives, tools, techniques, and findings that an individual might miss.\n*   **Problem Solving:** Complex OSINT challenges can be tackled more effectively with a diverse group of minds.\n*   **Feedback and Validation:** Community members can offer critiques, suggest improvements, and validate findings, enhancing accuracy and reliability.\n*   **Networking and Collaboration:** It fosters connections with like-minded individuals, potentially leading to future collaborations and projects.\n*   **Resource Curation:** The community can help identify, vet, and curate valuable OSINT resources, saving everyone time.\n\n### Establishing Your Community Presence\n\nChoosing the right platform is crucial for community success. Consider where your target audience congregates and what features best suit your goals:\n\n*   **Discord/Slack:** Excellent for real-time chat, voice channels, and organized topic-based discussions. Ideal for active, ongoing conversations.\n*   **Forums (e.g., Discourse, Reddit):** Well-suited for structured, asynchronous discussions, Q&A, and long-form content. Allows for easier archiving and searching of past conversations.\n*   **Social Media Groups (e.g., Facebook, LinkedIn):** Can leverage existing networks but may have less control over platform changes and algorithms.\n*   **Dedicated Websites/Blogs with Comment Sections:** Offers a central hub for content and discussion, though engagement can be slower.\n\nWhen setting up your community space, clearly define its purpose and the types of discussions welcomed. A clear mission statement helps attract the right members and set expectations.\n\n### Cultivating Engagement\n\nOnce established, the key is to foster active participation. This requires consistent effort and strategic facilitation:\n\n*   **Set Clear Guidelines and Expectations:** Establish community rules (a code of conduct) regarding respectful communication, topic relevance, and acceptable content. This is paramount for a healthy environment.\n*   **Lead by Example:** As a community leader or moderator, be active, responsive, and respectful. Share your own insights and ask questions.\n*   **Ask Open-Ended Questions:** Pose questions that encourage thoughtful responses rather than simple yes/no answers. For example, instead of 'Is this tool good?', ask 'What are your experiences using Tool X for social media analysis, and what are its limitations?'.\n*   **Facilitate Discussions:** Gently guide conversations, connect members who might have shared interests, and summarize key points from active threads.\n*   **Encourage Member Contributions:** Actively solicit input, highlight valuable contributions, and give credit where it's due. Feature 'member spotlights' or 'best of the week' posts.\n*   **Provide Value:** Regularly share useful information, tutorials, case studies, or curated lists of resources. This gives members a reason to keep returning.\n*   **Organize Events:** Consider AMAs (Ask Me Anything) with experienced OSINT professionals, virtual workshops, or collaborative challenges.\n\n### Managing Community Challenges\n\nNo community is without its challenges. Proactive management is key:\n\n*   **Moderation:** Implement a clear moderation strategy. Address rule violations promptly and consistently, whether it's spam, off-topic content, or disrespectful behavior. Transparency in moderation decisions can build trust.\n*   **Dealing with Superlatives and Unsubstantiated Claims:** In OSINT, accuracy is critical. Discourage the use of vague, superlative language like 'the best', 'world-class', or 'always works'. Instead, encourage members to back up their statements with evidence, data, or specific examples. When a member makes a broad claim, ask clarifying questions like, 'Can you provide a source for that statistic?' or 'What specific evidence supports that claim?'. Focus on objective analysis rather than subjective opinions.\n*   **Handling Statistics Without Sources:** Similarly, statistics (e.g., '73% of users prefer X', 'This method saves Y hours') must be verifiable. If a member shares a statistic, prompt them to provide the source. If they cannot, encourage them to remove it or state it as an anecdotal observation rather than a hard fact. The goal is to maintain a high standard of evidence-based OSINT practices within the community.\n*   **Conflict Resolution:** Have a process for mediating disputes between members. Encourage respectful disagreement and focus on the facts of the OSINT subject matter.\n*   **Combating Misinformation:** Be vigilant against the spread of misinformation or disinformation. Encourage critical thinking and fact-checking among members.\n\n### Conclusion\n\nBuilding a thriving OSINT community is an ongoing process that requires dedication, clear communication, and a commitment to fostering a collaborative and evidence-based environment. By implementing these strategies, you can create a valuable space for learning, sharing, and advancing the practice of Open Source Intelligence."
      }
    ]
  },
  "resources": {
    "id": "resources",
    "title": "OSINT Resources Hub",
    "description": "A comprehensive guide to essential Open Source Intelligence (OSINT) resources, tools, and guides, categorized for efficient access and effective use in investigations.",
    "level": "Beginner",
    "estimatedTime": "15 min",
    "sections": [
      {
        "title": "OSINT Resources Hub",
        "duration": "15 min",
        "content": "## OSINT Resources Hub: Navigating the Landscape of Open Source Intelligence\n\nWelcome to the OSINT101 Resources Hub, your central point for discovering and utilizing the most effective tools, guides, and datasets available for Open Source Intelligence gathering. In the dynamic field of OSINT, staying current with the best available information is crucial. This hub is designed to provide a curated and categorized collection to streamline your research process, whether you're a seasoned investigator or just beginning your journey into uncovering publicly available information.\n\n### Understanding Our Categorization Logic\n\nTo ensure you can quickly find what you need, our resources are organized into logical categories. These include, but are not limited to:\n\n*   **Data Acquisition Tools:** Software and platforms designed for scraping, downloading, or accessing data from various online sources.\n*   **Analysis & Visualization:** Tools that help process, analyze, and present collected data in a meaningful format.\n*   **Verification & Fact-Checking:** Resources dedicated to confirming the authenticity and accuracy of information.\n*   **Specialized Datasets:** Curated collections of data relevant to specific domains (e.g., social media, public records, dark web).\n*   **Training & Guides:** Educational materials, tutorials, and best practice documents for improving OSINT skills.\n\n### Contributor Guidelines\n\nWe encourage community contributions to keep this resource hub comprehensive and up-to-date. When submitting a new resource, please adhere to the following:\n\n*   **Relevance:** Ensure the resource is directly applicable to OSINT practices.\n*   **Accuracy:** Provide correct URLs, descriptions, and any relevant metadata (like version numbers or last updated dates).\n*   **Description Quality:** Write a concise yet informative summary (2-4 sentences) detailing the resource's purpose, key features, and target audience.\n*   **Licensing & Usage:** Note any important licensing information or usage restrictions.\n\n### Evaluating Listed Materials\n\nWhile we strive for accuracy and relevance, all OSINT practitioners must exercise critical judgment. When evaluating any resource from this hub:\n\n*   **Check Freshness:** Look for version numbers, last updated dates, or publication timestamps. Older tools or guides may not reflect current online landscapes or methodologies.\n*   **Assess Depth:** Read the full description provided. Does it clearly explain what the resource does and who it's for? Does it seem to offer more than superficial information?\n*   **Verify Claims:** Be skeptical of exaggerated claims about growth or capabilities. Always cross-reference information where possible.\n*   **Consider the Source:** Understand the origin of the tool or guide. Is it from a reputable developer, research group, or individual known in the OSINT community?\n\n### Featured Resources\n\nBelow is a selection of valuable resources, regularly reviewed and updated. Please note that the digital landscape evolves rapidly; always verify the current status and applicability of any tool or guide.\n\n*   **The OSINT Framework:** A well-established, community-driven collection of OSINT tools and resources categorized by type. *Provides a broad overview of available tools across many domains. Last updated: Regularly. Best suited for: All levels.* \n*   **SpiderFoot:** An open-source intelligence automation platform that can integrate with numerous data sources. *Automates data collection and analysis from various sources. Offers both open-source and commercial versions. Last updated: Frequently. Best suited for: Intermediate to Advanced users.* \n*   **Wayback Machine (Internet Archive):** An invaluable tool for accessing archived versions of websites, allowing historical content analysis. *Essential for understanding website evolution and recovering deleted information. Last updated: Continuously. Best suited for: All levels.* \n*   **Maltego:** A powerful link analysis tool for exploring relationships between entities like people, organizations, and domains. *Visualizes complex data sets and uncovers hidden connections. Requires learning curve. Last updated: Regularly. Best suited for: Intermediate to Advanced users.* \n\nThis hub is a living document, reflecting the ongoing evolution of OSINT. We are committed to providing a reliable and practical set of resources to support your intelligence gathering efforts. Your feedback and contributions are vital to its continued growth and utility."
      }
    ]
  },
  'osint-fundamentals': {
    id: 'osint-fundamentals',
    title: 'OSINT Fundamentals',
    description: 'Learn the basics of Open Source Intelligence gathering. Master the mindset of a digital bloodhound.',
    level: 'Beginner',
    estimatedTime: '4-6 hours',
    sections: [
      {
        title: 'The Intelligence Cycle',
        duration: '30 min',
        content: `
### Understanding the Cycle
OSINT is not just "Googling with confidence." It is a repeatable process known as the Intelligence Cycle.

1. **Direction**: Decide what question actually needs answering.
2. **Collection**: Gather raw information from public sources.
3. **Processing**: Clean it up so your notes stop looking like a conspiracy corkboard.
4. **Analysis**: Turn facts into conclusions.
5. **Dissemination**: Deliver something another human can read without filing a complaint.

### Why this matters

- A clear cycle keeps you from chasing shiny nonsense.
- Process creates defensible work.
- Good structure is what separates intelligence from internet hoarding.

> The goal of intelligence is to reduce uncertainty, not to increase the number of browser tabs until your laptop sounds frightened.
        `,
        exercise: 'Draft a simple investigation plan for a hypothetical corporate research task.',
      },
      {
        title: 'Source Evaluation and Confidence',
        duration: '50 min',
        content: `
### Not all sources deserve equal respect
An OSINT source is not automatically reliable just because it is public, searchable, or wearing a respectable font.

### Questions to ask every source

- Who created it and why?
- When was it published or updated?
- Is it firsthand, secondhand, or screenshot-of-screenshot nonsense?
- Does it align with other independent sources?

### Confidence model

1. **Low confidence**: Single-source claim with weak provenance.
2. **Moderate confidence**: Supported by multiple sources, but still incomplete.
3. **High confidence**: Corroborated by independent records with minimal contradictions.

### Analyst trap

People often confuse "easy to find" with "true." That is how rumors get promoted to intelligence and then sit in reports looking smug.
        `,
        exercise: 'Take three public sources about the same topic and rank their reliability, then explain the ranking in one paragraph.',
      },
      {
        title: 'OPSEC and Anonymity',
        duration: '45 min',
        content: `
### Stay Hidden, Stay Useful
Operational Security is the part of OSINT that prevents you from announcing your presence like a foghorn.

### Core principles

- **Environment separation**: Use dedicated browser profiles or virtual machines.
- **Network hygiene**: Understand when VPNs, proxies, or managed attribution are appropriate.
- **Account discipline**: Your research sockpuppet should not somehow be logged into your personal YouTube account. That is less "tradecraft" and more "cry for help."

### Threats to watch

- Search personalization leaking your normal identity and habits.
- Accidental logins to personal accounts.
- Metadata in downloads and uploads.
- Repeated patterns that reveal a single operator.

### Professional habit

Build a repeatable environment checklist before each investigation. Boring preparation is shockingly effective, which is very rude to people who prefer drama.
        `,
        exercise: 'Set up a basic research environment using a dedicated browser profile and list the OPSEC mistakes you are trying to avoid.',
      },
      {
        title: 'Documentation and Evidence Handling',
        duration: '55 min',
        content: `
### If it is not documented, it is just a memory with good branding
Strong OSINT work is repeatable. That means someone else should be able to follow your steps without consulting a medium.

### What to capture

- URLs and access dates.
- Screenshots of volatile content.
- Search queries used.
- Notes separating facts, assumptions, and unanswered questions.

### Habits worth keeping

- Name files consistently.
- Record why a source mattered.
- Save enough context so future-you is not forced into archaeology.

### Reality check

The internet changes constantly. Posts vanish, pages get edited, and people discover privacy settings the moment your report is due. Capture early and capture cleanly.
        `,
        exercise: 'Create a mini evidence log for five findings, including source, timestamp, and why each item matters.',
      },
      {
        title: 'Advanced Google Dorking',
        duration: '60 min',
        content: `
### Mastering Search Operators
Google knows plenty, but it does not read minds, and frankly it should not.

### Core operators

- \`site:\` limits results to a specific domain.
- \`filetype:\` finds documents like PDF, XLSX, and DOCX.
- \`intitle:\` narrows results by title text.
- \`inurl:\` narrows results by URL structure.
- Quotation marks force exact phrases.

### Tactical workflow

1. Start with a precise objective.
2. Build a small query, not a monster.
3. Review the noise.
4. Tighten the query with operators.
5. Save useful combinations for later.

### Common mistake

People often write giant queries that look impressive and return garbage. Elegant search beats baroque nonsense every time.
        `,
        exercise: 'Use dorks to find public PDF documents on a sample university domain and explain why each query worked.',
      },
      {
        title: 'Analysis and Reporting Basics',
        duration: '60 min',
        content: `
### Turning findings into something useful
Collection alone is not analysis. Analysis explains what matters, why it matters, and how sure you are.

### A good basic report includes

- Objective.
- Key findings.
- Source notes and confidence level.
- Gaps, assumptions, and recommended next steps.

### What to avoid

- Dumping raw notes with no synthesis.
- Presenting guesses as fact.
- Writing like you are auditioning for a spy thriller voice-over.

> A report should help a decision-maker decide. If it mainly proves you own a keyboard, more work is required.
        `,
        exercise: 'Write a short summary from a small set of findings and clearly separate confirmed facts from your inferences.',
      },
    ],
  },
  'kali-tools': {
    id: 'kali-tools',
    title: 'Kali Linux Mastery',
    description: 'Master the tools of the trade. From nmap to Maltego, become a command-line ninja.',
    level: 'Intermediate',
    estimatedTime: '8-10 hours',
    sections: [
      {
        title: 'Reconnaissance with Nmap',
        duration: '60 min',
        content: `
### Network Discovery
Nmap is the classic multi-tool of infrastructure reconnaissance.

### What it gives you

- **Service discovery**: What is listening.
- **Version detection**: What software is likely running.
- **OS fingerprinting**: A best guess at the operating system.
- **Scripting support**: Automation for common enumeration tasks.

### Sensible workflow

1. Confirm scope.
2. Start with a minimal scan.
3. Expand only when the results justify it.
4. Log what you ran and why.

> "I launched the loudest scan possible first" is not a methodology. It is a confession.
        `,
        exercise: 'Run a stealth scan on a local test target and identify open ports, probable services, and one follow-up question you would ask next.',
      },
      {
        title: 'Web Enumeration with Dirb and WhatWeb',
        duration: '75 min',
        content: `
### Websites leak clues for free
Before anyone gets fancy, basic web enumeration already tells you a great deal about structure, technology, and forgotten content.

### Dirb helps find

- Common directories.
- Hidden admin paths.
- Backups, exports, and leftovers.

### WhatWeb helps infer

- CMS and frameworks.
- Server technologies.
- Analytics and third-party tooling.
- General signs that somebody built the site in 2014 and has not looked at it kindly since.

### Good workflow

1. Fingerprint first.
2. Enumerate content paths.
3. Preserve findings.
4. Only expand where the evidence justifies it.
        `,
        exercise: 'Fingerprint a public website, enumerate likely content paths, and identify which findings are operationally interesting versus merely untidy.',
      },
      {
        title: 'Visualizing with Maltego',
        duration: '90 min',
        content: `
### Connecting the Dots
Maltego helps you turn disconnected facts into a graph that another analyst can understand at a glance.

### Core ideas

- **Entities** are the things you care about.
- **Transforms** collect more information about those entities.
- **Graphs** reveal relationships and gaps.

### Why analysts like it

- It makes relationship-heavy investigations less painful.
- It highlights pivots you might miss in a linear notebook.
- It is much easier to brief from a graph than from forty-seven screenshots and a haunted spreadsheet.
        `,
        exercise: 'Create a Maltego graph for a public domain and map the obvious infrastructure relationships.',
      },
      {
        title: 'Traffic Analysis with Wireshark',
        duration: '80 min',
        content: `
### Packets are gossip with timestamps
Wireshark lets you inspect conversations between systems and applications in painful, beautiful detail.

### Useful analyst goals

- Identify protocols and endpoints.
- Spot clear-text data where it should not exist.
- Understand request patterns and timing.
- Confirm what an application is actually doing, not what the documentation swears it does.

### Survival advice

- Filter aggressively.
- Label interesting streams.
- Avoid staring at raw packet floods like they will eventually explain themselves out of shame.

### Example mindset

You are not collecting packets for spiritual reasons. You are answering a question about behavior, flow, or evidence.
        `,
        exercise: 'Capture a small, authorized traffic sample and explain what services and patterns you can identify from it.',
      },
      {
        title: 'Operational Workflow and Note Discipline',
        duration: '55 min',
        content: `
### Tools are only impressive when used like an adult
Kali becomes genuinely useful when you stop thinking in terms of isolated commands and start thinking in workflows.

### Basic workflow pattern

1. Define the question.
2. Choose the minimal safe tool set.
3. Capture results cleanly.
4. Correlate findings.
5. Write down what you learned before your brain replaces it with lunch plans.

### Very common beginner bug

People often run five tools, save nothing, and then attempt to reconstruct what happened from terminal scrollback and personal optimism. This is not an evidence strategy.

### Strong habit

Create per-investigation folders for commands, outputs, screenshots, and notes. Organization is not glamorous, but neither is being wrong in front of coworkers.
        `,
        exercise: 'Design a repeatable Kali workflow for a small reconnaissance task, including tool order and output handling.',
      },
    ],
  },
  'social-media': {
    id: 'social-media',
    title: 'Social Media Intelligence',
    description: 'Uncover insights from social platforms. Learn to read between the posts and tweets.',
    level: 'Advanced',
    estimatedTime: '6-8 hours',
    sections: [
      {
        title: 'SOCMINT Methodologies',
        duration: '60 min',
        content: `
### The Psychology of Social Media
Social Media Intelligence is less about "finding posts" and more about understanding behavior, timing, relationships, and intent.

### Core collection goals

- **Identity correlation**: Linking usernames, bios, profile photos, and contact hints.
- **Behavior analysis**: Spotting routines, interests, conflicts, and habits.
- **Network mapping**: Understanding who talks to whom and who keeps appearing in the same orbit.
- **Location inference**: Using landmarks, weather, language, and timing to narrow where something happened.

### Good analyst habits

- Separate what is observed from what is inferred.
- Preserve screenshots with timestamps.
- Compare across platforms before declaring a match.
- Avoid falling in love with your first theory. It is not special.

> One matching username is a clue. Three matching signals is a lead. One vibe and a blurry avatar is how analysts embarrass themselves in public.
        `,
        exercise: 'Trace a test username across three different social platforms and rank your confidence for each match.',
      },
      {
        title: 'Cross-Platform Correlation',
        duration: '75 min',
        content: `
### Building a defensible identity link
People leak patterns everywhere. Your job is to notice the boring consistencies that survive platform changes.

### Correlation signals

- Reused usernames or predictable variations.
- Repeated profile photos or cropped versions of the same image.
- Shared biography fragments, emoji habits, or suspiciously identical jokes.
- Overlapping locations, friends, employers, schools, or posting windows.

### Confidence model

1. **Low confidence**: One weak indicator.
2. **Moderate confidence**: Two or three independent indicators.
3. **High confidence**: Multiple corroborating identifiers with no major contradictions.

### Trap to avoid

Common names produce false positives at industrial scale. If your evidence is "same first name, same city, same haircut," slow down. Millions of people are committing those crimes daily.
        `,
        exercise: 'Document a confidence model for linking one public profile to another without relying on a single identifier.',
      },
      {
        title: 'Narrative and Sentiment Analysis',
        duration: '55 min',
        content: `
### Reading what people mean, not just what they typed
A feed is a stream of signals: tone, audience, grievances, alliances, and recurring themes.

### What to extract

- Dominant topics and identity markers.
- Recurring complaints, goals, and emotional triggers.
- Changes in tone before and after major events.
- Audience engagement patterns and likely influence nodes.

### Useful caution

Sentiment is messy. Sarcasm exists, irony exists, and the internet has somehow made both worse. Treat automated sentiment scoring as a clue generator, not a truth machine.

### Analyst move

Build small timelines around spikes in posting behavior. Volume changes often matter as much as content, especially when someone suddenly discovers all-caps and poor decision-making.
        `,
        exercise: 'Take a public post sequence and produce a short assessment of tone, likely audience, and one thing you still cannot safely conclude.',
      },
      {
        title: 'AI in SOCMINT',
        duration: '45 min',
        content: `
### The AI Revolution, With Adult Supervision
AI is useful for summarizing, clustering, and pattern spotting, but it is not a licensed detective and should not be treated like one.

### Good uses

- Summarizing long post threads.
- Extracting recurring entities and themes.
- Comparing writing patterns at scale.
- Identifying obvious bot-like repetition.

### Bad uses

- Treating AI output as evidence.
- Assuming image analysis is always correct.
- Letting a model invent context because you were too busy admiring the progress bar.

### Rule

AI can accelerate review. It cannot replace verification. If the model says a photo was taken in Prague but the street sign clearly says Brisbane, trust the sign. The sign has fewer feelings and therefore makes fewer weird guesses.
        `,
        exercise: 'Use an AI tool to summarize a series of public social media posts, then manually verify every major claim it makes.',
      },
    ],
  },
  'network-recon': {
    id: 'network-recon',
    title: 'Network Reconnaissance',
    description: 'Map networks like a digital cartographer. Discover the hidden topology of the internet.',
    level: 'Advanced',
    estimatedTime: '8-10 hours',
    sections: [
      {
        title: 'Passive Reconnaissance',
        duration: '60 min',
        content: `
### Staying Under the Radar
Passive reconnaissance means gathering information without directly touching the target infrastructure.

### Core sources

- **WHOIS and registrar data** for ownership clues.
- **DNS records** for service structure and subdomains.
- **Certificate transparency logs** for hostnames somebody forgot were visible.
- **Web archives** for historical content and naming conventions.

### Why passive first

- It is quieter.
- It establishes baseline context before active validation.
- It often reveals enough to narrow later steps dramatically.

> The best first move is often "read what is already public" rather than "immediately make logs somewhere light up."
        `,
        exercise: 'Perform a passive reconnaissance report on a sample company and identify three likely pivot points for deeper research.',
      },
      {
        title: 'DNS and Subdomain Enumeration',
        duration: '75 min',
        content: `
### Reading the skeleton of an organization
DNS tells you how a company names systems, separates environments, and occasionally forgets to hide test infrastructure with names like \`staging-old-final2\`.

### Signals to collect

- Naming patterns across environments.
- Mail, VPN, SSO, and remote access endpoints.
- Third-party services delegated through CNAME records.
- Forgotten subdomains exposed through certificates, archives, or scan datasets.

### What good analysts look for

- Consistency in naming conventions.
- Mergers, acquisitions, or legacy brands hiding in old zones.
- Hosted services that reveal vendors and architecture choices.
- Risky clues about internal segmentation.
        `,
        exercise: 'Map a target’s externally visible subdomains and group them by likely business function.',
      },
      {
        title: 'Infrastructure Fingerprinting',
        duration: '70 min',
        content: `
### What is this thing and why is it yelling Nginx at me
Fingerprinting helps you infer platforms, providers, and technologies from public indicators.

### Common indicators

- Response headers.
- TLS certificate details.
- HTML comments, asset paths, and JavaScript bundles.
- CDN patterns and DNS provider metadata.
- Version leakage in login portals, default pages, or forgotten dashboards.

### Practical goal

You are not trying to show off by naming every framework under the sun. You are trying to understand the probable environment well enough to support reporting, risk analysis, or the next lawful collection step.

### Reminder

Fingerprints are probabilistic. A header can lie, a WAF can obscure things, and one engineer somewhere is always doing something cursed.
        `,
        exercise: 'Fingerprint a public-facing service and explain which clues are strong, weak, and purely speculative.',
      },
      {
        title: 'Exposure Analysis and Prioritization',
        duration: '65 min',
        content: `
### Not all discoveries deserve equal panic
Recon produces a lot of findings. Most are context. Some are important. A few are the sort of thing that makes security teams inhale through their teeth.

### Prioritization model

1. Is the asset internet-facing?
2. Does it handle authentication, admin functions, or sensitive workflows?
3. Does the exposure reveal internal structure, software versions, or trust boundaries?
4. Is there historical evidence the asset was forgotten or unmanaged?

### Reporting guidance

- Separate confirmed exposure from assumed risk.
- Describe why a finding matters in operational terms.
- Recommend next steps that a real team could actually take.

An analyst who can rank findings sensibly is more valuable than one who discovers everything and explains none of it.
        `,
        exercise: 'Take a list of discovered internet-facing assets and rank them by likely investigative or defensive value.',
      },
    ],
  },
  'digital-forensics': {
    id: 'digital-forensics',
    title: 'Digital Forensics',
    description: 'Investigate digital crime scenes. CSI: Cyber edition, with more coffee.',
    level: 'Advanced',
    estimatedTime: '12-15 hours',
    sections: [
      {
        title: 'Evidence Preservation',
        duration: '90 min',
        content: `
### The Chain of Custody
In forensics, how you collect evidence matters as much as the evidence itself.

### Non-negotiables

- **Write blockers** prevent accidental changes during acquisition.
- **Hashing** proves integrity before and after imaging.
- **Documentation** records every action, handler, and timestamp.
- **Repeatability** ensures another examiner could follow your path without interpretive dance.

### Professional truth

If you cannot explain where the evidence came from, who touched it, and whether it changed, you do not have evidence. You have a problem wearing a name tag.
        `,
        exercise: 'Create a forensic image of a test USB drive, record the acquisition steps, and verify the resulting hash.',
      },
      {
        title: 'Disk Imaging and Triage',
        duration: '95 min',
        content: `
### Start broad, preserve first, panic never
Disk triage is about preserving the whole picture while still finding urgent facts quickly.

### Typical triage targets

- User directories and downloads.
- Browser artifacts and saved sessions.
- Recently modified files.
- External storage traces.
- Suspicious archives, scripts, and executables.

### Triage mindset

- Do not change what you can avoid changing.
- Document assumptions before you forget them.
- Separate urgent leads from full analysis tasks.

### Very common mistake

People love to poke around directly on original media because it feels fast. It is also how evidence gets altered and examiners get very unpopular very quickly.
        `,
        exercise: 'Design a triage checklist for a workstation suspected of being used in data exfiltration.',
      },
      {
        title: 'Timeline Reconstruction',
        duration: '80 min',
        content: `
### Telling the story of what happened
Forensic analysis gets much stronger when you stop looking at artifacts in isolation and start building a timeline.

### Timeline sources

- File system timestamps.
- Browser history and download records.
- Shortcut files, recent documents, and shellbags.
- Event logs and authentication events.
- External device connection records.

### What a timeline reveals

- Sequence of user activity.
- Gaps, bursts, and anomalies.
- Possible staging before an incident.
- Contradictions between claims and actual system behavior.

> A timeline is the closest thing digital evidence has to a witness who never gets tired, only weird.
        `,
        exercise: 'Build a short incident timeline from mixed browser, file, and log artifacts and identify one gap needing more evidence.',
      },
      {
        title: 'Artifact Analysis and Reporting',
        duration: '85 min',
        content: `
### Artifacts are clues, not magical truth crystals
Artifacts need context. A deleted file, a USB event, and a browser session each mean more when interpreted together.

### Common artifact families

- Browser history, cookies, and cached content.
- Link files and recent file references.
- Registry and operating system configuration traces.
- Application logs and crash records.
- Recycle bin, temp files, and remnants of attempted cleanup.

### Reporting rule

- State what the artifact is.
- State what it suggests.
- State how confident you are.
- State what would strengthen or weaken that conclusion.

Forensic reporting should read like calm expertise, not like a thriller narrator who has just discovered a hexadecimal plot twist.
        `,
        exercise: 'Write a short forensic finding from three related artifacts, including confidence level and recommended next steps.',
      },
    ],
  },
  'people-profiling': {
    id: 'people-profiling',
    title: 'People Profiling',
    description: 'Learn to gather information about individuals ethically. Become a digital detective.',
    level: 'Intermediate',
    estimatedTime: '6-8 hours',
    sections: [
      {
        title: 'Public Records Research',
        duration: '60 min',
        content: `
### The Paper Trail
Public records are the backbone of individual investigations.

- **Voter Registration**: Finding addresses and affiliations.
- **Property Records**: Mapping assets and locations.
- **Business Filings**: Identifying corporate connections.

### Rule of thumb

Public records are useful because they are boring, structured, and less likely to be filtered through personal branding. In other words, they are the opposite of social media.
        `,
        exercise: 'Find the registered agent for a sample local business and note the source reliability.',
      },
      {
        title: 'Identity Resolution and Disambiguation',
        duration: '70 min',
        content: `
### The internet contains many people with the same name and at least half of them are inconvenient
People profiling starts with determining whether multiple records actually point to the same person.

### Strong identifiers

- Full legal name.
- Date of birth or approximate age.
- Location history.
- Employment or education overlap.
- Email, phone, or consistent usernames.

### Disambiguation rules

- Look for corroborating clusters, not one-off matches.
- Be suspicious of common names.
- Track contradictions explicitly.
- Never force a match because the story would be tidier that way.

> "Probably the same guy" is a useful thought to investigate. It is not a conclusion, and it certainly is not a line you want in a final report.
        `,
        exercise: 'Compare two similar public profiles and document whether they likely refer to the same person, including the gaps in your reasoning.',
      },
      {
        title: 'Social and Professional Mapping',
        duration: '75 min',
        content: `
### People leave trails through other people
Associates, coworkers, family links, alumni networks, and repeated interactions often reveal more than a self-written bio ever will.

### What to map

- Professional roles and career progression.
- Repeated collaborators or business partners.
- Social clusters and mutual associations.
- Public affiliations like clubs, boards, events, or volunteer work.

### What this helps with

- Verifying identity.
- Understanding influence and access.
- Identifying likely corroborating sources.
- Spotting conflicts between claimed and observed background.

### Caution

Association is not guilt, intent, or secret membership in a dramatic underground cabal. Sometimes two people just worked at the same place and also both enjoyed posting about brunch.
        `,
        exercise: 'Build a simple relationship map around a public subject and identify which links are confirmed, probable, or merely adjacent.',
      },
      {
        title: 'Timeline Building for Individuals',
        duration: '65 min',
        content: `
### A person is easier to understand when events stop floating around randomly
Timelines reveal consistency, gaps, transitions, and suspiciously convenient omissions.

### Common timeline anchors

- Education dates.
- Employment changes.
- Property or business filings.
- Public interviews, conference appearances, or press mentions.
- Social posts tied to known life events.

### Why timelines matter

- They expose contradictions.
- They help verify identity.
- They reveal periods needing deeper research.
- They stop analysts from describing a life story as if it emerged fully formed from one LinkedIn page.

### Practice tip

Use dated public records wherever possible. Human memory is soft. Filing systems are often rude, but at least they are consistent.
        `,
        exercise: 'Build a short timeline for a public person from three different source types and mark any unresolved gaps.',
      },
      {
        title: 'Ethics, Privacy, and Reporting',
        duration: '60 min',
        content: `
### Just because you can learn something does not mean you should collect everything
People-focused investigations require tighter judgment than generic company recon.

### Key rules

- Stay within scope.
- Avoid unnecessary sensitive data collection.
- Document lawful purpose and proportionality.
- Separate hard facts from interpretive assessment.

### Reporting standard

- State what was found.
- State how it was verified.
- State why it is relevant.
- State any ethical or legal caveats.

### Professional reminder

The goal is an accurate, defensible profile, not a nosy scrapbook. If your process starts feeling like celebrity gossip with better note-taking, recalibrate immediately.
        `,
        exercise: 'Write a short profiling summary that includes findings, confidence, caveats, and one explicit privacy consideration.',
      },
    ],
  },
  'social-media-investigations': {
    id: 'social-media-investigations',
    title: 'Social Media Investigations',
    description: 'Master the art of analyzing social platforms for intelligence. Handle large volumes without losing your mind.',
    level: 'Intermediate',
    estimatedTime: '5-7 hours',
    sections: [
      {
        title: 'Platform Architecture and Data Sources',
        duration: '45 min',
        content: `
### Each platform is a different country with different rules
Understanding what data each platform exposes helps you work smarter.

### What platforms typically reveal

- Profile information and bios.
- Posts, comments, and interactions.
- Images with metadata.
- Followers, following, and connection lists.
- Activity patterns and posting times.
- Sometimes deleted content through archives.

### Platform-specific considerations

- **LinkedIn**: Professional history, connections, company pages.
- **Twitter/X**: Public discourse, engagement patterns, followers.
- **Facebook**: Groups, events, check-ins, broader social graph.
- **Instagram**: Visual content, location tags, Stories.
- **TikTok**: Video content, trends, younger demographics.

### Collection tip

Use platform search features before going to external tools. Internal search is often more complete and less legally ambiguous.
        `,
        exercise: 'Document the publicly visible information available from each major social platform about a public figure.',
      },
      {
        title: 'Username Correlation and Cross-Platform Analysis',
        duration: '60 min',
        content: `
### People reuse usernames across platforms like they reuse passwords, which is its own problem
Username patterns are fingerprints.

### Username investigation workflow

1. Identify the target username on one platform.
2. Use username correlation tools to find same handle elsewhere.
3. Verify accounts are the same person through overlap analysis.
4. Map the full digital footprint.

### Tools that help

- Namechk, WhatsMyName, and similar aggregators.
- Google dorking for username patterns.
- Cross-referencing with image recognition on profile photos.

### Verification rule

Same username does not guarantee same person. Confirm through:
- Profile photo comparison.
- Bio or description overlap.
- Mutual connections or follows.
- Content pattern consistency.

> If it looks too neat, it might be a fan account, parody, or someone with excellent mimicry skills and bad intentions.
        `,
        exercise: 'Take one username and map it across five platforms, noting verification steps for each match.',
      },
      {
        title: 'Content Analysis and Image Verification',
        duration: '70 min',
        content: `
### A picture is not always worth a thousand accurate words
Image analysis separates real from manipulated and current from old.

### What to check

- **EXIF data**: Camera, date, GPS coordinates if preserved.
- **Reverse image search**: Find where else the image appears.
- **Visual analysis**: Shadows, reflections, inconsistent pixels.
- **Metadata patterns**: File naming, modification history.

### Geolocation from images

- Landmarks, signage, architecture.
- License plates and regional vehicle features.
- Street view comparison.
- Weather and seasonal indicators.

### Verification ladder

1. Can you confirm the image is real?
2. Can you confirm it is from the claimed time and place?
3. Can you confirm it relates to the claimed subject?

Each step requires more evidence. Do not skip steps because the story is convenient.
        `,
        exercise: 'Take an image from social media and walk through the full verification process, documenting each finding.',
      },
      {
        title: 'Behavioral Patterns and Sentiment Analysis',
        duration: '55 min',
        content: `
### How people write is as revealing as what they write
Writing style, tone, and engagement patterns reveal things people do not intentionally share.

### What to analyze

- Posting frequency and timing.
- Writing style and vocabulary.
- Engagement patterns with others.
- Emotional range and triggers.
- Changes in behavior over time.

### Sentiment basics

- Overall tone of posts (positive, negative, neutral).
- Changes in sentiment that might indicate events.
- Difference between professional and personal accounts.

### Caution

Behavioral analysis is suggestive, not definitive. You can observe patterns. You cannot reliably read minds. Resist the temptation to over-interpret.
        `,
        exercise: 'Analyze a public figure\'s last 30 posts for behavioral patterns and sentiment trends.',
      },
    ],
  },
  'dark-web-research': {
    id: 'dark-web-research',
    title: 'Dark Web Research',
    description: 'Learn to safely navigate and research dark web sources. Understand the landscape without becoming a cautionary tale.',
    level: 'Advanced',
    estimatedTime: '6-8 hours',
    sections: [
      {
        title: 'Dark Web Fundamentals',
        duration: '45 min',
        content: `
### The dark web is not a mysterious underworld. It is a network with different access requirements
Understanding what the dark web is and is not.

### Definitions that matter

- **Surface web**: Indexed by search engines, accessible to everyone.
- **Deep web**: Not indexed, requires credentials or has paywalls. Includes medical records, academic databases, corporate intranets.
- **Dark web**: Requires specific software (Tor, I2P) to access. Often associated with anonymity.

### Legitimate dark web uses

- Journalism and source protection.
- Whistleblower platforms.
- Privacy-conscious communication.
- Academic research in restricted regions.
- Security research.

### Dark web risks

- Illegal content is more common.
- Honeypots and law enforcement operations exist.
- Malware distribution is frequent.
- Exit nodes can be monitored.

> Your Tor browser does not make you invisible. It makes you look like everyone else using Tor, which is a different kind of visibility.
        `,
        exercise: 'Document the legitimate use cases for dark web access that apply to your work context.',
      },
      {
        title: 'Access and Navigation',
        duration: '60 min',
        content: `
### Safe access requires proper preparation and realistic expectations
Setting up and using dark web resources without becoming a statistic.

### Access requirements

- Tor browser (from official sources only).
- Virtual machine for isolation.
- No JavaScript.
- Separate identity from normal browsing.
- Realistic threat model.

### Finding sources

- Directories like the Hidden Wiki (with skepticism).
- Specific marketplace indexes.
- Forums and communities relevant to your research.
- Reddit communities that monitor dark web activity.

### Navigation tips

- URLs are random hashes, not memorable.
- Sites disappear frequently.
- Verify URLs through multiple sources.
- Use search engines like Ahmia for Tor sites.

### Operational security

- Never use personal identifiers.
- Do not install plugins or extensions.
- Do not stream content that might be malicious.
- Do not use your real email even if somehow offered.
        `,
        exercise: 'Set up a safe research environment and document three legitimate dark web resources relevant to OSINT research.',
      },
      {
        title: 'Intelligence Sources and Collection',
        duration: '70 min',
        content: `
### Dark web sources for legitimate OSINT
What you can actually find that is useful and legal.

### Source categories

- **Forums**: Discussions about topics relevant to your research.
- **Marketplaces**: Not for buying, but for understanding what is being sold.
- **Leaks and dumps**: Stolen data exposure, credential leaks.
- **Governments and NGOs**: Whistleblower sites, secure tips.
- **Journals and archives**: Academic and journalistic sources.

### Collection workflows

1. Identify relevant sources through surface web references.
2. Access and navigate to verify legitimacy.
3. Document findings with source URLs and access dates.
4. Analyze for relevance and corroboration.

### What to avoid

- Do not create accounts unless necessary.
- Do not use the same handle as your real identity.
- Do not download content without proper isolation.
- Do not engage in any交易的.

> The goal is observation and documentation, not participation. Becoming part of the community you are studying is a failure state.
        `,
        exercise: 'Identify and document three dark web sources that could support legitimate OSINT research in your field.',
      },
      {
        title: 'Verification and Source Validation',
        duration: '65 min',
        content: `
### Dark web sources require more verification, not less
The same source evaluation principles apply, with additional skepticism.

### Verification layers

1. **Corroboration**: Does this align with other sources?
2. **Authenticity**: Is this actually the source it claims?
3. **Freshness**: Is this current or recycled content?
4. **Motivation**: What does the operator gain?

### Specific checks

- Look for signs of impersonation or parody.
- Verify through surface web discussions.
- Check when the site was first indexed.
- Note any political or ideological bias.

### Handling uncertainty

- If you cannot verify, note it explicitly.
- Do not present dark web findings without context.
- Consider whether the finding survives without the dark web source.

> "I found it on the dark web" is not inherently impressive. It is a starting point for verification, not an ending point for conclusions.
        `,
        exercise: 'Take a dark web source and apply the full verification stack, documenting what you could and could not confirm.',
      },
    ],
  },
  'geospatial-intelligence': {
    id: 'geospatial-intelligence',
    title: 'Geospatial Intelligence (GEOINT)',
    description: 'Learn to analyze geographic data for investigations. Connect locations to patterns and patterns to people.',
    level: 'Intermediate',
    estimatedTime: '5-6 hours',
    sections: [
      {
        title: 'Introduction to GEOINT',
        duration: '40 min',
        content: `
### Location is a thread that connects almost everything
Geospatial intelligence connects people, events, and places in ways that text alone cannot.

### What GEOINT covers

- Satellite and aerial imagery analysis.
- Mapping platforms and geographic data.
- Location data from devices and transactions.
- Travel patterns and movement analysis.
- Geotagged social media.

### Practical applications

- Verifying alibis through location data.
- Mapping corporate or criminal infrastructure.
- Tracking event attendance or presence.
- Understanding supply chains and logistics.
- Connecting subjects to locations.

### Tools landscape

- **Commercial**: Google Earth, Bing Maps, Mapbox.
- **Satellite imagery**: Sentinel Hub, USGS Earth Explorer, commercial APIs.
- **Mapping**: OpenStreetMap, ArcGIS, QGIS.
- **Social media**: Geotagged post analysis.
        `,
        exercise: 'Document three ways GEOINT could support an investigation in your typical work context.',
      },
      {
        title: 'Geolocation from Images',
        duration: '55 min',
        content: `
### Every image tells you where it was taken if you know how to ask
Geolocation from images is a learnable skill that improves with practice.

### Visual indicators

- **Landmarks**: Mountains, buildings, monuments, signage.
- **Architecture**: Regional building styles, construction patterns.
- **Vegetation**: Climate zones, seasonal changes, native vs. planted.
- **Infrastructure**: Road markings, vehicle plates, utility patterns.
- **Shadows and sun**: Approximate latitude and time of day.

### Workflow

1. Examine image for distinctive features.
2. Search for location-indicating details.
3. Use mapping tools to compare.
4. Verify through multiple indicators.

### Common mistakes

- Confusing similar-looking locations.
- Ignoring metadata that contradicts visual assumptions.
- Forgetting about photo editing or old images.

> If you think you recognize the background of a selfie, verify it. "That looks like the beach by my hotel" is not intelligence. It is wishful thinking with pixels.
        `,
        exercise: 'Geolocate three images from public sources using only visible indicators, then check your work.',
      },
      {
        title: 'Mapping and Visualization',
        duration: '50 min',
        content: `
### A map turns data into evidence
Mapping tools help you visualize location data and see patterns.

### What to map

- Known addresses and properties.
- Associated locations (work, home, vacation).
- Event locations and travel routes.
- Device ping locations.
- Social media geotags.

### Visualization techniques

- Pin maps for point data.
- Heat maps for density.
- Route visualization for travel patterns.
- Time-series animation for movement.

### Tools to consider

- **Simple**: Google My Maps, OsmAnd.
- **Intermediate**: ArcGIS Online, Mapbox.
- **Advanced**: QGIS (free), commercial GIS platforms.

### Presentation note

Maps communicate fast. Make sure your map legend, sources, and timestamp are clear. A map without context is just art.
        `,
        exercise: 'Create a simple map showing five locations related to a public figure and note any patterns you observe.',
      },
    ],
  },
  'domain-investigations': {
    id: 'domain-investigations',
    title: 'Domain and Website Investigations',
    description: 'Learn to investigate websites and domains for intelligence. Trace ownership, hosting, history, and connections.',
    level: 'Beginner',
    estimatedTime: '4-5 hours',
    sections: [
      {
        title: 'Domain Fundamentals',
        duration: '40 min',
        content: `
### Every website has a story
Domains reveal ownership, hosting, registration, and connection patterns that websites themselves do not volunteer.

### What domains reveal

- **Registration information**: Name, organization, contact details (often redacted but sometimes not).
- **Name servers**: DNS configuration reveals infrastructure relationships.
- **Registrar**: The company that registered the domain. Some registrars are more privacy-focused than others.
- **Registration dates**: When the domain was created. New domains are sometimes suspicious.
- **Expiration**: Domains about to expire may indicate abandoned infrastructure.

### Tools for domain research

- **WHOIS databases**: Basic registration lookup.
- **DNS lookup tools**: Traffic routes and name server relationships.
- **Screenshot tools**: Visual confirmation of what the domain shows.
- **Historical records**: What the domain used to point to.

### First steps

1. Run a basic WHOIS lookup.
2. Check DNS records for current configuration.
3. Take screenshots of current content.
4. Check historical records if available.
        `,
        exercise: 'Research a public website and document all publicly visible registration and technical information.',
      },
      {
        title: 'Website Content Analysis',
        duration: '45 min',
        content: `
### The website itself is evidence
What a website says, how it is built, and what it contains all matter.

### What to analyze

- **Content**: What does the site actually say? Does the content match the stated purpose?
- **Technology**: What platform is it built on? WordPress, custom, SaaS? This reveals capability and potential vulnerabilities.
- **Metadata**: Title tags, descriptions, author information in pages.
- **Links**: Internal and external links reveal relationships and structure.
- **Images**: Logos, stock photos, custom graphics reveal professionalism and potential connections.

### Hosting analysis

- **IP address**: What server is it on?
- **Hosting provider**: Some providers are more lenient about content.
- **ASN**: Autonomous System Number reveals network ownership.
- **Geolocation**: Where is the server physically located?

### Content patterns

- **Stock photo usage**: Generic corporate photos suggest low investment.
- **Grammar and spelling**: Professional sites have professional content.
- **Contact information**: Real contact details suggest legitimate business.
- **Missing pages**: 404 errors reveal site structure and abandoned pages.
        `,
        exercise: 'Analyze a website and document findings about its legitimacy, technology stack, and any suspicious indicators.',
      },
      {
        title: 'Historical Analysis',
        duration: '50 min',
        content: `
### Websites change. History tells the story
Current content is only part of the picture. Historical records reveal what the site used to be.

### Wayback Machine

The Internet Archive preserves website history:

- **Archive search**: Find all captured versions.
- **Timeline view**: See how the site changed over time.
- **Screenshot comparison**: Visual changes reveal purpose shifts.
- **Deleted content**: What was there before is sometimes more revealing than what is there now.

### Domain age and history

- **Newly registered domains**: Suspicious for high-stakes content.
- **Recently changed content**: Sudden pivots warrant scrutiny.
- **Abandoned domains**: Domains pointing nowhere may indicate discarded projects.

### Common patterns

- **Typosquatting**: Domains that look like famous brands with slight misspellings.
- **Brand impersonation**: Sites that mimic legitimate businesses.
- **Flag domains**: Infrastructure for campaigns or operations.
- **Pivot history**: Sites that changed purpose multiple times.

### Warning signs

- Content that suddenly appeared after long dormancy.
- Domains registered recently for "established" businesses.
- sites that redirect to different content over time.
        `,
        exercise: 'Check the Wayback Machine for a website and document how its content and purpose have changed over time.',
      },
    ],
  },
  'cryptocurrency-investigations': {
    id: 'cryptocurrency-investigations',
    title: 'Cryptocurrency Investigations',
    description: 'Learn blockchain analysis basics for tracing transactions, identifying wallets, and connecting crypto activity to real-world entities.',
    level: 'Advanced',
    estimatedTime: '6-8 hours',
    sections: [
      {
        title: 'Blockchain Fundamentals',
        duration: '55 min',
        content: `
### Blockchains are transparent ledgers that everyone can read
Unlike traditional finance, most blockchains are public. This creates opportunities for investigators.

### What blockchains show

- **Transactions**: Every transaction is recorded publicly.
- **Wallet addresses**: Public keys that receive and send funds.
- **Transaction amounts**: How much moved between addresses.
- **Timestamps**: When transactions occurred.
- **Transaction links**: Inputs and outputs connecting addresses.

### What blockchains do not show

- **Real identities**: Addresses are pseudonymous.
- **Complete transaction purpose**: The blockchain does not explain why.
- **Off-chain activity**: What happened before funds hit the blockchain.

### Key concept: Pseudonymity

Addresses are not names, but they can be connected to identities through:

- Exchange records (KYC required).
- Direct transactions to identified entities.
- Address reuse patterns.
- IP addresses if transaction broadcast was not anonymized.

### Major blockchains

- **Bitcoin**: Oldest, most analyzed, most recognized.
- **Ethereum**: Smart contracts add complexity.
- **Stablecoins**: USDT, USDC pegged to fiat.
- **Layer 2 networks**: Faster but adds complexity.

### Tools

- **Block explorers**: Blockchain.com, Etherscan, etc.
- **Chain analysis platforms**: Chainalysis, Elliptic for advanced work.
- **Clustering tools**: Identify when multiple addresses belong to same entity.
        `,
        exercise: 'Trace a Bitcoin transaction through a block explorer and document the path from source to destination.',
      },
      {
        title: 'Transaction Tracing',
        duration: '70 min',
        content: `
### Following the money through the blockchain
Transaction tracing connects addresses and identifies patterns.

### Basic tracing workflow

1. **Identify the starting address**: The address you are investigating.
2. **Map incoming transactions**: Where did funds come from?
3. **Map outgoing transactions**: Where did funds go?
4. **Repeat recursively**: Follow the trail as far as possible.
5. **Identify clusters**: Group related addresses.

### Transaction patterns

- **Direct transfers**: Simple send from one address to another.
- **Mixing services**: Attempts to obscure the trail.
- **Multiple outputs**: One transaction sending to several addresses.
- **Change addresses**: Leftover funds returned to sender.
- **Smart contract interactions**: Interacting with decentralized exchanges, DeFi protocols.

### Clustering

Addresses are often controlled by the same entity:

- **Common spending**: Multiple inputs in one transaction suggest same owner.
- **Change detection**: Identify which output is change address.
- **Behavioral patterns**: Similar timing, amounts, destinations.

### Attribution databases

Commercial tools maintain databases of:

- Known exchange deposits and withdrawals.
- Identified entity wallets.
- High-risk services (mixers, darknet markets).
- Documented seizure records.

### Limitations

- **Mixers and tumblers**: Break the trail deliberately.
- **Cross-chain bridges**: Move between blockchains.
- **Privacy coins**: Monero, Zcash designed to obscure.
- **剥洋葱**: Multiple layers make tracing expensive.
        `,
        exercise: 'Trace a real cryptocurrency transaction and document the full path, identifying any services or entities encountered.',
      },
      {
        title: 'Real-World Attribution',
        duration: '65 min',
        content: `
### From addresses to people
The hard part: connecting blockchain activity to real identities.

### Attribution methods

**Exchange discovery**: When a wallet interacts with a regulated exchange, KYC records may exist.

**Direct disclosure**: People sometimes share addresses publicly.

**Transaction patterns**: Similar behavior to identified wallets.

**Business relationships**: Payments to known businesses create records.

### Compliance context

Financial investigations often require:

- **SARs**: Suspicious Activity Reports on certain transactions.
- **Travel Rule**: Information that travels with transfers above thresholds.
- **Exchange cooperation**: Legal process to obtain KYC records.

### Attribution confidence

1. **Confirmed**: Direct link to known identity.
2. **Probable**: Strong circumstantial evidence.
3. **Possible**: Some indicators but insufficient for conclusion.
4. **Unknown**: Cannot be attributed with available information.

### Practical attribution workflow

1. Trace transactions as far as possible.
2. Identify services encountered.
3. Determine which services require KYC.
4. Assess whether legal process is viable.
5. Document findings with confidence levels.

### Legal considerations

Cryptocurrency investigations may involve:

- Money transmission regulations.
- Securities law.
- Tax obligations.
- Sanctions violations.

Document findings, do not advise on crossing lines.
        `,
        exercise: 'Document a realistic cryptocurrency attribution scenario including tracing steps, attribution methods, and confidence levels.',
      },
    ],
  },

  'digital-identity-analysis': {
    id: 'digital-identity-analysis',
    title: 'Digital Identity Analysis',
    description: 'Learn how to reconstruct a person\'s digital footprint from publicly available information across social media, professional networks, and public records.',
    level: 'Intermediate',
    estimatedTime: '3-4 hours',
    sections: [
      {
        title: 'The Digital Identity Concept',
        duration: '25 min',
        content: `
### What is a Digital Identity?

Every person online leaves traces. Email addresses, social media accounts, forum posts, professional profiles, public records, and even "deleted" content. Together, these traces form a digital identity - a composite picture of who someone is online.

### The Three Pillars

1. **Self-declared Identity**: What people say about themselves (LinkedIn, personal websites, social bios).
2. **Behavioral Identity**: What people do online (posts they engage with, groups they join, content they share).
3. **Attributed Identity**: What others say or what public records show (news mentions, court records, property records).

### Why This Matters for OSINT

- Corroborating or contradicting claims
- Finding alternative contact methods
- Building target profiles for further investigation
- Identifying potential risks or credibility issues

### Legal Boundaries

Always respect privacy laws in your jurisdiction. Public information is not the same as ethically collected information. Know the difference.
        `,
        exercise: 'Pick a public figure and document their digital identity across 5 different platforms. Note what each platform reveals.',
      },
      {
        title: 'Email Address Analysis',
        duration: '30 min',
        content: `
### Email as an Identifier

An email address is often the single most valuable piece of OSINT data. It can reveal:
- Name patterns (john.doe@, jdoe@, john.doe1985@)
- Provider clues (gmail vs. custom domain vs. disposable service)
- Organization context (company emails reveal structure)

### Verification Tools

- **Hunter.io** - Find email patterns for organizations
- **HaveIBeenPwned** - Check if emails appear in known breaches
- **Emailrep.io** - Reputation and risk scoring
- **Dehashed** - Search breached credentials

### Cross-Platform Discovery

Search email addresses across social platforms:
- Gravatar - profile images tied to email
- Social search - many platforms allow email-based lookup
- Custom search: "[email] site:linkedin.com"

### Disposable vs. Permanent

Disposable emails (GuerrillaMail, 10MinuteMail) suggest anonymity efforts. Permanent emails (Gmail, Outlook, custom domains) are more useful for tracking.
        `,
        exercise: 'Take a known email address and document every platform you can associate with it. Write up your findings chain.',
      },
      {
        title: 'Username Correlation',
        duration: '30 min',
        content: `
### Username as a Cross-Platform Key

Many people reuse usernames across platforms. A single username can lead to profiles on dozens of services.

### Automated Search Tools

- **WhatsMyName** (WebBreacher) - 400+ site username checker
- **Sherlock** - CLI username search across social networks
- **Maigret** - Advanced Sherlock fork with profile extraction
- **Namechk** - Quick web-based check

### Common Patterns

| Pattern | Example | Reliability |
|---------|---------|-------------|
| Exact match | cyberjake on every platform | High - same person likely |
| Slight variant | cyberjake2024, cyberjake_ | Medium-high |
| Reverse | jakecyber | Medium |
| Random suffix | cyberjake_x7f92 | Low - could be coincidence |

### Manual Verification

Never trust automated tools alone. Always:
1. Visit the identified profile manually
2. Compare bio details, photo, posting style
3. Check for cross-references (same email in bio, same links)
4. Look at join dates and activity patterns
        `,
        exercise: 'Pick a username, run it through Sherlock/WhatsMyName, then manually verify the top 3 matches.',
      },
      {
        title: 'Social Media Profile Analysis',
        duration: '35 min',
        content: `
### What Profiles Reveal

Social media profiles contain a wealth of structured and unstructured data:

**LinkedIn:**
- Employment history and timeline
- Education, certifications, skills
- Recommendations and endorsements
- Groups and connections

**Facebook / Meta:**
- Friends, family connections, locations
- Interests, groups, events
- Check-ins and travel history
- Photos and tagged content

**Instagram:**
- Location data in posts and stories
- Social graph (followers/following overlap)
- Temporal patterns in posting
- Engagement with specific topics

### Profile Analysis Workflow

1. **Capture** - Screenshot or archive the profile (archive.is, singlefile)
2. **Extract** - Pull all visible data into a structured format
3. **Cross-reference** - Match data points across platforms
4. **Verify** - Check claims against other sources
5. **Document** - Record sources and confidence levels

### Red Flags

- Recently created profiles with minimal activity
- Inconsistent details across platforms
- Overly generic bios ("I like technology and coffee")
- Photos that appear on multiple unrelated profiles
        `,
        exercise: 'Analyze a LinkedIn profile and an Instagram profile belonging to the same person. Document discrepancies and consistencies.',
      },
      {
        title: 'Public Records Integration',
        duration: '25 min',
        content: `
### Types of Public Records

- **Property records**: Ownership, valuations, tax history
- **Court records**: Civil and criminal cases, judgments
- **Business registrations**: LLC filings, officers, addresses
- **Professional licenses**: State certification boards
- **Voter registration**: Where available publicly
- **Marriage and divorce records**: County records

### Search Strategies

Start broad, narrow down:
1. Full name + state → narrow to county
2. Add middle initial for disambiguation
3. Cross-reference addresses from other sources
4. Use approximate age or known associates

### Connecting the Dots

Public records often provide the missing link between:
- A known email and a physical address
- A username and a legal name
- A social profile and a business entity

### Documentation Requirements

- Record the exact search terms used
- Note which jurisdiction/agency provided the data
- Save screenshots or copies of the records
- Include date and time of access
        `,
        exercise: 'Take a fictional or public figure persona and find what public records exist for them in your state or county. Document the search path and results.',
      },
    ],
  },

  'osint-reporting': {
    id: 'osint-reporting',
    title: 'OSINT Reporting and Presentation',
    description: 'Transform raw intelligence into actionable reports. Learn structured analytical techniques, source citation standards, and how to present findings to different audiences.',
    level: 'Intermediate',
    estimatedTime: '3-5 hours',
    sections: [
      {
        title: 'The Intelligence Product Framework',
        duration: '20 min',
        content: `
### Why Reporting Matters

Good OSINT is invisible if the report is bad. Your analysis is only as valuable as your ability to communicate it.

### Types of Intelligence Products

- **Spot Report**: Quick, single-finding alert (email, chat)
- **Situation Brief**: Multi-source summary of a current situation
- **Deep Dive**: Comprehensive analysis with methodology
- **Threat Assessment**: Risk-focused analysis with recommendations
- **Periodic Summary**: Regular updates on a monitored subject

### The Pyramid Principle

Start with the conclusion, then support with evidence:

1. **Bottom line up front** - One sentence stating the key finding
2. **Supporting evidence** - Facts that support the conclusion
3. **Methodology** - How you found the evidence
4. **Confidence assessment** - How sure you are
5. **Gaps and next steps** - What you don't know yet
        `,
        exercise: 'Take a finished OSINT investigation and rewrite the summary using the Pyramid Principle.',
      },
      {
        title: 'Source Citation Standards',
        duration: '25 min',
        content: `
### Why Citations Matter

Without citations, your work is opinion. With proper citations, your work is intelligence.

### Citation Components

Every source citation should include:
- **URL or location** - Where you found it
- **Date accessed** - Because content changes
- **Capture evidence** - Screenshot, archive, or local copy
- **Search query used** - How you found it
- **Confidence in source** - Official vs. secondary vs. anonymous

### Archiving Sources

Always archive because sources disappear:
- **archive.is / archive.today** - Web page snapshots
- **Wayback Machine** - Historical captures
- **Local HTML saves** - Full page with assets
- **Screenshots** - Quick visual evidence

### Citation Formats

For informal intelligence work, a structured but flexible format works best:

> Source: Facebook profile "John Doe" (facebook.com/john.doe.123)
> Accessed: 2026-05-15
> Archived: archive.is/abc123
> Note: Profile photo shows person at [location] based on background landmarks
        `,
        exercise: 'Take 3 web sources from a previous OSINT exercise and create proper citations with archives.',
      },
      {
        title: 'Analytical Techniques',
        duration: '30 min',
        content: `
### Structured Analytical Techniques

Move beyond intuition to reproducible analysis.

**Analysis of Competing Hypotheses (ACH):**
1. List all possible explanations
2. List evidence for and against each
3. Identify the hypothesis with the most supporting evidence
4. Track how your confidence changes

**Devil's Advocacy:**
Actively argue against your own conclusion. This helps identify:
- Confirmation bias
- Missing evidence
- Alternative explanations you dismissed too quickly

**Indicators and Warnings:**
Identify observable events that would confirm or deny your hypothesis before they happen. If you expect X, what would you see?

### Common Analytical Biases

- **Confirmation bias**: Seeking evidence that supports your view
- **Anchoring**: Over-relying on the first piece of information
- **Availability bias**: Overweighting recent or memorable examples
- **Groupthink**: Consensus overriding critical thinking
        `,
        exercise: 'Take a previous investigation finding and run it through ACH with at least 3 competing hypotheses.',
      },
      {
        title: 'Audience-Tailored Reporting',
        duration: '25 min',
        content: `
### Know Your Reader

Different audiences need different formats:

**Executive / Decision-Maker:**
- 1-page executive summary
- Bottom line first
- Actionable recommendations only
- No methodology details

**Technical / Analyst:**
- Detailed methodology
- Source citations
- Raw data appendices
- Full analytical reasoning

**Legal / Compliance:**
- Chain of custody documentation
- Admissible evidence standards
- Strict privacy/compliance boundaries
- Signed affidavits where needed

### The One-Page Report

A classic intelligence format:
1. Classification header
2. Subject line
3. Key finding (1-2 sentences)
4. Supporting evidence (3-5 bullet points)
5. Confidence assessment
6. Recommendations or next steps
7. Source line with date
        `,
        exercise: 'Take one investigation finding and write three versions: one for a CEO, one for a fellow analyst, and one for legal/compliance.',
      },
      {
        title: 'OPSEC in Reporting',
        duration: '20 min',
        content: `
### Protecting Sources and Methods

Your report may be shared beyond its intended audience.

**What NOT to include:**
- Your full methodology (unless needed for legal)
- Tools and techniques that reveal capabilities
- Information about ongoing operations
- Identifying details about sources

**Classification and Handling:**
- Mark reports with appropriate sensitivity labels
- Use distribution lists, not open sharing
- Encrypt sensitive attachments
- Track who has received each version

### The Clean Report

A clean report protects both the subject and the investigator:
- Remove metadata from documents
- Avoid identifying details about your process
- Redact sensitive information clearly
- Use a consistent, professional format

### When to Walk Away

Not every finding needs to be a report. Ask:
- Does this meet the original collection requirement?
- Is the information sufficiently verified?
- Would publishing this cause harm?
- Is there a responsible disclosure path?
        `,
        exercise: 'Review a previous OSINT exercise report. Redact or remove any information that could compromise OPSEC or source protection.',
      },
    ],
  },

  'breach-data-analysis': {
    id: 'breach-data-analysis',
    title: 'Breach Data Analysis',
    description: 'Learn how to search, analyse, and interpret data from known security breaches for OSINT investigations. Understand credential stuffing, exposure assessment, and timeline analysis.',
    level: 'Intermediate',
    estimatedTime: '2-3 hours',
    sections: [
      {
        title: 'Understanding Breach Data',
        duration: '20 min',
        content: `
### What Breach Data Contains

Data breaches leak various types of information:
- **Credentials**: Email + password combinations (sometimes plaintext, sometimes hashed)
- **Personal data**: Names, addresses, phone numbers, dates of birth
- **Financial data**: Credit card numbers, bank account details
- **Internal communications**: Emails, messages, documents
- **Source code**: Proprietary code, API keys, internal infrastructure details

### Common Sources

- **HaveIBeenPwned**: Largest public breach aggregation (12B+ records)
- **Dehashed**: Searchable breach database with cracked passwords
- **IntelX**: Dark web data search engine
- **Public Telegram channels**: Leak announcement groups
- **RaidForums / Breached**: (historical, now defunct or migrated)

### Legal and Ethical Boundaries

- Accessing stolen data may be illegal in your jurisdiction
- Viewing leaked credentials of a living person may violate privacy laws
- Never use breached passwords to access accounts
- Document your source and the legal basis for accessing it
        `,
        exercise: 'Using HaveIBeenPwned, check 3 email addresses you own and document what breaches they appear in.',
      },
      {
        title: 'Credential Analysis Workflow',
        duration: '30 min',
        content: `
### From Breach to Intelligence

1. **Identify relevant breaches** for your target's email/username
2. **Extract credential pairs** (email:password) where available
3. **Analyse password patterns** - reuse rates, complexity, themes
4. **Correlate across breaches** - same password used on multiple platforms?
5. **Assess exposure risk** - what accounts are vulnerable?

### Password Analysis

Passwords themselves can reveal intelligence:
- Personal details (birth years, names, pet names) - confirms other data points
- Professional themes (company name-based passwords)
- Reuse patterns - suggests which additional accounts might share passwords

### Password Cracking Context

- Many breached passwords are stored as hashes
- Tools like Hashcat can crack weak hashes with GPU/cloud
- Already-cracked databases (e.g., Dehashed) save time
- Ethical note: cracking for intelligence purposes has legal implications
        `,
        exercise: 'Analyse a known breached credential (use a test/exercise dataset, not real). What patterns or intelligence can you extract from the password?',
      },
      {
        title: 'Timeline and Correlation',
        duration: '25 min',
        content: `
### Building a Breach Timeline

When multiple breaches contain the same target:
1. Chronologically order the breaches by date
2. Track what information was exposed at each point
3. Identify: did later breaches expose credentials that were changed after earlier breaches?

### Cross-Breach Correlation

- Same email in multiple breaches indicates active usage
- Password changes between breaches suggest security awareness
- Corporate email in personal breaches suggests poor opsec
- New email addresses appearing in recent breaches suggest migration patterns

### Assessment Report Template

A structured breach analysis report includes:
- **Subject**: Target email/username
- **Breaches found**: Names, dates, data types exposed
- **Exposure severity**: Credentials, PII, financial, none
- **Password analysis**: Reuse patterns, complexity, changes over time
- **Recommendations**: Password changes, account review, monitoring
        `,
        exercise: 'Take a known public breach dataset and map out a timeline for a single target across multiple breaches.',
      },
    ],
  },

  'telegram-osint': {
    id: 'telegram-osint',
    title: 'Telegram OSINT Investigations',
    description: 'Master the art of gathering intelligence from Telegram - one of the most valuable OSINT sources for monitoring groups, channels, and user activity.',
    level: 'Intermediate',
    estimatedTime: '2-3 hours',
    sections: [
      {
        title: 'Why Telegram Matters for OSINT',
        duration: '15 min',
        content: `
### Telegram as an Intelligence Goldmine

Telegram has become the platform of choice for:
- Organised groups and communities
- News and information channels
- Leak and whistleblower publications
- Criminal and hacking forums
- Activist networks and protest coordination

### What Makes Telegram Different

- **Public channels** with unlimited subscribers
- **Searchable history** (not always possible on other platforms)
- **Bots** that can automate collection and analysis
- **Forwarding chains** that reveal information spread
- **Metadata-rich messages** (timestamps, forwarding info)

### Key OSINT Use Cases

- Monitoring threat actor communications
- Tracking disinformation campaigns
- Following leak publications in real time
- Investigating organised crime coordination
- Mapping information spread through forwarding chains
        `,
        exercise: 'Find 3 public Telegram channels in a topic area of interest. Document their purpose, subscriber count, and posting frequency.',
      },
      {
        title: 'Telegram Search and Discovery',
        duration: '20 min',
        content: `
### Finding Relevant Channels

- **Telegram's built-in search**: Search within the app
- **Lyzem.com**: Telegram search engine
- **TGStat / Telemetr**: Channel analytics and discovery
- **Google dorks**: site:t.me + keyword searches
- **Cross-referencing**: Follow forward chains from known channels

### Telegram Search Operators

- Exact phrase matching for specific topics
- Date range filtering for recent activity
- Language filtering to narrow results
- Forward chain analysis to find source channels

### Channel Metadata Collection

For each discovered channel, collect:
- Channel name and username
- Subscriber count and growth trend
- Post frequency and engagement patterns
- Forwarded content analysis
- Admin/moderator identification (where visible)
        `,
        exercise: 'Using Lyzem and Telegram search, find 5 channels related to a specific topic. Document discovery methodology.',
      },
      {
        title: 'Automated Collection and Monitoring',
        duration: '25 min',
        content: `
### Collection Tools

- **Telegram API**: Official API for bot and user-based collection
- **Telethon**: Python library for interacting with Telegram API
- **TGCLI**: Command-line interface for Telegram
- **Telegram Bots**: Create monitoring bots for specific channels
- **RSS bridges**: Convert Telegram channels to RSS feeds

### Setting Up Collection

1. Create a Telegram application (my.telegram.org)
2. Get API ID and API hash
3. Use Telethon to connect as a user or bot
4. Join target channels
5. Listen for new messages or scrape history

### Storage and Analysis

- Store messages in a structured database (SQLite, Postgres)
- Tag and categorise by topic, sentiment, urgency
- Create alerts for specific keywords or patterns
- Track forwarding chains and information propagation
- Export for further analysis or report generation

### OPSEC Considerations

- Use dedicated accounts for collection (not your personal account)
- Be aware that Telegram can see all API activity
- Rate limits apply - don't trigger spam detection
- Some channels may be private and require invitation
- Document your collection methodology for reproducibility
        `,
        exercise: 'Set up a Telethon script that connects to the Telegram API and collects the last 50 messages from a public channel.',
      },
    ],
  },

  'geolocation-osint': {
    id: 'geolocation-osint',
    title: 'Geolocation and Imagery OSINT',
    description: 'Master the techniques of determining locations from photos, videos, and descriptive information. From EXIF data to visual clues, learn to pinpoint locations with precision.',
    level: 'Advanced',
    estimatedTime: '3-4 hours',
    sections: [
      {
        title: 'Visual Geolocation Fundamentals',
        duration: '25 min',
        content: `
### The Art of Photo Geolocation

Determining where a photo was taken is one of the most valuable OSINT skills. It combines visual analysis, geographic knowledge, and methodical research.

### Key Visual Clues

- **Landscape**: Mountains, coastlines, vegetation types, soil colour
- **Infrastructure**: Road markings, power lines, lamp posts, signage
- **Architecture**: Building styles, rooflines, window types, construction materials
- **Language**: Street signs, billboards, shop names, license plates
- **Lighting**: Sun position, shadow angles, weather conditions
- **Culture**: Clothing, vehicle models, business names, flags

### The Reverse Image Search Workflow

1. **Google Images**: Best for well-known locations
2. **Yandex Images**: Often better for non-Western locations
3. **TinEye**: Finds exact matches and modified versions
4. **Bing Visual Search**: Good alternative when others fail
5. **Social media platforms**: Some have built-in reverse search
        `,
        exercise: 'Find 5 photos online with unknown locations. Use visual clues only (no metadata) to determine where each was taken.',
      },
      {
        title: 'EXIF and Metadata Analysis',
        duration: '20 min',
        content: `
### What EXIF Data Reveals

Photos contain embedded metadata that can reveal:
- **GPS coordinates**: Exact location (if enabled)
- **Timestamp**: When the photo was taken
- **Device info**: Camera make, model, software
- **Orientation**: Which direction the photographer faced
- **Thumbnails**: Sometimes embedded thumbnails of edited versions

### Tools for EXIF Extraction

- **exiftool**: The gold standard for metadata extraction
- **Jeffrey's Image Metadata Viewer**: Web-based viewer
- **ExifData.com**: Quick online check
- **Python PIL/Pillow**: Programmatic extraction

### Limitations

- Social media platforms strip EXIF data on upload
- Most phones require explicit permission to share location
- Screenshots contain no useful location data
- Some cameras allow disabling GPS tracking
- Professional photographers often strip metadata intentionally
        `,
        exercise: 'Take a photo with your phone (with location enabled) and extract all EXIF data using exiftool or a web viewer.',
      },
      {
        title: 'Advanced Techniques',
        duration: '30 min',
        content: `
### Beyond the Photo

- **Video frame extraction**: Extract key frames from videos for geolocation
- **360-degree imagery**: Compare with Google Street View history
- **Shadow analysis**: Calculate approximate time and location from shadow angles (suncalc.org)
- **Star mapping**: Identify astronomical features in night photos
- **Audio analysis**: Background sounds can reveal location (bird species, traffic patterns, languages)

### Cross-Referencing Platforms

- **Google Earth**: Historical imagery comparison
- **Wikimapia**: User-contributed location labels
- **OpenStreetMap**: Detailed geographic data
- **Mapillary / KartaView**: Crowd-sourced street-level imagery
- **PeakFinder**: Mountain silhouette identification

### Documentation

- Save your search path: every search, every result, every dead end
- Create a \`geolocation log\` with timestamps and URLs
- Annotate photos with your findings
- Record confidence levels for each determination

### Practice Resources

- **GeoGuessr**: Gamified geolocation practice
- **Reddit r/whereisthis**: Community geolocation challenges
- **Bellingcat's Geolocation Guide**: Professional methodology reference
- **Quiztime / @quiztime**: Regular geolocation puzzles on Twitter/X
        `,
        exercise: 'Pick a photo from Reddit r/whereisthis and attempt to locate it using at least 3 different clues. Document your methodology.',
      },
    ],
  },
  'osint-methodology': {
    id: 'osint-methodology',
    title: 'OSINT Methodology & Structured Workflow',
    description: 'Build a repeatable investigation workflow that keeps you organised, focused, and defensible.',
    level: 'Beginner',
    estimatedTime: '3-4 hours',
    sections: [
      {
        title: 'Why Methodology Matters',
        duration: '20 min',
        content: `
### Methodology is the difference between a lucky find and a reliable result

OSINT without methodology is just enthusiastic googling. A structured approach ensures you can reproduce results, defend conclusions, and hand off work to someone else without them weeping.

### What good methodology gives you

- **Repeatability**: Someone else can follow your steps and reach similar conclusions.
- **Coverage**: A checklist prevents forgetting whole categories of sources.
- **Defensibility**: Your notes show how you got from question to answer.
- **Efficiency**: You stop retracing steps because you recorded them the first time.

### Common methodology frameworks

### The Intelligence Cycle (Traditional)
1. **Direction** - What question are we answering?
2. **Collection** - Gather raw data from appropriate sources.
3. **Processing** - Clean, translate, format, deduplicate.
4. **Analysis** - Turn data into judgements.
5. **Dissemination** - Deliver the product.

### The PEAK Model (Practical for SMBs)
1. **Prepare** - Scope, tools, legal boundaries.
2 **Explore** - Broad search, open questions, hypothesis generation.
3. **Analyze** - Filter, verify, connect dots.
4. **Know** - Report, recommend, close or continue.

### Your First Investigation Plan

Every investigation should start with five minutes of planning:

1. **One-sentence objective**: "I need to find the registered owner of example.com."
2. **Source list**: WHOIS, Wayback Machine, LinkedIn, Crunchbase.
3. **Tools needed**: Terminal, browser, screenshot tool.
4. **Time budget**: 2 hours. If it takes longer, reassess.
5. **Stop condition**: "When I have a name and address, I am done."

> Proper planning is how you avoid opening 47 tabs and realising 90 minutes later you forgot what you were looking for.
        `,
        exercise: 'Write a one-page investigation plan for researching a company you choose. Include the objective, source list, tools, time budget, and stop condition.',
      },
      {
        title: 'The OSINT Pyramid',
        duration: '30 min',
        content: `
### A mental model for how to prioritise sources and effort

The OSINT pyramid visualises the relationship between volume, effort, and confidence.

### Bottom layer - Broad collection (High volume, low effort)
- Google searches, social media scans, public directories.
- Generates leads, not conclusions.

### Middle layer - Structured collection (Medium volume, medium effort)
- Targeted searches with operators, platform-specific queries.
- Generates data points that can be compared and cross-referenced.

### Top layer - Verified intelligence (Low volume, high effort)
- Cross-sourced corroboration, direct source confirmation.
- Generates findings you would present to a decision-maker.

### How to use it

1. Start at the bottom and work up.
2. Do not present a finding as "high confidence" if you never left the bottom layer.
3. The pyramid reminds you that most of your work time is on the bottom and middle - and that is healthy.

### Trap to avoid

Analysts sometimes skip the foundation and try to jump straight to verified intelligence. That is how you get confident-but-wrong conclusions that look great in a report and fall apart under scrutiny.
        `,
        exercise: 'Take a research question and map what you would do at each layer of the pyramid. Write one paragraph per layer.',
      },
      {
        title: 'Documentation Standards',
        duration: '25 min',
        content: `
### You did not find it if you cannot show your work

Good documentation is what separates intelligence from "trust me, I checked." It also saves your future self from asking "which screenshot was that again?"

### What to document for every finding

- **Timestamp**: When you found it (not when you wrote it down).
- **Source URL**: Permanent link or archive link.
- **Snapshot**: Screenshot or archived copy of the page as it appeared.
- **Context**: Why you collected it and what you think it means.
- **Confidence**: How reliable is this specific piece of evidence?

### Tools for documentation

- **Obsidian** or **Notion**: Structured notes with linking.
- **Hunchly**: Browser extension that auto-captures pages during investigations.
- **Wayback Machine**: Archive pages that might change or disappear.
- **Simple text files**: Better than nothing, and nothing to break.

### Naming convention that saves sanity

Use a consistent format for files:
YYYY-MM-DD_CaseName_SourceType_Description.ext

Example:
2026-07-25_AcmeCorp_WHOIS_registrant-contact.png

This way sorting by name also sorts by date and case, and you can find files without opening every folder like a digital archaeologist.

> Documentation is not optional. It is the only part of the work that survives to be questioned later.
        `,
        exercise: 'Take one finding from a previous exercise and document it properly using the timestamp-source-context-confidence format described above.',
      },
    ],
  },

  'email-osint': {
    id: 'email-osint',
    title: 'Email & Username Intelligence',
    description: 'Trace email addresses and usernames across platforms to build identity profiles and connection maps.',
    level: 'Beginner',
    estimatedTime: '3-4 hours',
    sections: [
      {
        title: 'Email Address Anatomy',
        duration: '20 min',
        content: `
### An email address is not just a contact. It is a clue.

Every email address contains structure, provider hints, and sometimes the person's name, handle, or employer.

### Parts of an email address
- **Local part** (before @): May contain name, initials, birth year, or a handle.
- **Domain**: Reveals email provider, company, or custom domain.
- **Plus addressing**: Some providers treat "name+tag@domain.com" as the same inbox - useful for tracking who sold your data.

### What the domain tells you
- **Gmail / Outlook / Yahoo**: Personal addresses, harder to trace.
- **Company domain**: Likely work address - reveals employer.
- **Custom domain**: Self-hosted or small business. WHOIS the domain for more.
- **Disposable providers** (Mailinator, 10MinuteMail): Likely throwaway, low signal.

### Quick email validation
Before investing time investigating an email, check if it exists:

- **Emailhippo** or **Hunter.io**: Verify if the address format is valid.
- **Have I Been Pwned**: Check if the address appears in known breaches (useful for pivoting).
- **Google search** in quotes: See if the address appears on public pages.

> An email address that leads to a dead disposable domain is usually not worth the effort. Move on to higher-signal sources.
        `,
        exercise: 'Take 5 email addresses from public sources and analyse each one: provider, likely type (personal/work), any name clues in the local part, and any domains you can WHOIS.',
      },
      {
        title: 'Username Correlation',
        duration: '35 min',
        content: `
### People reuse usernames. Relentlessly. It is the gift that keeps giving.

Most people use the same username across multiple platforms. Finding one profile can lead to a dozen others.

### Username search tools

- **WhatsMyName** (web): Checks hundreds of sites for a username.
- **Namechk**: Checks username availability across platforms (inverted logic).
- **Sherlock**: Python CLI tool for username enumeration.
- **Maigret**: Enhanced Sherlock with more sites and better output.

### Manual username patterns

Not everyone uses the exact same username. Look for variations:

- FirstnameLastname: johndoe, john.doe
- InitialLastname: jdoe, j.doe
- With numbers: johndoe87, jdoe1987
- With underscores or dots: john_doe, john.doe.OSINT
- Reversed: doejohn, doej

### What to check with each username

- **Social media**: LinkedIn, Twitter/X, Instagram, Facebook, Reddit, GitHub
- **Professional**: AngelList, Crunchbase, Medium, Substack
- **Communication**: Telegram, Discord, WhatsApp (public groups)
- **Historical**: Wayback Machine, old forum posts, archived social media

### Cross-platform correlation checklist

- [ ] Same profile photo across platforms?
- [ ] Same bio or tagline?
- [ ] Same links (website, Linktree)?
- [ ] Overlapping followers or connections?
- [ ] Activity patterns that match (same timezone, same topics)?
        `,
        exercise: 'Pick a username you rarely use (or a colleague\'s public username) and run it through 3 different tools or manual searches. Document which platforms returned results and what the profiles revealed.',
      },
      {
        title: 'Breach Data and Pivoting',
        duration: '30 min',
        content: `
### When an email or username appears in a breach, the real investigation begins

Breach data reveals associated emails, passwords (hashed or plaintext), IP addresses, and sometimes physical addresses. This is some of the highest-signal OSINT data available.

### How to check breach data

- **Have I Been Pwned**: Check if an email appears in known breaches.
- **DeHashed** (paid): Search by email, username, IP, or name.
- **IntelX**: Dark web intelligence search engine.
- **Snusbase**: Data breach search engine.

### Ethical boundaries

Accessing breach data is legally and ethically sensitive:
- **Do** use it to help someone secure their accounts.
- **Do** use it in legitimate investigations with proper authorisation.
- **Do not** access or share breached passwords for personal accounts you are not authorised to investigate.
- **Do not** download or distribute breach databases.

### Pivoting from breach data

Breach data is not a destination - it is a launch point:

1. Email → Breach → New email found → Search new email
2. Email → Breach → Password hash → Correlate with other accounts
3. Email → Breach → IP address → Geolocate or check for patterns
4. Username → Breach → Associated email → WHOIS domain → Company

### Automation consideration

When you find one email in a breach, there are often more. Search related patterns - same domain, same name variations - before concluding the search.

> Breach data is powerful and dangerous. Use it proportionally, lawfully, and with a clear purpose that you can articulate to anyone who asks.
        `,
        exercise: 'Take a test email address (yours) and check it on Have I Been Pwned. Document what breaches it appears in, what data was exposed, and identify at least one pivot point you could investigate further.',
      },
    ],
  },

  'business-osint': {
    id: 'business-osint',
    title: 'Company & Organisational Intelligence',
    description: 'Research companies, their structure, leadership, and digital footprint using open sources.',
    level: 'Beginner',
    estimatedTime: '3-5 hours',
    sections: [
      {
        title: 'Company Structure Research',
        duration: '30 min',
        content: `
### Every company leaves a paper trail. The trick is knowing where to look.

Company research is one of the most common OSINT tasks - for competitive intelligence, due diligence, investigations, or sales prospecting.

### Start with the legal entity

- **Company registers**: ASIC (Australia), Companies House (UK), SEC (US), OpenCorporates (global).
- **Business registration numbers**: ABN, ACN, EIN, VAT - search these for associated entities.
- **Trading names**: A company may operate under multiple trading names. Search all of them.

### Leadership and people

- **LinkedIn**: Search for current and former employees. Look for job titles that reveal structure.
- **Crunchbase**: Funding, founding dates, investor information.
- **Zoominfo / Apollo**: Contact data (often a paid tier, but free tiers provide limited useful data).
- **Board members**: Search for directors on company registry sites.

### Financial health signals

- **Annual reports**: Public companies file these. Look for revenue trends, risk factors, and subsidiary mentions.
- **News mentions**: Search for recent funding rounds, layoffs, acquisitions.
- **Job postings**: Rapid hiring suggests growth; hiring freezes suggest trouble.
- **Glassdoor / Indeed**: Employee reviews - biased but useful for culture and leadership signals.

> A company that has been registered for 10 years with no website, no LinkedIn, and no reviews may be a shelf company. That is itself a finding.
        `,
        exercise: 'Research a local business online. Find its registration number, registered address, key personnel (CEO, directors), and approximate revenue range. Document all sources.',
      },
      {
        title: 'Digital Footprint Mapping',
        duration: '35 min',
        content: `
### A company's digital footprint reveals infrastructure, priorities, and vulnerabilities

Every company leaves digital traces - some intentional, some accidental - that paint a picture of their operations.

### Website analysis

- **WHOIS**: Who registered the domain? When? Through which registrar?
- **SSL certificate transparency**: Search crt.sh for all certificates issued to the domain - reveals subdomains and hosting infrastructure.
- **DNS records**: MX (email provider), NS (nameservers), TXT (SPF, DKIM, verification records).
- **Technology stack**: BuiltWith, Wappalyzer - what CMS, analytics, and tools the site uses.

### Social media footprint

- **Which platforms** does the company have a presence on?
- **Posting frequency and engagement** - reveals marketing priorities.
- **Employee advocacy** - do employees share company content?
- **Customer interactions** - how does the company handle complaints or questions?

### Third-party mentions

- **Review sites**: Google Maps, Yelp, Trustpilot.
- **Industry forums**: Discussions about the company or its products.
- **News and press**: Media coverage, press releases, interviews.
- **Partnership pages**: Companies listed as partners or clients.

### What to build

Create a single-page company profile with:
- Legal identity and structure
- Key personnel
- Digital assets (domains, social profiles)
- Technology stack
- Recent news or signals
- Confidence rating for each data point
        `,
        exercise: 'Pick a medium-sized business you are familiar with and map its complete digital footprint: domains, social profiles, tech stack, third-party mentions, and employee presence on LinkedIn. Create a one-page summary.',
      },
      {
        title: 'Supply Chain and Relationships',
        duration: '25 min',
        content: `
### A company is not an island. Its relationships reveal its real shape.

Company-to-company connections often matter more than the company itself. Understanding who owns, supplies, partners with, and competes with a target provides critical context.

### Ownership and corporate structure

- **Parent companies**: Who owns the target? Who does the target own?
- **Subsidiaries**: List known subsidiaries and their jurisdictions.
- **Joint ventures**: Formal partnerships between companies.
- **Former names**: Companies rebrand. Search old names for historical context.

### Supplier and vendor intelligence

- **Public contracts**: Government contracts reveal suppliers and pricing.
- **Partnership announcements**: Press releases mentioning technology partners.
- **Customer references**: Case studies on vendor sites (reveal who the target's customers are).
- **Reverse supplier search**: Search for the target as a customer on other companies' case studies.

### Competitor mapping

- **Direct competitors**: Same product, same market.
- **Indirect competitors**: Same problem, different solution.
- **Emerging competitors**: Startups in the same space.
- **Competitive signals**: Pricing changes, hiring patterns, product launches, regulatory filings.

### Relationship visualisation

For complex investigations, create a relationship map:
- Nodes = Companies and people
- Edges = Ownership, employment, investment, partnership
- Annotate with confidence levels and sources

> The most valuable insight in company OSINT is often not about the company itself, but about who is connected to it.
        `,
        exercise: 'Take the company you researched in the previous exercise and identify at least 3 relationships: ownership, partnership, supplier, or competitor. Create a simple text-based relationship map.',
      },
    ],
  },
}

// =============================================================================
// Compatibility exports - referenced by template pages copied from AI Hub.
// Empty for now; populate if/when OSINT adds those features.
// =============================================================================

export const latestUpdates: Array<{ id: string; title: string; description: string; date: string }> = []
export const aiTools: Array<{ id: string; name: string; description: string; category: string }> = []
export const learningPaths: Array<{ id: string; title: string; description: string; modules: string[] }> = [
  {
    id: "rookie-track",
    title: "Rookie Track",
    description: "Start here. No prior OSINT experience required - just curiosity.",
    modules: ["osint-fundamentals", "domain-investigations", "osint-methodology", "email-osint", "business-osint"],
  },
  {
    id: "sleuth-track",
    title: "Sleuth Track",
    description: "Level up with intermediate techniques: social media, geospatial, reporting, and breach analysis.",
    modules: ["people-profiling", "social-media-investigations", "geospatial-intelligence", "digital-identity-analysis", "osint-reporting", "breach-data-analysis", "telegram-osint"],
  },
  {
    id: "analyst-track",
    title: "Analyst Track",
    description: "Master-class techniques: network recon, dark web, crypto investigations, and advanced geolocation.",
    modules: ["kali-tools", "social-media", "network-recon", "digital-forensics", "dark-web-research", "cryptocurrency-investigations", "geolocation-osint"],
  },
]

// Template also imports these shapes in parts of the UI
export const ALL_MODULES = Object.values(learningModules)
export const MODULE_MAP = learningModules
export function getModuleById(id: string) { return learningModules[id] ?? null }
