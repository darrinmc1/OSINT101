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
    "title": "OSINT Resources",
    "description": "A curated list of essential Open Source Intelligence (OSINT) resources, tools, and platforms to enhance your investigative capabilities.",
    "level": "Beginner",
    "estimatedTime": "15 min",
    "sections": [
      {
        "title": "OSINT Resources",
        "duration": "15 min",
        "content": "## Essential OSINT Resources for Investigators\n\nIn the realm of Open Source Intelligence (OSINT), having access to the right resources can be the difference between a successful investigation and a dead end. This guide aims to provide a comprehensive overview of valuable tools, platforms, and methodologies that are crucial for any OSINT practitioner, from beginners to seasoned professionals.\n\n### Understanding OSINT Categories\n\nOSINT resources can be broadly categorized to help navigate the vast landscape of available information. Understanding these categories will help you tailor your approach to specific investigative needs.\n\n1.  **Search Engines & Aggregators:** These are your primary tools for uncovering publicly available information. Beyond standard search engines like Google, specialized aggregators can provide deeper insights.\n2.  **Social Media Intelligence (SOCMINT):** Tools and techniques focused on extracting information from social media platforms.\n3.  **Mapping & Geolocation Tools:** Resources that help in identifying and verifying the geographical location of individuals, events, or objects.\n4.  **Data Breach & Identity Tools:** Platforms that can help identify if personal information has been compromised in data breaches.\n5.  **Image & Video Analysis Tools:** Resources for analyzing visual media, including reverse image search, metadata extraction, and forensic analysis.\n6.  **Specialized Databases & Archives:** Access to public records, government databases, and historical archives.\n\n### Key OSINT Tools and Platforms\n\nNavigating the OSINT landscape requires familiarity with a range of tools. Here are some indispensable resources:\n\n#### Search Engines & Aggregators\n\n*   **Google Dorks:** Advanced search operators that allow you to refine Google searches for specific information. Mastering dorking is fundamental.\n    *   **Example:** `site:twitter.com \"keyword\" filetype:pdf`\n*   **DuckDuckGo:** A privacy-focused search engine that can sometimes yield different results than mainstream engines.\n*   **Bing:** Another major search engine that can uncover information missed by Google.\n*   **Wayback Machine (archive.org):** An invaluable tool for viewing archived versions of websites, crucial for understanding historical context or finding deleted content.\n\n#### Social Media Intelligence (SOCMINT)\n\n*   **TweetDeck/X Pro:** For real-time monitoring and advanced searching on X (formerly Twitter).\n*   **Social Bearing:** Analyzes X (Twitter) accounts, providing insights into engagement, hashtags, and mentions.\n*   **Facebook Search (limited):** While Facebook has restricted its public API, advanced search techniques can still yield results.\n*   **LinkedIn (advanced search):** Essential for professional networking and identifying individuals' career paths and connections.\n\n#### Mapping & Geolocation Tools\n\n*   **Google Maps/Earth:** The foundational tools for visualising locations, street view analysis, and geographical context.\n*   **Wikimapia:** A collaborative mapping project that provides detailed geographical information.\n*   **SunCalc.org:** Helps determine the position of the sun at a specific time and location, useful for verifying timestamps in images or videos.\n*   **TimeandDate.com:** Provides sunrise/sunset times, time zones, and astronomical data, aiding in geolocation.\n\n#### Data Breach & Identity Tools\n\n*   **Have I Been Pwned?:** A crucial resource for checking if email addresses or phone numbers have been compromised in known data breaches.\n*   **IntelTechniques.com (Michael Bazzell):** Offers extensive lists of tools and resources, often categorized for ease of use.\n\n#### Image & Video Analysis Tools\n\n*   **Google Images / TinEye / Yandex Images:** Reverse image search engines to find the origin and other instances of an image.\n*   **ExifTool:** A command-line utility for reading, writing, and editing meta information (EXIF data) in files.\n*   **YouTube DataViewer:** Helps extract metadata from YouTube videos.\n\n#### Specialized Databases & Archives\n\n*   **Public Records Databases:** Varies by country and region, but often includes property records, business registrations, and court documents.\n*   **Internet Archive:** Beyond the Wayback Machine, it hosts books, music, software, and more.\n*   **Wikipedia / Wikidata:** Often a starting point for understanding entities and their connections.\n\n### Developing an OSINT Methodology\n\nHaving a robust methodology is as important as having the right tools. A structured approach ensures efficiency and thoroughness:\n\n1.  **Define the Objective:** Clearly understand what information you are trying to find.\n2.  **Identify Information Sources:** Determine which categories of resources are most likely to contain the needed data.\n3.  **Formulate Search Queries:** Craft effective search terms, leveraging advanced operators and dorks.\n4.  **Execute Searches & Gather Data:** Systematically collect relevant information from identified sources.\n5.  **Verify Information:** Cross-reference findings from multiple sources to ensure accuracy and reliability.\n6.  **Analyze & Synthesize:** Connect the dots between disparate pieces of information to build a coherent picture.\n\n### Ethical Considerations and Best Practices\n\nAlways operate within legal and ethical boundaries. Respect privacy laws and terms of service of platforms. Document your findings meticulously and avoid making assumptions. Continuous learning is key in the ever-evolving field of OSINT."
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
  "sherlock-username-search": {
    id: "sherlock-username-search",
    title: "Sherlock: One Username, 400 Doors",
    description: "Check where a username exists across hundreds of sites, then do the part the tool can't: decide which hits are actually the same person.",
    level: "Beginner",
    estimatedTime: "35 min",
    sections: [
      {
        title: "What Sherlock actually does",
        duration: "8 min",
        content: `
### A doorbell, not a detective

Sherlock takes one username and knocks on a few hundred websites to see whether a profile page answers. Despite the name, it doesn't deduce anything. It checks whether \`https://site.example/<username>\` returns a profile or a "no such user" page, and gives you a list of URLs.

That's useful, because people reuse handles the way they reuse passwords: often, and with no thought for whoever comes along later. One handle can point you to a GitHub account, a forum account from 2014, and a music profile its owner has forgotten.

### How the check works

For each site, Sherlock's data file stores a URL pattern and a rule for spotting a missing account. That rule is usually one of these:

- **Status code:** a 404 means no account; a 200 means an account exists.
- **Error message:** the page loads either way, but includes text like "This user does not exist".
- **Redirect:** a missing user gets bounced to the home page.

If the rule passes, Sherlock reports the URL as found. It doesn't log in, read private data or contact the account holder. It loads a public URL, the same as you would in a browser, just a few hundred times faster.

### Where it sits in OSINT101

Sherlock is one of the 12 tools in this course and the one we start with. It's the oldest and best-known username checker, its code is readable, and it fails in ways that teach you something. Maigret, WhatsMyName and the others in later lessons use the same idea with more sites and better parsing.

> Rule of thumb: Sherlock tells you where a username **exists**. It doesn't tell you who owns it. That second question is your job, and it's where most beginners get it wrong.
        `,
      },
      {
        title: "Walkthrough on your own handle",
        duration: "12 min",
        content: `
### Set the ground rules first

You'll run this on **your own username** or on a **test persona you create for this course**. You won't run it on your ex, your neighbour or the person who cut you off in traffic. That isn't a practice target; it's a privacy complaint waiting to happen.

To build a test persona, pick a handle that's unlikely to exist, such as \`pip_tadwell_osint101\`. Then create two or three free accounts with it (for example GitHub and Reddit) using a fresh email address you control. You now have ground truth: you know exactly which accounts are real.

### Install

Sherlock needs Python 3. The tidy way is \`pipx\`:

\`\`\`bash
pipx install sherlock-project
sherlock --version
\`\`\`

If \`pipx\` isn't installed, \`python3 -m pip install --user sherlock-project\` works too. Expect it to grumble about your PATH at least once. That's tradition.

### Run it

\`\`\`bash
sherlock pip_tadwell_osint101 --csv --timeout 15
\`\`\`

- \`--csv\` writes \`pip_tadwell_osint101.csv\` next to the usual \`.txt\` output, ready for a spreadsheet.
- \`--timeout 15\` stops one slow site from holding up the whole run.
- To test a single site, add \`--site GitHub\`.

Sherlock prints a \`[+]\` line for each site that seems to have the account. A run takes a minute or two.

### Read the results like an analyst

Open the CSV and add three columns: **Expected? (Y/N)**, **Opened and checked? (Y/N)** and **Verdict**. Then go through every hit.

1. **Open the URL in a browser.** Does a real profile load, or a login wall, a cookie banner or a "user not found" page that returns 200 anyway?
2. **Compare against ground truth.** You created the accounts, so you know which hits are yours.
3. **Mark each hit** as *confirmed mine*, *exists but not mine*, or *false positive (no account)*.

With your real handle, the "exists but not mine" column fills up fast. Short or common handles are shared by plenty of strangers. If your handle is \`dazza\`, Sherlock has found most of Queensland.
        `,
      },
      {
        title: "Limits and false positives",
        duration: "7 min",
        content: `
### Where Sherlock goes wrong

- **False positives:** some sites return a normal page for any username, or show a challenge page (Cloudflare, captcha) that looks like success. Sherlock marks the account as found; the account doesn't exist.
- **False negatives:** sites change their layout, block automated requests, or need a login to show profiles. A missing hit doesn't prove there's no account.
- **Rotting rules:** each site rule breaks when that site redesigns. Sherlock's data file is updated, but not every day, so a check that worked last month may now be wrong.
- **Same name, different person:** the big one. A found handle shows the account exists. It says nothing about whether the account belongs to the person you're researching.
- **Your IP gets noticed:** hundreds of fast requests from one address can get you rate-limited, and a few sites will remember it. Run it from your own connection, at a sensible speed, for a sensible reason.

### Turning a hit into a finding

To treat two accounts as the same person, look for **at least two independent matching details**: the same profile photo, the same linked website, a bio that refers to the other account, or a matching writing style and posting times. One matching handle, on its own, is a coincidence with good branding.
        `,
      },
      {
        title: "Ethics and legal limits",
        duration: "5 min",
        content: `
### Public isn't the same as fair game

- **Australian Privacy Act 1988:** if you collect information about an identifiable person for a business (paid investigations, HR checks, due diligence), the Australian Privacy Principles probably apply. Collect only what you need for a stated purpose (APP 3), use it only for that purpose (APP 6), and check it's accurate before relying on it (APP 10). Having a username list doesn't make collecting it lawful.
- **Serious invasions of privacy:** since 2025, people in Australia can sue over serious invasions of privacy. Compiling someone's online life to intimidate them is the kind of thing that law was written for.
- **Doxxing offences:** the Criminal Code (Cth) now makes it an offence to use a carriage service to release someone's personal data in a way that's menacing or harassing. Publishing a "here are all their accounts" thread can cross that line.
- **Platform terms:** many sites ban automated access in their terms of use. Running a scanner against your own handle is low-risk; building a business on mass scanning isn't. Read the terms for any site you rely on.
- **Professional context:** in Queensland, investigating people for reward is licensed work (Security Providers Act 1993). This course teaches the technique. It doesn't make you an investigator.

> If you can't write down why you're searching for someone in one plain sentence, don't run the search.
        `,
      },
      {
        title: "Quiz",
        duration: "3 min",
        content: `
1. Sherlock reports \`[+] Instagram: https://instagram.com/pip_tadwell_osint101\`. What has it actually confirmed?
2. Name two reasons Sherlock might mark an account as found when none exists.
3. You get no hit for a site. Can you say the person has no account there? Why or why not?
4. What's the minimum evidence before you treat two accounts as the same person?
5. Under the Australian Privacy Principles, which principle says to collect only what you need for your purpose?

**Answers**

1. Only that the URL returned something that passed Sherlock's "exists" rule for that site. It hasn't confirmed who owns the account, or even that a real profile exists, until you open it.
2. Any two of: the site returns a normal page for any username; a challenge or captcha page looks like success; the site changed its layout and the rule is out of date; a login wall returns a 200 status.
3. No. Sites block automated requests, need a login, or change layout, so a miss is "not detected", not "doesn't exist".
4. At least two independent matching details beyond the username, such as the same photo, a linked site, cross-references in the bio, or matching activity patterns.
5. APP 3 (collection of solicited personal information): collect only what's reasonably necessary.
        `,
        exercise: "Create a test persona handle and register it on two sites. Run Sherlock on it with `--csv`, then open every hit and sort it into *confirmed mine / exists but not mine / false positive*. Write three sentences: how many hits were false positives, which site produced the strangest result, and what you'd need to see before trusting a hit on a handle you didn't create.",
      }
    ],
  },
  "holehe-email-registration": {
    id: "holehe-email-registration",
    title: "Holehe: Asking the Front Desk if You've Checked In",
    description: "Find which sites an email address is registered on, why that works, and why some of these checks are one wrong flag away from emailing the person you're researching.",
    level: "Beginner",
    estimatedTime: "35 min",
    sections: [
      {
        title: "What Holehe does",
        duration: "8 min",
        content: `
### Websites love to overshare at signup

Try registering on a website with an email address that already has an account. Most sites tell you, helpfully: "This email is already in use." Some password-reset forms do the same thing: "We've sent a link to that address" versus "We couldn't find that account."

Holehe automates that question across about 120 sites. You give it an email address, and it asks each site's signup, login or recovery flow whether the address is known. It reports one of three answers:

- \`[+]\` email used: the site says it has an account with this address.
- \`[-]\` email not used: the site says it doesn't.
- \`[x]\` rate limited: the site noticed you asking and stopped answering.

Some modules also return a **partial recovery hint**, like a masked phone number (\`+61 4** *** *12\`) or a masked backup email. Those hints are often the most useful output, and the most sensitive.

### How this differs from Sherlock

Sherlock loads **public profile pages**. Holehe talks to **account systems**, the parts of a site built to manage logins. That makes it more powerful and more delicate. You aren't reading something the person published; you're asking the site's login system to confirm something about them.

That difference is why Holehe gets its own lesson, and why this course teaches it only against addresses you own.

> Sherlock checks the shopfront. Holehe asks the front desk. The front desk usually answers, and sometimes it rings the guest.
        `,
      },
      {
        title: "Walkthrough on your own address",
        duration: "12 min",
        content: `
### Pick your target: you

Use **your own email address**, or a disposable address you create for this lesson and register on two or three free sites. Do not use anyone else's address. Holehe's checks talk to login systems, and a few of them can email or SMS the account holder. Running those against a stranger is how you turn a training exercise into a complaint.

### Install

\`\`\`bash
pipx install holehe
holehe --help
\`\`\`

Holehe is GPL-3.0, so if you redistribute a modified copy you need to keep it under GPL-3.0 and share your changes. Using it yourself is fine.

### Run it (safe mode only)

Always pass **\`-NP\` / \`--no-password-recovery\`**. That skips modules that hit password-recovery flows — the ones most likely to email the account holder. This course never runs Holehe without \`-NP\`, and never turns on any tool's "loud" / notify switch.

\`\`\`bash
holehe -NP --csv your.name@example.com
\`\`\`

Keep an eye on your inbox anyway. If anything still emails you a reset link, stop, note the site, and treat that module as off-limits. In Consensus-OSINT those are the \`loud\` modules; they stay off unless someone deliberately passes \`--allow-loud\`. You will not do that here.

### Read the results

Make a short table:

| Site | Holehe said | Inbox: any email from them? | Notes |
|---|---|---|---|
| Twitter / X | used | no | matches a handle I know |
| Spotify | used | no | forgot I signed up |
| Spotify | used | no | matches a signup I remember |

Then ask yourself three questions:

1. Did I expect this site? (forgot signups are common.)
2. Did any email arrive despite \`-NP\`? (if yes, note the site and never re-run that module.)
3. Did Holehe return a masked phone or backup email? (treat that as personal information, not trivia.)

### Optional: a made-up test address

Create a fresh email (Proton, Gmail, whatever you like), register it on two free sites, then run Holehe. You now know the ground truth: those two sites should show as used, and everything else should be not used or rate limited. Any unexpected \`used\` result is either a false positive or a site you forgot you signed up for with a typo.
        `,
      },
      {
        title: "Limits and false positives",
        duration: "7 min",
        content: `
### Why Holehe gets things wrong

- **Sites change their APIs.** Signup endpoints move, response formats change, and captchas appear. A module that worked last year may now report "rate limited" or, worse, "used" when it can't tell.
- **Rate limits and bot walls.** Big platforms notice automated checks. A rate-limited result is "they stopped answering", not "account exists" or "doesn't".
- **Ambiguous responses.** Some sites return the same page whether the email exists or not (to stop enumeration). Holehe may mark those as unknown or get them wrong.
- **Notifying side effects.** A few modules trigger a password-reset email or an SMS code. The account holder learns someone probed their address. In an investigation, that can tip off the subject.
- **Stale modules.** Holehe's last meaningful module update was around mid-2024. Treat results as leads, not as current truth, and open any important hit yourself.

### The false-negative problem

A clean Holehe run that finds nothing doesn't mean the person has no accounts. It means none of the ~120 modules got a clear "used" answer. The person may use a different email, the modules may be broken, or the sites may refuse to answer.
        `,
      },
      {
        title: "Ethics and legal limits",
        duration: "5 min",
        content: `
### This is the lesson where the law gets pointed

- **Australian Privacy Act:** an email address that identifies a person is personal information. Collecting registration status across dozens of sites for a business purpose triggers APP 3 (necessary for the purpose) and APP 6 (use only for that purpose). Feeding the address to overseas sites also raises APP 8 (cross-border disclosure). Keep a clear purpose note.
- **Computer misuse:** Holehe talks to login and recovery systems. In Australia, unauthorised access to computers is an offence under the Criminal Code (Cth) Part 10.7 and the Criminal Code (Qld) s 408E. Running these checks against someone without a lawful reason is a risk your lawyer should answer before you do it for clients. Until that answer is in writing, treat Holehe as a self-check and training tool.
- **Platform terms:** most sites ban automated account-existence checks in their terms. Using your own address for learning is the lowest-risk use. Building a product that hammers signup APIs is a different conversation.
- **Notifying checks:** deliberately triggering a password-reset email to confirm an address exists is hard to defend. Don't. If a tool offers a "loud" or "allow-notify" switch, leave it off.
- **Sensitive information:** some modules check adult or dating sites. Sexual-life information is sensitive under the Privacy Act (APP 3.3). This course skips those modules.

> If the only way to confirm an email is to email the person a password reset, you don't have a confirmation. You have a tip-off.
        `,
      },
      {
        title: "Quiz",
        duration: "3 min",
        content: `
1. Holehe marks an email as "used" on Spotify. What has it confirmed, and what hasn't it?
2. Why does this lesson require \`holehe -NP\`, and what do you do if a site still emails you?
3. Why is a Holehe check riskier, legally, than a Sherlock check on the same person?
4. A Holehe run finds nothing. Can you conclude the subject has no online accounts?
5. Which Australian Privacy Principle is most relevant when Holehe sends an Australian person's email address to servers overseas?

**Answers**

1. That Spotify's endpoint responded in a way Holehe's module treats as "account exists". It hasn't confirmed the account is active, who owns it, or what the profile contains.
2. \`-NP\` skips password-recovery modules that can email the account holder. If a site still emails you, stop, note it, and never re-run that module or any "loud"/"allow-notify" flag.
3. Sherlock loads public profile URLs. Holehe talks to login/signup/recovery systems, which sits closer to computer-misuse and terms-of-use risk, and can tip off the subject.
4. No. Modules break, sites refuse to answer, and the person may use other addresses.
5. APP 8 (cross-border disclosure of personal information), alongside APP 3 on whether the collection was necessary at all.
        `,
        exercise: "Run `holehe -NP --csv` on an email address you own (or a disposable address you registered on two free sites). Build the results table from Section 2, including an Inbox column. Write four sentences: how many sites returned \"used\", whether any site emailed you despite `-NP`, one result that surprised you, and one module or category you would refuse to run against anyone else. Do not omit `-NP`.",
      }
    ],
  },
  "numint-phone-basics": {
    id: "numint-phone-basics",
    title: "Numint: Start With the Digits, Not the Drama",
    description: "Parse a phone number offline with libphonenumber, learn what presence checks are (and why this lesson never runs them), and keep phone OSINT on the safe side of the line.",
    level: "Beginner",
    estimatedTime: "35 min",
    sections: [
      {
        title: "What Numint does",
        duration: "8 min",
        content: `
### Most phone "lookups" start by reading the number itself

A phone number already contains a lot of public information before you ask any website anything: country, possible region, line type (mobile, landline, VoIP), and standard formats. Google's \`libphonenumber\` library does that offline. Numint wraps it, then optionally adds:

1. **Offline parse** (always available, no network): valid or not, type, formats, country, region, carrier name where the library knows it, time zones.
2. **API providers** (optional keys): freemium carrier/spam-risk services.
3. **Presence checks** (exist in the tool; **not used in this lesson**): whether the number is registered on a few platforms via login-style endpoints. Same risk family as Holehe; can SMS the number owner. Numint gates them behind \`--presence --yes-authorized\`. We leave that flag alone.
4. **Search links**: ready-made Google/Bing queries and reverse-lookup URLs. Listing the links is fine; opening them en masse is a separate choice.
5. **Optional AI summary**: only if you give it a key. Skip it for this lesson.

> If your first move with a phone number is to blast it at social platforms, you're skipping the free part of the work — and this course will not ask you to do that.
        `,
      },
      {
        title: "Walkthrough on your own number",
        duration: "12 min",
        content: `
### Scope: your number, or a synthetic one

Use **your own mobile number**, or a Twilio/VoIP test number you control. Do not use a friend's number "as practice". Phone presence checks can trigger SMS codes or account notices on some platforms, and an unsolicited probe is a good way to ruin a friendship and a morning.

### Install

\`\`\`bash
git clone https://github.com/whoamitang/numint.git
cd numint
python3 -m venv .venv && source .venv/bin/activate
pip install .
numint --help
\`\`\`

### Step A: offline only (the bit you should always do)

\`\`\`bash
numint "+61 4XX XXX XXX" --offline --country AU --json
\`\`\`

Replace the number with yours in E.164 form (\`+61…\` for Australia). Read the JSON (or the pretty terminal view without \`--json\`) and note:

- Is it marked valid?
- Line type: mobile, fixed line, VoIP, toll-free?
- Country and region hints.
- Carrier name (library data; not always current after number portability).
- Time zones.

Australian gotchas worth knowing:

- Mobile numbers are \`+61 4…\`. A \`+61 2/3/7/8\` is a landline area code.
- Number portability means the "carrier" field can be wrong for a ported mobile. Treat it as a hint.
- Many "free reverse-lookup" websites for AU numbers are scrapers of scraped scrapers. Prefer the offline parse first.

### Step B: what we deliberately skip

Do **not** run \`--presence\`, \`--yes-authorized\`, \`--all\`, or API/AI flags in this lesson. Presence checks talk to login systems and can SMS the number owner. Knowing the flag exists is enough; running it is not part of the exercise.

Also skip enrichment API keys for now — they send the number to third parties.

### Step C: write it up as an analyst would

| Layer | Result | Confidence | Notes |
|---|---|---|---|
| Offline parse | AU mobile, region hint X | Medium | Carrier may be outdated after portability |
| Presence / APIs | not run | — | Course rule: offline only |

If you later use presence checks in real work, treat every hit as **low confidence** until corroborated, and only against numbers you own or have a documented lawful purpose to check.
        `,
      },
      {
        title: "Limits and false positives",
        duration: "7 min",
        content: `
### What phone tools get wrong

- **Portability:** the offline carrier name is often historical. Australians change providers and keep their numbers.
- **VoIP and virtual numbers:** Twilio, Google Voice and similar look like normal mobiles in some parses and like VoIP in others. A "mobile" label is not proof of a handset.
- **Presence false positives:** login endpoints change. An Instagram or Snapchat check that worked in 2021 may now return garbage. Ignorant (the project Numint borrows some presence bridges from) hasn't had a real update in years; treat those results as provisional.
- **Presence false negatives:** rate limits, geo blocks and captchas all look like "not registered".
- **SMS side effects:** some presence checks send a code. You just notified the number owner.
- **Enrichment APIs:** free spam-risk APIs vary wildly in quality for Australian numbers and send the number to a third party. Skip them until you have a written purpose and a supplier you trust.

### What "found on Instagram" does not mean

It does not mean you know the username, the profile, or the person. It means an endpoint responded in a way the tool treats as "this number is linked to an account". Getting from there to a named profile is a separate, harder problem, and often not possible with public data alone.
        `,
      },
      {
        title: "Ethics and legal limits",
        duration: "5 min",
        content: `
### Phone numbers attract extra rules in Australia

- **Privacy Act:** a phone number that identifies a person is personal information. Same APP 3 / APP 6 / APP 8 analysis as email. Spam-risk and carrier APIs are overseas disclosures unless you've checked otherwise.
- **IPND:** Australia's Integrated Public Number Database is **not** a public lookup. Access is limited to directory publishers, approved research, emergency services and law enforcement (ACMA). A PI licence does not unlock it. If a vendor claims "full AU phone owner data", ask which lawful gateway they use; most of the time the answer is "none".
- **Spam Act and Do Not Call:** using a number you found to market to someone is a different legal regime. Finding a number for investigation is not permission to call them for sales.
- **Computer misuse / terms:** presence checks hit login systems. Same caution as Holehe. Numint's \`--yes-authorized\` flag is the tool authors putting the responsibility on you. Accept it only when the number is yours or you have a documented lawful purpose.
- **QLD PI context:** for paid locate work, phone checks sit under purpose recording, DFV screening for locate-type jobs, and the rest of the licence duties covered elsewhere in OSINT101. This lesson does not make phone tracing a free-for-all.

> Offline parse first. Presence checks second, and only with a reason you could defend to a magistrate. Enrichment APIs third, if ever.
        `,
      },
      {
        title: "Quiz",
        duration: "3 min",
        content: `
1. What can Numint tell you about a number with \`--offline\` and no network access?
2. Why might the "carrier" field be wrong for an Australian mobile?
3. Why does this lesson forbid \`--presence --yes-authorized\`, even on your own number?
4. Does a QLD private investigator licence give you access to the IPND?
5. A presence check says a number is registered on Instagram. Do you know the username?

**Answers**

1. Validity, line type, formats, country/region hints, library carrier data and time zones (via libphonenumber). No website is contacted.
2. Number portability: people keep their number when they change providers, and the library data may still show the original carrier.
3. Presence checks hit login systems and can SMS the owner (notifying). The course keeps phone work offline so you learn the safe layer first; presence stays a "know it exists, don't run it here" topic.
4. No. IPND access is limited to specific approved categories; a PI licence is not one of them.
5. No. You only have an endpoint response suggesting the number is linked to some account.
        `,
        exercise: "Run `numint` with `--offline` (and nothing else) on your own number or a VoIP number you control. Fill in the offline rows of the results table. Do not pass `--presence`, `--yes-authorized`, `--all`, or API keys. Write five sentences covering: line type and country, one thing the offline parse could not tell you, why presence checks are out of scope here, one false-confidence risk you'd warn a classmate about, and why IPND is not a shortcut.",
      }
    ],
  },
  "maigret-username-dossier": {
    id: "maigret-username-dossier",
    title: "Maigret: Sherlock With a Bigger Rolodex",
    description: "Run a broader username search, read recursive pivots carefully, and treat every FOUND as a lead until you open it yourself.",
    level: "Beginner",
    estimatedTime: "35 min",
    sections: [
      {
        title: "What Maigret does",
        duration: "8 min",
        content: `
### Same doorbell, more doors, more notes

Maigret is a username checker in the same family as Sherlock. You give it a handle. It asks a large pile of sites whether a profile page for that handle seems to exist. Where it pulls ahead is coverage and the notes it tries to take: more site rules, an attempt to read public fields off pages that actually load, and optional recursion that follows other usernames mentioned on those pages.

It still does not know who someone is. A Maigret report is a pile of URLs that passed a rule, plus whatever public text the parser managed to lift. If Sherlock is a clipboard of doorbell results, Maigret is the same clipboard after someone emptied a filing cabinet onto it. The filing cabinet is not a biography. Length is not corroboration. Maigret will happily write you a long report about a username shared by a plumber, a bot, and you.

### How it differs from Sherlock

- The default site list is much larger. The Consensus snapshot this course used put Maigret in the thousands of sites, against a few hundred for Sherlock. Do not paste either number into a client report. Corpora move. The project's current README is the figure you are allowed to quote.
- It tries to extract display names, bios, and linked accounts when a page loads as a profile rather than as a wall.
- It can recurse. A found profile mentions another handle, and a later run may check that handle too. That second handle is a new lead, not a proven alias.
- It is heavier and slower. More requests from your IP means more rate limits, more challenge pages, and more rows that mean "the site got annoyed" rather than "no account".

Maigret is MIT-licensed. Using it yourself to learn the workflow is the point of this lesson. If you later ship a modified copy, read the licence before you do; this course does not turn you into the distributor.

### Where it sits in OSINT101

Maigret is one of the twelve tools in this course. Do the Sherlock lesson first. That one teaches the only habit that survives contact with a big report: open the URL, score the hit, and refuse to marry a stranger who shares the handle. Use Maigret when you want wider coverage and you can sit with the extra noise. The target is still your own handle, or a test persona you created.

If you do not have a persona yet, make one before you install anything. Pick a handle unlikely to exist, such as \`pip_tadwell_osint101\`. Register it yourself on two or three free sites (a code host and a forum is enough) using an email address you control. You now know which accounts are real, because you opened them. That is ground truth. A tool does not get to overrule it.

### What you are not doing

You are not building a dossier on a neighbour, an ex, a classmate, or anyone else who did not ask. You are not turning recursion on and going to make tea. You are not treating a parsed "full name" field as an identity document. Parsed fields are text the tool found on a page. Login walls, cookie banners, and "user not found" templates all contain text. Parsers are not fussy about which text they found.

> Maigret finds more doors. You still have to walk through them and decide whether the same person lives behind each one.
        `,
      },
      {
        title: "Walkthrough on your own handle",
        duration: "12 min",
        content: `
### Ground rules

Use your own username, or the test persona from the Sherlock lesson. If you skipped ahead, build \`pip_tadwell_osint101\` (or another unlikely handle) and register it on two sites you control before you run anything. Do not point Maigret at a real private person "just to see". The tool does not know it is practice. Your IP address still does.

Before you type the command, write one sentence in your notes: "I am checking a handle I own, to learn which hits are mine, which are strangers, and which are junk." If the honest sentence names someone else, close the terminal. That rule is the whole ethics section in one line. The rest is detail.

### Install

Maigret is a Python tool. \`pipx\` keeps it out of your system Python, which is the least exciting way to have a good afternoon.

\`pipx install maigret\`

Then ask the copy you actually installed what it can do:

\`maigret --help\`

Read that help text. Flag names move between releases. If this lesson says \`--top-sites\` and your help text only shows \`-n\`, or the other way around, the help text wins. A lesson that guesses a renamed switch will teach you a flag that does nothing, and a run that "found nothing" for a boring reason. If \`pipx\` is not installed, the upstream README is the fallback. Expect at least one complaint about PATH. That is tradition, not a finding.

### Run a bounded search

A full Maigret sweep can touch a very large number of hosts. For training, keep the run small enough that you can open every hit before you get bored and start believing the tool.

\`maigret pip_tadwell_osint101 --timeout 15 --retries 0 --top-sites 50\`

That shape is a teaching default, not a contract:

- A site cap on the order of 50 is enough to learn the buckets. It is not enough to annoy half the internet. If your \`--help\` uses \`-n\` instead of \`--top-sites\`, use the flag your version documents, and keep the number small.
- \`--timeout\` stops one sulking host from holding the whole run. If the flag is absent, do not invent a replacement. Run the smaller set and be patient.
- \`--retries 0\` avoids hammering a site that already failed. If your build has no retry flag, leave the default alone rather than guessing.
- Skip Tor, proxies, and any "all sites" or deep-crawl switch for this lesson. If the README mentions them, they are for other jobs, with other rules. Class does not need a disguise.
- If a flag's description says it will automatically follow every linked username, leave it off. A pivot is a second, deliberate job. It gets its own purpose sentence. It does not get to happen while you are still scoring the first report.

Replace \`pip_tadwell_osint101\` with your handle. Save whatever the tool prints. Maigret can write HTML, PDF, or JSON depending on version. Do not memorise a filename from this page. Look at the files that actually appeared, or at \`--help\`, and open those.

### Score the report like an analyst

Build a table in your notes, not in your head. Heads: site, URL, opened in a browser, same person as you, evidence. Then walk every hit. Yes, including the ones that look obvious. Especially those.

Three buckets, same as Sherlock:

- Confirmed mine. You opened the URL and recognised an account you created. The evidence is specific: the test repo, the bio sentence you wrote, the email you know is yours showing on a page you control. "The username matches" is not evidence. You already knew the username matches. That is why the row exists.
- Exists, but not mine. A real profile loads, and it is a stranger. Different photo, different city, a bio that has never heard of your persona. Common and short handles fill this bucket. If your real handle is something like \`dazza\`, you have not found yourself. You have found a queue.
- False positive. The URL does not show an account. You got a challenge page, a cookie wall, a login form, or a "user not found" page that still returned a success-shaped response. The tool believed its rule. The browser did not.

When you are done, pick one public link from a profile you confirmed is yours: a website field on that profile, not a private message and not a link from a stranger's page. Write it down as a manual follow-up. Do not let Maigret recurse after it during class. You will do that follow-up yourself, in a browser, and you will stop after one link.

If the report includes parsed fields (a display name, a bio snippet, another handle), treat each field as a claim about a page. Open the page and see if the words are still there. If the "bio" is the text of a captcha, that is a useful result. It tells you the parser was reading the door, not the room.
        `,
      },
      {
        title: "Limits and false positives",
        duration: "7 min",
        content: `
### Where Maigret goes wrong

Volume is not truth. A longer hit list means Maigret asked more sites, so it met more strangers who picked the same handle, and more sites whose rules are having a bad week. Beginners look at the length of the report and feel productive. Analysts look at the buckets. A fifty-row report with two confirmed hits and forty-eight false positives is a lesson. It is not a lead list you paste into a case file.

Parsed fields go wrong in ordinary ways. A site redesigns, and the old selector lifts the wrong block. A login wall returns a normal-looking page, and the parser quotes the wall: "Sign in to continue" becomes someone's bio. A soft 404 (a friendly "not found" that uses a success status code) gets marked found. None of this requires a conspiracy. It requires a website that changed on a Tuesday.

Recursion amplifies mistakes. Suppose a false-positive page contains the word \`admin\`, or a band name, or the name of the forum software. If you let the tool treat that word as the next username, the second report is about a different fiction. One bad pivot does not stay in its lane. It breeds a dossier that looks thorough because it is long. Write this in the margin: a pivot username is a hypothesis. It earns a check only after you have seen it, as a link or a bio, on a page you already trust.

Rate limits and blocks look like misses. A site that refuses your IP, shows a captcha, or simply never answers is "not detected". It is not "this persona has no account there". Absence of a row is not proof of absence of an account. Maigret's bigger list makes this easier to forget, because the report already feels complete. It is complete only for the sites that agreed to answer, under the rules in the database you happened to install.

The same failure modes as Sherlock still apply, and they apply more often because you asked more doors:

- Challenge pages and captchas that look like success to a status-code rule.
- Rules that rotted after a redesign. Active projects update rules; they do not update all of them on the day a site changes.
- Your own connection getting noticed. Hundreds of fast requests from one address is a pattern. Run one bounded search, from your own connection, for a reason you wrote down. Do not loop it. Do not "try again with proxies" because the first run was rate-limited. That is how a training exercise becomes a terms-of-service problem with extra steps.

### Turning a hit into a finding

Two accounts are the same person only when you have at least two independent matching details beyond the shared username. A reused photo. A website field on one profile that points at the other. A bio that names the other account in a sentence a stranger would not bother to write. Posting habits that line up and that you actually checked, not that you found plausible.

Maigret's extracted fields are clues for that check. They are not a substitute for it. "The tool said the display name was Pip Tadwell" means the parser emitted those words. It does not mean a human called Pip Tadwell owns the page, and it does not mean your persona owns it, unless you put those words there yourself.

> If the report is more confident than the pages you opened, believe the pages.
        `,
      },
      {
        title: "Ethics and legal limits",
        duration: "5 min",
        content: `
### Same law, more temptation

Maigret's extra pages make purpose-creep feel like diligence. It is not. The legal frame is the same one Sherlock already handed you. The temptation is new, because the PDF is thicker.

If you collect username hits about an identifiable person for a business (paid investigations, HR checks, due diligence, "a favour for the boss"), the Australian Privacy Principles are in the room. APP 3 is the collection rule: solicit only what is reasonably necessary for a purpose you can say out loud. APP 6 is the use rule: do not pick up a GitHub question and wander off into fifty unrelated sites without a fresh purpose. APP 10 is the quality rule: a hit you have not opened is not accurate enough to rely on. A parsed field you have not compared to the live page is a rumour with formatting.

Recursive pivots are where APP 6 goes to die. Your purpose sentence was "does the persona's handle exist on the two sites I created?" Shipping a second username, found in a sidebar, into a new sweep is a new collection. Write the new sentence, or do not run the new sweep. "The tool offered" is not a purpose.

The statutory tort for serious invasions of privacy has been in force in Australia since 2025. Compiling a stranger's accounts to intimidate, humiliate, or sell is the sort of fact pattern that tort was written for. The Criminal Code (Cth) also makes it an offence to use a carriage service to release someone's personal data in a way that is menacing or harassing. A training report that you publish as "here is everything on this handle" can cross that line even when every URL was public. Public is not the same as yours to broadcast.

Platform terms still apply, one site at a time. Many sites ban automated access. Checking a handle you own, once, at a modest site cap, is the low-risk end of that argument. Building a product that sweeps strangers all day is a different argument, and it is not this lesson. Read the terms for any site you start to rely on. A 200 status code is not a permission slip.

In Queensland, investigating people for reward sits under the Security Providers Act 1993. This lesson teaches a command. It does not issue a licence. If money is changing hands, the licence question comes before the tool question.

> If Maigret's report is longer than your purpose sentence, the purpose sentence is the thing that is wrong.
        `,
      },
      {
        title: "Quiz",
        duration: "3 min",
        content: `
1. Name one capability Maigret adds on top of a basic Sherlock-style check.
2. Why limit \`-n\` / top sites during training?
3. A recursive pivot finds a second username. What must you do before treating it as the same person?
4. Does a large Maigret report prove identity?
5. Which APP says not to keep using personal information for a new purpose without a basis?

**Answers**

1. Broader site coverage, profile-field parsing, and optional recursive username pivots (any one is enough).
2. Full runs are slow, noisy and easy to rate-limit; a small set teaches the workflow without thrashing sites.
3. Open sources yourself and look for independent matching details — do not trust the pivot alone.
4. No. It proves which URLs passed existence rules, not who owns them.
5. APP 6 (use or disclosure of personal information).
        `,
        exercise: "Run Maigret on your test persona with a low site limit (`--top-sites 50` or equivalent). Open every hit. Sort into confirmed / not mine / false positive. Write three sentences: how the hit list compared to Sherlock on the same handle, one parsed field that was useful, and one reason you would refuse unsupervised recursion on a live case.",
      }
    ],
  },
  "whatsmyname-username-web": {
    id: "whatsmyname-username-web",
    title: "WhatsMyName: The Username Checklist You Can Read",
    description: "Use the WhatsMyName web UI and JSON rules to check a handle, then learn how detection rules actually decide 'exists'.",
    level: "Beginner",
    estimatedTime: "35 min",
    sections: [
      {
        title: "What WhatsMyName does",
        duration: "8 min",
        content: `
### A community list of "does this username exist?" checks

WhatsMyName is, first, a dataset. It is a community-maintained collection of rules that describe how to ask a site whether a username seems to be taken. There is a web front end in front of that dataset, which is why a beginner can run a check without installing Python and without pretending to enjoy a compiler. Each rule usually carries a URL pattern, something the tool treats as "account exists", and something it treats as "account missing". The exact keys in the file move between releases. You are going to look at the file, not memorise a schema from this lesson.

That is the useful part. Username tools disagree with each other for boring reasons, and WhatsMyName is where the boredom becomes visible. Sherlock says yes, WhatsMyName says no, and instead of shrugging you can open the rule and see which status code or which snippet of text each one hoped to find. Most of the time someone changed a template, and one project updated first. The other project is still searching for a sentence the site stopped saying in March.

WhatsMyName will not tell you the person's name, age, or whether the account is the same human as a different site. It answers a narrower question: did this rule, against this URL, come back in the shape the rule calls a hit? Opening the URL is still your job. The web UI is a faster way to get the list. It is not a faster way to skip the list.

### Licence, in plain speech

The WhatsMyName data is CC BY-SA 4.0. Using the web UI to learn, on a handle you own, does not require a essay. Republishing adapted rules does. Attribution and share-alike are the two obligations people forget, usually in that order. If a report of yours relies on WhatsMyName-derived checks, the method annex gets a credit line: the project name, the author community, the licence, and a link to the repo you actually read. "Various OSINT tools" is not a credit line. It is a shrug.

The dataset licence is not permission to ignore a website's terms, and it is not permission to ignore the Privacy Act. A Creative Commons licence governs the rules file. It does not govern the person whose username you typed.

### Where it sits in OSINT101

WhatsMyName is one of the twelve tools. Come to it after Sherlock, so you already have the three buckets (confirmed mine, exists but not mine, false positive) and you are bored of being wrong in private. Use the web UI to get a list. Use the JSON to see why a row exists. Use your browser to decide whether the row is real.

You still need the test persona. \`pip_tadwell_osint101\`, or your own handle, registered on sites you control. A gibberish username you have never registered is the second probe: it should miss. When a gibberish username "hits", you have found a rule that says yes to everyone. That is a gift. Write down the site. Do not write down a theory about a person.

> WhatsMyName is the rare tool in this course where reading the data file is the training, not the appendix.
        `,
      },
      {
        title: "Walkthrough",
        duration: "12 min",
        content: `
### Target

Your own handle, or the test persona. Not a classmate's handle, not a client's handle, not a handle you saw on a bus. If you are doing this lesson on a work machine, the purpose sentence is still "I am learning how a rule rots", not "I am checking the new hire".

### Option A: the web UI

The maintained web checker is linked from the project's README on GitHub (WebBreacher/WhatsMyName). Open that README and use the link it gives you today. Do not trust a bookmarked copy from a blog. Web UIs move, and a lookalike page with a search box is not a source.

1. Paste your test username. Nothing else. Do not paste an email address into a username box to "see what happens".
2. Let the check finish. If the page offers an export, save it. If it does not, copy the hits into your notes by hand. Hand-copying twenty rows is character-building and also how you notice a URL that is not a URL.
3. Do not re-run it five times because the first run felt short. One pass. Then the browser.

### Option B: read one rule until it is boring

On the same GitHub project, open the data file. The name has been \`wmn-data.json\` in releases this course looked at. If that name is gone, the README will point at the current file. Trust the repo, not this sentence.

Find one site you actually use, ideally one where your persona has an account, and one site where you are sure it does not. For each rule, write down three things in your own words:

- The URL template, and where the username is inserted. You will usually see a placeholder such as \`{account}\`. If the placeholder looks different, copy what the file says.
- What the rule treats as a hit. That might be a status code, a string that should appear, or a string that should not. Do not guess which. Read the fields.
- What the rule treats as a miss.

Then build both URLs in the browser. One for your persona. One for a gibberish string you have never registered, something ugly enough that a real human would not have chosen it this week. Compare the live page to the rule.

You are looking for one of four outcomes, and you will meet all four if you do this twice:

- Persona URL shows your profile, gibberish URL shows a clear miss, and the rule agrees. The rule is alive. Enjoy it. It will not stay this way.
- Persona URL shows your profile, but the rule says miss. False negative. The site changed, or the rule is matching a string that your logged-out browser does not see. Note it. Do not "fix" the rule in a client report by pretending the hit existed.
- Gibberish URL is marked found. False positive. The rule is matching a page the site shows to everybody: a login wall, a generic profile shell, a challenge page.
- The live site and the rule disagree in a way you cannot explain in one sentence. That is a stale or ambiguous rule. Your verdict is "not verified". Unverified is a finished status. It does not need a story.

### A notes table that survives contact with the JSON

For each site you bothered to open, record: the web UI's result, what the browser showed, whether the rule still matches the live page, and one sentence of why. A row that says "found / profile loads / rule valid / this is the repo I created" is a confirmed hit. A row that says "found / soft 404 / rule stale" is a false positive with a cause. Causes are what you want. A spreadsheet of bare "found" is how the last person got into trouble.

If you already have a Sherlock or Maigret list for the same handle, add a column for it. Disagreement is the interesting row. Agreement only tells you two rules are currently equally wrong or equally right. You still open the page.
        `,
      },
      {
        title: "Limits and false positives",
        duration: "7 min",
        content: `
### Rules rot, and they rot in public

A detection rule is a small bet that a website will keep speaking the same sentence. Websites do not take that bet. They redesign, they put a cookie wall in front of the old sentence, they start returning the same HTML for missing users on purpose (that is anti-enumeration, and it is a feature for them and a headache for you). When the bet fails, the tool does not blush. It prints the result the rule required.

Some misses are the site refusing to show profiles to a logged-out visitor, or to a visitor who looks like a script. The web UI is convenient, and convenience hides the number of requests you just fired from your browser, on your connection. One username, once, is the exercise. Turning the box into a hobby, against handles you do not own, is how a learning tab becomes a terms problem.

Overlap with Sherlock and Maigret is high. That is fine. The point of a second and third list is the rows where they split. A site that all three mark as found can still be a shared false positive, if all three copied the same tired assumption. A site that only WhatsMyName marks as found is not a secret win. It is a row you open first, because unique hits are where stale rules like to live.

"Not found" remains "not detected". The rule did not see what it wanted. The account may exist behind a login, on a URL shape the rule does not build, or on a site that is not in the file. You do not get to tell a classmate they have no account somewhere because a JSON file was quiet.

Categories of junk you should be able to name without looking them up:

- Soft 404s and friendly error pages on a success status.
- Challenge pages, captchas, and interstitials.
- Generic pages that include the username you typed, echoed back, which fools a "the username appears on the page" rule.
- Rules you cannot explain. If you cannot say what the rule was looking for, you cannot defend the hit.

> When the browser and the rule argue, the browser is looking at the site. The rule is looking at a memory of the site.
        `,
      },
      {
        title: "Ethics and legal limits",
        duration: "5 min",
        content: `
### A readable rule is still a collection

Checking public profile URLs is quieter than asking a login form whether an email exists. Quieter is not the same as unregulated. If you do this for a business purpose, about an identifiable person, the Australian Privacy Principles apply to the collection. APP 3 asks whether the check is reasonably necessary for the purpose you wrote down. APP 6 asks you not to reuse the list for a new purpose because it was sitting in the downloads folder. APP 10 asks you not to rely on a hit you failed to open. "The web UI said found" will not satisfy APP 10. The opened page might.

Publishing the compiled list is a separate decision from making it. The statutory tort for serious invasions of privacy, in force since 2025, and the Commonwealth doxxing offences around releasing personal data via a carriage service in a menacing or harassing way, both care about what you do with the pile. A training note that stays in your notebook is not a thread. A thread titled with someone's real name is not a training note.

CC BY-SA covers your duty to the dataset's authors if you republish adapted rules. It does not cover your duty to the person, and it does not cover your duty to the platforms. Many sites forbid automated collection in their terms. The web UI is still automation wearing a form. Using it on a handle you own, for this exercise, is the path this course will defend. Using it as a casual background check on applicants, neighbours, or dates is a purpose problem first and a terms problem second.

In Queensland, investigating people for reward is licensed work under the Security Providers Act 1993. Reading a JSON file does not change that. If there is a client, there is a licence question, and there is a purpose note, and there is a decision about what you will not collect. WhatsMyName's friendliness is not a factor in that decision. Friendly tools are how sloppy collections get large.

Write the attribution line in the annex when you rely on the data, keep the raw hits out of the annex until they have been opened, and keep other people's handles out of the exercise entirely.

> The data file is open so you can see the rule. It is not open so you can skip the law sitting behind the rule.
        `,
      },
      {
        title: "Quiz",
        duration: "3 min",
        content: `
1. What is WhatsMyName, primarily — an API, a dataset, or a people-search engine?
2. Why open the JSON rule after a surprising hit?
3. What licence covers the WhatsMyName data?
4. A rule says "exists" but the browser shows a not-found page. Who is wrong?
5. Name one APP relevant to collecting username hits for client work.

**Answers**

1. A community dataset of site-check rules (with optional web UI).
2. To see which status/string it expected, and whether the site changed.
3. CC BY-SA 4.0.
4. Usually the rule (stale). Trust the browser check for that site.
5. APP 3 (collection) — also APP 6/10 when you use the results.
        `,
        exercise: "Check your test persona in the WhatsMyName web UI. Pick one hit and one miss, open both URLs manually, then open the matching JSON rules. Write four sentences: whether each rule still matches the live site, one disagreement with Sherlock or Maigret if you have those results, and one attribution line you would put in a report annex if you relied on WMN-derived data.",
      }
    ],
  },
  "user-scanner-username-email": {
    id: "user-scanner-username-email",
    title: "User Scanner: Username and Email in One Noisy Suitcase",
    description: "Use User Scanner's username checks on your own handle, keep any email experiment on your own address, and leave recovery-style modules alone.",
    level: "Beginner",
    estimatedTime: "35 min",
    sections: [
      {
        title: "What User Scanner does",
        duration: "8 min",
        content: `
### Two tools sharing a trench coat

User Scanner checks usernames and, separately, emails, across a large site list. It is in this course because it is actively maintained and because it covers both kinds of identifier in one project. That second feature is also the hazard. A username check loads the same family of public profile URLs you already met in Sherlock. An email check talks to account systems, the way Holehe does. One install, two very different legal weathers. You do not get to notice only the sunny one.

Consensus-OSINT vendors a modified copy and tags some email modules as \`loud\` when they may notify the account holder: password-reset style traffic, messages, anything that makes a human's phone buzz. Those tags exist so a careful operator can leave them off. This lesson leaves them off. It does not "try loud once on my own email to see the template". Your own inbox is where you notice the mistake. It is not a sandbox for practising the mistake.

For the required walkthrough, stay on username checks, against your handle or \`pip_tadwell_osint101\`. Email mode is optional, and only against an address you own. If you cannot see, in the help text, a clear way to keep recovery and notify behaviour off, you skip email mode. You already have a safer explicit switch in the Holehe lesson: \`holehe -NP\`, and only \`-NP\`. Do not invent a User Scanner equivalent by turning on extra modules "because Holehe was fine".

### What "maintained" does and does not buy you

An active project fixes rules faster than a dead one. It does not make today's rules true. User Scanner's list is large (the Consensus snapshot counted it in the thousands of username sites, plus a much smaller set of email modules). Large lists contain fresh rules and rotten ones in the same afternoon. Maintenance is a reason to prefer this project over an abandoned scanner. It is not a reason to skip the browser.

The licence is MIT. Same as Sherlock: fine to use, and not a substitute for platform terms or the Privacy Act.

### Where it sits in OSINT101

This is the lesson where it is easiest to enable something you did not mean to enable, because the tool is keen and the help text is long. Read the flags twice. Then run the smallest command that is obviously a username search.

> One tool, two personalities. Only the polite one is invited to class. The other one stays in \`--help\`, unread and unselected.
        `,
      },
      {
        title: "Walkthrough",
        duration: "12 min",
        content: `
### Username mode, which is the actual exercise

Install the way the upstream README tells you, for the release you are actually using. The command name in recent documentation is \`user-scanner\`. If the binary on your machine answers to something else, trust the binary. Then:

\`user-scanner --help\`

Read it from top to bottom once, before you give it a handle. You are looking for three things, and you will write them in your notes:

- Which flag means "this is a username, not an email". The example shape below uses \`--username\`. If your help text uses a different switch, use that switch.
- Which flags limit how hard you hit the network: concurrency, threads, timeouts, a site cap, a category filter. If they exist, choose the boring values. Low concurrency. A timeout. Skip categories you do not need.
- Which flags talk about recovery, reset, notify, or loud. You are not using those today. If they default to on, and you cannot see how to turn them off, stop and do not run the tool. Go back to Sherlock for usernames and to \`holehe -NP\` for email. A tool you cannot keep quiet is a tool you do not run in this course.

A reasonable teaching shape, if \`--help\` agrees, is:

\`user-scanner --username pip_tadwell_osint101\`

If \`--help\` does not agree, do not force that line. Adapt it until it matches the help text, and keep it username-only. Save the output. Open every hit in a browser. Score the three buckets you already know: confirmed mine, exists but not mine, false positive. A captcha page is the third bucket, even if the tool printed a green tick, a plus sign, or the word FOUND in all capitals. Capital letters are not a verification step.

Give yourself a written quota. Ten hits, opened properly, with a sentence of evidence each, beats two hundred hits you scrolled past. The exercise at the end of this lesson asks for ten. Do not "get ahead" by verifying none.

If the help text offers a way to exclude categories, turn off adult and dating categories. Those results can be sensitive information. You do not need them to learn what a false positive looks like. A false positive on a code host teaches the same lesson, with less harm and less awkwardness.

### Email mode, optional, and easy to get wrong

Only consider email mode after the username run is scored. Use an address you own, or a disposable address you created and registered yourself. Watch the inbox of that address from before you press enter until ten minutes after the run finishes.

Skip any option that resembles password recovery, a notify switch, a reset, or the word loud. If you are not sure whether a module notifies, you are sure enough: leave it out. If the tool has no way to express "username only" versus "email, but quiet", skip email entirely.

If a reset message arrives, you have learned the only fact email mode was going to teach you. Stop. Note the module name if the output shows one. Do not re-run it. Do not try it on a different address to "confirm it was the module". One surprise email is a result. Two is a hobby.

Do not pair User Scanner with any other reset-style tool in the same hour. Do not pass your address to a second checker "to compare" until you know the first one stayed quiet. Comparison is a username-tool habit. It is a bad email-tool habit, because the cost of a wrong module is a message to a human, not a wrong row in a CSV.

### What to write down before you close the laptop

One paragraph, four facts. How many username hits you opened. How many were actually yours. Whether you attempted email mode. The sentence "I did not enable any loud, recovery, or notify option", which you only write if it is true. If it is not true, you do not write a softer sentence. You write what you turned on, and you do not do it again.
        `,
      },
      {
        title: "Limits and false positives",
        duration: "7 min",
        content: `
### Fast lists, slow truth

User Scanner's site list moves, which is why it earned a place in the twelve. A moving list means a module that worked on Monday can be wrong on Thursday without the project being abandoned. Expect wrong rows on any given day. The wrongness looks like every other username tool: soft 404s, challenge pages, login walls, echoed usernames, rules aimed at a layout the site retired.

Email modules are a different error budget. They talk to account systems. A "registered" answer can mean the endpoint responded in the shape the module expected. It can also mean the endpoint changed and the module is guessing. A "not registered" answer can mean a rate limit, a captcha, or a site that returns the same response either way so strangers cannot enumerate accounts. You cannot collapse those into "no account". You especially cannot collapse them into "this person does not use that service".

Loud modules are not an accuracy feature. They are a side effect. The side effect is that the account holder learns someone probed the address, because a reset email or a code arrived. In an investigation that is a tip-off. In this course it is a failed exercise, even when the address is yours. You are practising the quiet path so that "I wonder what loud does" never feels like a normal next step.

High concurrency makes false negatives. If you fire too many checks at once, sites start refusing you, and the refusals look like clean misses. The report gets shorter and you feel efficient. You were blocked. If \`--help\` shows a concurrency or thread flag, keep it modest. If the run starts failing halfway, stop. Do not immediately retry harder. Wait, and if you must retry, retry a smaller set on the next day, still on your own identifier.

Adult and dating categories stay off for two practical reasons on top of the legal one. The rules are no more reliable than the rest of the list, and a false positive in that category is a worse sentence to have in a notebook than a false positive about a forum. Sensitive information is not a prize for scrolling further down the help text.

> A green row is a claim about an HTTP conversation. Your browser is the cross-examination.
        `,
      },
      {
        title: "Ethics and legal limits",
        duration: "5 min",
        content: `
### Username weather and email weather

Hold the two modes apart in your notes, because the law and the terms treat them differently even when one binary runs both.

Username checks are the noisy-passive end. You are requesting public URLs. For a business purpose, about an identifiable person, that is still a collection under the Privacy Act. APP 3 (only what is necessary), APP 6 (only for that purpose), and APP 10 (good enough to rely on) all apply. A hundred unverified rows fail APP 10 in bulk. Platform terms may still forbid the automation. Your own handle, one modest run, is the use this lesson stands behind.

Email checks sit closer to Holehe. You are asking login and signup machinery about an address. Unauthorised access to computer systems is an offence under the Criminal Code (Cth) Part 10.7 and, in Queensland, the Criminal Code s 408E. Whether a particular registration probe meets that test is a question for a lawyer with the facts, not a question this course will answer by vibes. Until you have written advice for client work, email mode stays a self-check. Deliberately triggering a password reset to "confirm" an inbox is not a technique we teach, and it is a miserable thing to have to explain.

APP 8 turns up as soon as the address or the username is sent to overseas platforms, which is most of them. Know that you did that. A purpose note that pretends the data never left the laptop is fiction.

APP 3.3 is why adult and dating categories stay off. Information about a person's sexual life is sensitive information. You do not collect it because a category list was long and you were curious. Curiosity is not a permitted general situation.

The statutory tort for serious invasions of privacy (since 2025) and the Commonwealth offences about releasing personal data via a carriage service in a menacing or harassing way both apply to what you publish afterwards. "The tool supports email" is not a defence to publishing a list of accounts tied to a real person.

Queensland paid investigation work remains licensed under the Security Providers Act 1993. User Scanner's pace of development does not change the licence, the purpose note, or the rule that practice targets are yours.

> If you cannot point at the help-text line that kept the run quiet, you do not have a quiet run. You have a hope.
        `,
      },
      {
        title: "Quiz",
        duration: "3 min",
        content: `
1. What two identifier types does User Scanner cover?
2. Why might you skip its email mode and use \`holehe -NP\` instead?
3. What is a \`loud\` check in Consensus terms?
4. Should adult/dating categories be on for training?
5. A username hit loads a captcha page. How do you score it?

**Answers**

1. Usernames and emails.
2. If User Scanner cannot clearly disable recovery/notify modules; Holehe's \`-NP\` is an explicit safe switch.
3. A module that may email/SMS the account holder (for example a password reset).
4. No — sensitive information risk and irrelevant to learning the workflow.
5. False positive / unknown — not a confirmed profile.
        `,
        exercise: "Run a username search on your test persona. Document ten hits with browser verification. State in two sentences whether you attempted email mode (and if not, why). Confirm in one sentence that you did not enable any loud/recovery option.",
      }
    ],
  },
  "gosearch-username-go": {
    id: "gosearch-username-go",
    title: "GoSearch: One Binary, Three Hundred Doorbells",
    description: "Install a single Go binary, check your own username across hundreds of sites, and compare the hit list to Sherlock without drowning in Python packaging.",
    level: "Beginner",
    estimatedTime: "35 min",
    sections: [
      {
        title: "What GoSearch does",
        duration: "8 min",
        content: `
### Username checking without the Python soap opera

GoSearch is a username checker written in Go. You download one binary, or you build one, you point it at a handle, and it tests a few hundred sites for a matching profile URL. Functionally it sits next to Sherlock: public pages, existence rules, a printed list of hits. It does not read minds, and it does not become more accurate because the download was a single file.

There are three reasons it is in the twelve, and none of them is "it finds the truth Sherlock missed".

First, a single binary is kinder on a locked-down Windows or Mac machine where \`pipx\` is a fight with an administrator who has already said no. Second, the project has been actively maintained, unlike several username tools that were cut from this course for going quiet. Third, comparing two tools on the same handle is how you learn that FOUND is a vote. Votes can be wrong in unison.

The Consensus snapshot used for this course put GoSearch at a few hundred sites, not Maigret's thousands. Fewer hits than Maigret is the normal outcome, not a sign you broke it. Quote a site count in a report only after you have read the README for the version you ran. This paragraph will go stale. The binary's own documentation will not, if you bother to open it.

The licence is GPL-3.0. Running it yourself, unmodified, to study your own handle, is the use this lesson describes. If you later give someone else a modified binary, GPL-3.0 expects you to offer them the corresponding source. "I found a build on a forum" is not the interesting part of that sentence. Shipping code you cannot hand over the source for is how a tidy install becomes a licensing mess. Using the upstream release, as a learner, does not require you to solve that today. It requires you not to pretend the licence is MIT.

> If your laptop treats Python like a contagious disease, GoSearch is the spare key. The spare key still opens the wrong doors.
        `,
      },
      {
        title: "Walkthrough",
        duration: "12 min",
        content: `
### Target

Your own username, or \`pip_tadwell_osint101\` if you have been a good student and built the persona. Create the persona before you blame the tool for "finding nothing". Nothing is the correct result for a handle that exists nowhere. It is also the correct-looking result for a tool that never ran. You need to know which one you are looking at.

Write the purpose sentence first. "I am comparing one Go binary with Sherlock, on a handle I own, to see where they disagree." That sentence keeps you from adding a second, real person's name "as a control". You do not need a control. You need a disagreement you can open in a browser.

### Install

Follow the upstream README for a release binary that matches your operating system. That is the path of least drama. If you already have a Go toolchain and you prefer to build, the module path this course is willing to print is:

\`go install github.com/ibnaleem/gosearch@latest\`

If that path fails, stop typing variants. Go back to the README. Projects move modules. A lesson that "helpfully" guesses the new path will send you to someone else's repository.

When a binary exists, ask it for help before you give it a person-shaped string:

\`gosearch -h\`

If \`-h\` is silent, try \`--help\`. If both are silent, you do not have the tool you think you have. Find out what you installed before you interpret an empty hit list as a finding about your persona.

Read the flags with one question in mind: what limits the run? Timeouts, a site filter, an output file. Use a timeout if one is documented. Avoid Tor and proxy switches for class. If the help text's only mode is "check everything", run it once, on your handle, and do not loop it. Save stdout to a file yourself if the tool does not write a CSV. You will want the list beside Sherlock's list, and terminal scrollback is where evidence goes to die.

### Run, then sit on your hands

A teaching shape, if the help text shows a single positional username and nothing alarming, is:

\`gosearch pip_tadwell_osint101\`

If your version wants flags around that, add only flags you saw in \`--help\`. Do not copy a ten-flag incantation from a gist. Gists survive longer than flags do.

Let it finish. One run. If it errors halfway, read the error. A missing library or a refused site is not a clue about Pip Tadwell. Fix the install or accept the partial list, and label the partial list as partial.

### Verify, which is the whole point of a second tool

Open every hit. Sort into confirmed mine, exists but not mine, and false positive. Then put Sherlock's CSV, or a short Maigret run, beside it. A useful row records four things: the site, what GoSearch said, what the other tool said, and what the browser showed.

You are hunting disagreements, and you are hunting lazy agreements.

- Both tools hit, and the browser shows your test account. Confirmed. Dull. Necessary.
- GoSearch hits, Sherlock misses, the browser shows a soft 404 or a cookie wall. GoSearch false positive. Sherlock's silence was the better answer, this time, on this site.
- Sherlock hits, GoSearch misses, the browser shows your profile. GoSearch false negative. Smaller corpus or a staler rule. Not a moral victory for Sherlock.
- Both tools hit, the browser shows a challenge page. Shared false positive. Agreement was the trap.

Write one sentence on the disagreement you found most annoying. Annoyance is a sign you expected the tools to be oracles. They are notebooks with initiative.

> Tools do not argue because one of them is honest. They argue because their rules are different ages.
        `,
      },
      {
        title: "Limits and false positives",
        duration: "7 min",
        content: `
### A smaller net, the same holes

GoSearch's shorter site list is a feature during training. You can finish the verification. It is a limit on a real question: a miss only means "not in the sites this binary checked, or not detected there". People hear "no hits" and translate it to "no accounts". The translation is the error. Maigret can still be noisy on a handle GoSearch shrugs at, and both can be wrong about the one site you care about.

The false-positive classes are the ones you already know from Sherlock, and they do not get a special exemption for being compiled:

- Soft 404s and branded "user not found" pages that return a success status.
- Captcha and interstitial walls that look like a profile to a bored rule.
- Status-code lies, where the site says 200 for everything, including nothing.
- A username echoed on a generic page, which satisfies a "the name appears" check.

False negatives are just as ordinary. The site blocked the request. The rule looks for a string the redesign deleted. The profile exists only when you are logged in, and you are not. A binary does not negotiate with any of that. It prints the rule's opinion and moves on.

Rate limits still apply. A single file is not a cloak, and it is not a queueing system. If you run GoSearch, then Sherlock, then Maigret, then Aliens Eye, then FindMe, back to back, against the same handle, you have introduced yourself to a lot of front doors in one hour. For this lesson, GoSearch plus one other tool is the comparison. Save the grand tour for a later week, and still only on your persona.

GPL-3.0 does not change the false-positive rate. It changes your obligations if you redistribute a modified program. Do not strip the licence notice off a binary because it "looked untidy in the screenshot". The screenshot is not the compliance step. Keeping the upstream licence text with the tool is.

Overlap with Sherlock is high on purpose. Use GoSearch as a cross-check of rules, not as a second full-time personality in your toolkit. If, after a careful diff, it never adds a confirmed hit and it adds several false positives, you are allowed to delete it. That outcome is success. It is discussed again in the FindMe lesson, because some people need to hear it twice.

> Fewer sites is not a defect until you needed one of the sites it skips. More sites is not a virtue until you open them.
        `,
      },
      {
        title: "Ethics and legal limits",
        duration: "5 min",
        content: `
### Three tools is not three times more lawful

The Australian frame does not reset because you changed programming languages. Collecting username hits about an identifiable person, for a business, still engages APP 3 (necessary for the purpose), APP 6 (no fresh purpose without a basis), and APP 10 (do not rely on rubbish). Running GoSearch and Sherlock on a stranger does not average out into a lawful collection. It is the same collection, done twice, slightly louder, with two different false-positive accents.

APP 8 matters when the checks land on overseas sites, which they will. Your notes should be able to say "these requests left the country" without surprise. A purpose note that says "local checks only" is false for this entire track.

Platform terms are a per-site problem. The binary being yours does not make their servers yours. Automated access is restricted on a lot of the sites in every username corpus. One run, on a handle you own, for a written learning purpose, is the low-risk end. A scheduled job that sweeps new usernames every night is a product, and products need a conversation you are not having in this lesson.

The statutory tort for serious invasions of privacy (since 2025) and the Commonwealth doxxing offences about menacing or harassing release of personal data via a carriage service both care about publication. Keep the diff in your exercise notes. Do not post it with a real person's name attached because the disagreement was interesting.

Queensland's Security Providers Act 1993 still sits on top of paid investigative work. A Go install is not a licence. If the task is a favour that is actually a job, stop and sort the licence before you sort the PATH variable.

> The spare key is allowed to open your own door. It is not allowed to try every door in the building because the build succeeded.
        `,
      },
      {
        title: "Quiz",
        duration: "3 min",
        content: `
1. What practical advantage does a Go binary have for some learners?
2. What licence is GoSearch under?
3. Why compare GoSearch hits to Sherlock on the same handle?
4. A site appears only in GoSearch and the browser shows a cookie wall. Verdict?
5. Does using two username tools change Privacy Act obligations?

**Answers**

1. Easier install on machines where Python packaging is painful; one binary to run.
2. GPL-3.0.
3. Disagreements reveal stale or differing detection rules; neither list is gospel.
4. Unknown / false positive until a real profile is confirmed.
5. No. Collection for a business purpose still needs a lawful purpose under the APPs.
        `,
        exercise: "Run GoSearch on your test persona. Verify hits in a browser. Diff the list against Sherlock (or Maigret `--top-sites 50`). Write four sentences: install friction compared to Sherlock, one shared hit, one disagreement and how you resolved it, and whether you would keep GoSearch in your personal toolkit.",
      }
    ],
  },
  "aliens-eye-username": {
    id: "aliens-eye-username",
    title: "Aliens Eye: Another Username Net (Use It to Argue With Yourself)",
    description: "Run a third username checker on your own handle and practise reconciling disagreements between tools instead of trusting the longest list.",
    level: "Beginner",
    estimatedTime: "35 min",
    sections: [
      {
        title: "What Aliens Eye does",
        duration: "8 min",
        content: `
### Yes, another username scanner, on purpose

Aliens Eye checks a username across a wide set of sites. The Consensus snapshot for this course put that coverage in the high hundreds. The licence is MIT. The project was still receiving pushes when this lesson was written. Both of those facts can change. Before you tell anyone the tool is "active" or quote a site count, look at the repository, not at this paragraph.

Feature-wise it will feel familiar if you have done Sherlock and Maigret. You feed it a handle. You get candidate profile URLs back. There is no special sensor hiding in the name. A username tool with a dramatic name still fetches pages and applies rules.

It is in the twelve because comparison is a skill, and beginners treat the tool with the biggest number as the winner. Analysts treat disagreement as a checklist. Aliens Eye is the sparring partner. You already have Sherlock. You may have Maigret and GoSearch. A third list is useful only if you do the reconciliation. If you only keep the longest list, you have learned shopping, not tradecraft.

Some blurbs in the wider ecosystem attach the word AI to tools in this family. If the README in front of you mentions a model, an agent, or a score, ignore it as evidence. A URL you can open is evidence. A paragraph the tool wrote about the URL is a summary of a page you should have opened. Summaries of pages you did not open are how fictional case files get their confident tone.

> The point is not to marry a fourth username tool. The point is to catch the first three being incomplete, and to catch this one being confident.
        `,
      },
      {
        title: "Walkthrough",
        duration: "12 min",
        content: `
### Target

Your test persona or your own handle. If \`pip_tadwell_osint101\` already has Sherlock notes, reuse them. The exercise is a reconciliation, and reconciliation needs two earlier columns. If you have no earlier columns, run Sherlock first, even if you are impatient. Aliens Eye with nothing to compare against is just another list, and this course is not short of lists.

Purpose sentence, written down: "I am comparing three username tools on a handle I own, and I will believe the browser where they split."

### Install, without folklore

Follow the upstream README for Aliens Eye (the repository name has used an underscore: Aliens_eye). It is a Python CLI. Use whatever install method the README currently prefers. Do not invent a package name by swapping spaces for hyphens until something installs. The something might be a different project.

When it runs, ask for help:

\`aliens_eye --help\`

The command name itself may differ. The lesson's \`aliens_eye pip_tadwell_osint101\` line is a shape, showing "binary, then the handle", not a promise that the executable is spelled that way on your disk. If \`--help\` shows another name, another order, or a required flag, follow \`--help\`.

Keep the run ordinary.

- No Tor requirement for class. If the README treats Tor as optional or recommended for other work, leave it off.
- No "scan everything, then scan it again" mode. If \`--help\` offers a site limit or a category filter, use the limit. A shorter list you finish is worth more than a complete list you do not open.
- No proxy chain you copied from a forum signature.
- One handle. Yours.

Save the output under a boring filename that includes the tool name and the date you actually ran it. Future-you will not remember which terminal tab was Aliens Eye.

### The reconciliation sheet

Build a sheet with one row per site that any of your tools mentioned. Columns: site, tool A (Sherlock or Maigret), tool B (GoSearch or the other one), tool C (Aliens Eye), browser truth, bucket.

You will not have time to be equally curious about every row, so spend the time in this order:

1. Rows where the tools disagree. Open all of them.
2. Rows where only one tool has a hit. Open all of them. Unique hits are where a stale rule hides behind a feeling of discovery.
3. A sample of rows where all three agree, including at least one you know is yours and at least two you did not expect. Agreement is not a holiday. Three stale rules can hold hands.

Browser truth is a short phrase, not a tick. "My test repo, created for this course." "Stranger, different photo, bio in another city." "Cookie wall, no profile." "Soft 404, page says user not found." Ticks cannot be audited. Phrases can.

If a tool prints a confidence number or a generated sentence, do not add a column for it. The number did not open the URL. You did.

> Most of the learning is in the rows where the tools refuse to sing together. A wall of identical yeses is a wallpaper.
        `,
      },
      {
        title: "Limits and false positives",
        duration: "7 min",
        content: `
### Overlap, unique hits, and the choir problem

High overlap with Maigret and Sherlock is the expected picture. The corpora rhyme, even when they are not copies. A unique hit needs extra suspicion, not extra excitement. The usual story is a rule the other projects already dropped, still firing on a page that is not an account. Sometimes the unique hit is real, and the other tools are stale. You cannot tell those stories apart from the spreadsheet. You can tell them apart in the browser, and only there.

An "AI" label does not repair a soft 404. If the tool explains a hit in a fluent sentence, the sentence is only as good as the page. Fluent and wrong is the failure mode of both humans and models. Your standard stays physical: does a profile load, and is it the persona?

Maintenance being "good" is not the same as Maigret's pace, and it is not a promise about next month. Expect stale rules. Expect a site that worked in the project's example screenshot to fail in your kitchen. Screenshot docs are marketing with a border.

Running three full sweeps multiplies two costs. Your IP shows up at more doors, which is a terms-of-use and rate-limit problem. And you collect more personal information, even when the handle is yours, the moment a stranger's profile is a hit. For training, keep lists short where the flags allow it. Where they do not, do not compensate by adding a fourth tool. Compensate by verifying fewer rows properly instead of all rows badly.

The familiar junk drawer, so you can name it in the quiz of your own head:

- Challenge pages scored as profiles.
- Soft 404s.
- Login walls whose HTML contains the username.
- Rate-limit gaps that you record as "not present" because the row is missing.
- A parsed bio that is actually the site's footer, repeated on every page, including the missing-user page.

> If only one tool saw it, your first theory is "stale rule", not "hidden account". The browser is allowed to prove you wrong. The theory is not allowed to skip the browser.
        `,
      },
      {
        title: "Ethics and legal limits",
        duration: "5 min",
        content: `
### Stacking tools is not a legal strategy

APP 3 still asks whether the collection is reasonably necessary for a stated purpose. "I wanted three tools" is not a purpose. "I am learning how disagreement works, on a handle I created" is a purpose, and it has a natural end: when the sheet is filled. Three noisy scanners against a private individual, for practice, fails APP 3 on the purpose and fails basic manners on the way there. It may fail more than that, depending on what you do with the results. Do not find out.

APP 6 is the anti-hoarding principle in this track. A reconciliation sheet built for study does not become an HR file on Monday without a new purpose, a new necessity test, and a hard look at APP 10. Most of the rows will not survive APP 10, because most of the rows were never opened. That is a reason to open fewer sites about other people, not a reason to open all of them "so the file is compliant". The compliant version of a practice run is the one that was about you.

APP 10 is the browser column. A tick mark copied from the tool is not a quality check. The phrase you wrote after looking at the page is the quality check. If you would be embarrassed to read that phrase to the person, you have your answer about whether to keep the row.

Platform terms get less sympathetic as the request count rises. Three full corpora are a lot of automated GETs. Modest runs, own handle, no evasion (no Tor, no proxy roulette) is the line this course draws. Evasion does not make a terms breach polite. It makes it look planned.

Publication risks are unchanged: the statutory privacy tort since 2025, and Commonwealth offences about using a carriage service to release personal data in a menacing or harassing way. A reconciliation sheet with a stranger's name on it is a document. Treat it like one.

Queensland paid work still needs the right licence under the Security Providers Act 1993. Aliens Eye does not get a special entry in that Act for having an energetic name.

> Practice targets are accounts you opened, or a persona you invented and registered. Anyone else's name is a different course, and this is not it.
        `,
      },
      {
        title: "Quiz",
        duration: "3 min",
        content: `
1. Why is Aliens Eye in the course if Sherlock and Maigret already cover usernames?
2. What should you do with a hit that only one of three tools reports?
3. Does an "AI-assisted" label change how you verify a URL?
4. Name one risk of running multiple full username sweeps on the same target.
5. Who owns the only practice targets allowed in this lesson?

**Answers**

1. To practise reconciling disagreements, not to crown a winner.
2. Open it manually and treat it as untrusted until confirmed; unique hits are often stale rules.
3. No. You still open the URL and look for a real profile.
4. More rate limits, more ToS exposure, more personal information collected without clearer purpose.
5. You — your accounts or a test persona you created.
        `,
        exercise: "Run Aliens Eye on your test persona. Produce a reconciliation sheet against two other username tools. Write five sentences covering: how many triple-agreements you saw, one disagreement and the browser outcome, whether any unique hit survived verification, how long the runs took, and which single tool you would keep if forced to delete two.",
      }
    ],
  },
  "linkook-account-linking": {
    id: "linkook-account-linking",
    title: "Linkook: Follow the Links They Publish About Themselves",
    description: "Trace linked social accounts and emails from public profile connections \u2014 tradecraft that beats brute-force username blasting when the subject helpfully links their own footprints.",
    level: "Beginner",
    estimatedTime: "35 min",
    sections: [
      {
        title: "What Linkook does",
        duration: "8 min",
        content: `
### The subject did half the work, or they did not

Most of the tools in this track ask a large number of sites a repetitive question: do you know this handle? Linkook is here because that question is not always the best question. People publish links to their other accounts. A code-host README, a bio with three handles, a personal site with a row of icons, a link-in-bio page. Those links are statements the person made on purpose, in public. Following them is closer to reading than to trawling.

Linkook helps collect linked social accounts, and emails when those emails are actually published on the pages it can see. The Consensus snapshot counted a small username-site list next to Maigret's thousands. If you came here for coverage, you came to the wrong lesson. The value is the edge between two accounts, with a page you can cite. A tool that returns fifty unexplained URLs has not done Linkook's job. It has done a shy version of Sherlock's job.

It will not invent links that are not on the page. A quiet subject stays quiet, and that quiet is a result. A person who treats their handle as a brand will hand you a map, because the map is the brand. Both outcomes are allowed to be the end of the enquiry. "The tool found little" does not trigger a fallback to blasting four hundred sites unless your purpose sentence says that is the next step. Often it should not.

Parsers read HTML. They miss what a browser only builds after JavaScript runs. They also "find" links that are site chrome: the forum's own Twitter, the template's placeholder, the "share this" button. Your job is to keep those out of the graph. Linkook's job is to show you candidates. Candidates are not edges.

> Brute-force username search is a trawl. Link following is reading the brochure they left at the door. If there is no brochure, do not forge one.
        `,
      },
      {
        title: "Walkthrough",
        duration: "12 min",
        content: `
### Build a subject who actually links things

Use your own public profiles, or a test persona you build with deliberate cross-links. The useful fixture looks like this, and you control every node of it:

- A code-host account for \`pip_tadwell_osint101\` whose bio or README names a personal page you also control.
- That personal page, a single HTML file is enough, with one outbound link to a third profile you created (a fediverse account, a forum, a second code host).
- Optional: the same page lists an email address you own, written in clear text, not as a puzzle. You want to see whether a parser can lift an address that is really there. You do not want to hide it from yourself.

Do not practise on a stranger's link-in-bio page. Their brochure is public. It is still not your lab. The difference matters the moment a parser attaches the wrong email to the wrong name and you screenshot it.

Purpose sentence: "I am following links I published, between accounts I created, and I will drop any edge I cannot cite."

### Install and run, then distrust the picture

Follow the upstream README. The command shape in this lesson is:

\`linkook pip_tadwell_osint101\`

That is a shape: tool, then starting username. Run \`--help\` (or \`-h\`) on the installed binary and obey it if the shape is wrong. Some versions want a profile URL instead of a bare handle. Give them the URL of a page you published. Do not give them a URL you merely found interesting.

If \`--help\` offers a depth or recursion limit, set it low. One hop is enough to learn what an evidence URL is. A deep crawl of everyone your persona follows is a different project, and it fails the purpose sentence you just wrote.

No Tor homework. No credential flags. If the tool asks you to log in, you are in the wrong mode. Public pages only. Logging into a platform to pull a friends list is not link-following. It is access to an account, and it is out of this lesson entirely.

### Draw the graph on paper

Paper is the right technology. A tool's graph view will look more certain than your evidence, and certainty is the bug.

- Start node: the profile or URL you entered.
- An edge exists only if you have an evidence URL: the page where the link was visible to you, in a browser, not only inside the tool's JSON.
- The other end of the edge is the account or address that page actually pointed at.
- No evidence URL, no edge. Delete it. You can be fond of it and still delete it.

For each edge, write what kind of thing it is. "Bio link on the code host, to my page." "Footer icon on my page, to the forum account." "Email address in the page source, and it is the one I typed there yesterday." If you cannot finish the sentence, it is not an edge.

Open every linked profile and confirm it is still your persona. Tools mis-parse HTML. Humans mis-click. A link that used to be yours and now points at a parked domain is a dead edge. Record the death. Do not quietly relabel it.

If an email appears that you did not publish, stop treating the graph as a map of you. Note the address only as "unverified, not mine, not to be probed". You do not send mail to it. You do not run Holehe against it. You do not run Mailcat against the local-part for sport. The Holehe lesson, if you do it, stays on \`holehe -NP\` and on an address you own.

### A manual lap, even if the tool was perfect

Do one hop yourself, without the tool, from the same start page. View source if you have to. Compare your hop to Linkook's hop. The difference is the lesson: what the parser saw, what it invented, and what a browser-only human saw because the link was an icon with no useful anchor text. Write four lines. The exercise wants that comparison in spirit, even where it asks for sentences rather than a drawing. Keep the drawing anyway.
        `,
      },
      {
        title: "Limits and false positives",
        duration: "7 min",
        content: `
### Quiet people, noisy templates, shared doors

Linkook, and any tool doing this job, only finds what is publicly linked and what its parser can read. A careful person with no cross-links yields almost nothing. That is not a malfunction you fix by switching to a five-thousand-site username blast. It is the subject declining to publish a map. Your purpose may end there. Good investigations end.

JavaScript-heavy pages and heavily themed link-in-bio services break simple parsers. You will open a page, see six icons, and the tool will report one link or none. Believe the page you can see, then decide whether the missing icons are worth adding by hand. Adding them by hand, with the evidence URL, is legitimate. Telling the tool to "try harder" with a proxy is not the fix.

Shared links are the identity trap. A company About page lists five staff accounts. A band lists four members. A project README links the organisation's chat. Those edges are real, and they do not merge the humans into one human. Your graph needs node labels that say "employer page" or "project", not a single blob called "the subject". If you cannot bear to split the nodes, you are not ready to write a finding.

Chrome and boilerplate produce false emails and false accounts. The word \`support@\` on a documentation site, the template author's credit link, a "follow us" icon that points at the platform itself. If the same link appears on every profile on that site, it is not a personal link. Check a second, unrelated user before you fall in love with an edge. Two minutes of that check prevents a very stupid paragraph.

Emails lifted from public pages are still personal information when they identify someone. Finding one does not authorise a registration probe, a password reset, or a "quick" Holehe run against a stranger. This track's email tools stay on addresses you own. Linkook does not create an exception by having found the address in a footer.

Coverage is the wrong scoreboard. Linkook is not a replacement for a Sherlock-class sweep, and a Sherlock-class sweep is not a replacement for reading the links a person bothered to publish. They are different moves. Use the move that matches the purpose sentence. Using both, on someone else, because both are installed, is how purpose sentences get embarrassed.

> If the edge has no page, it is not an edge. If the page lists a whole team, it is not one person.
        `,
      },
      {
        title: "Ethics and legal limits",
        duration: "5 min",
        content: `
### Published is not donated

Following links a person put on a public page is usually easier to explain than asking a hundred signup forms whether their email exists. Easier to explain is not the same as unregulated.

For a business purpose, those links and any names or emails on them are personal information about an identifiable person. APP 3 still requires the collection to be reasonably necessary. APP 6 still stops you using a link graph built for one question as the starter pistol for a different question. APP 10 still requires you to check that the link says what you think it says. A parser output you did not open fails APP 10 in a single line.

APP 8 is in play when the pages and the accounts sit on overseas services, which they almost always do. Say so in the method note. Do not describe a public-page read as a purely local act.

Platform terms have not left the building. Some sites forbid automated collection even of public pages. A modest run against pages you yourself published is the training case. Pointing a crawler at a platform that has already told bots to go away, and then routing it through Tor because the README mentioned Tor, is not a clever reading of the terms. This lesson does not use Tor, does not use logged-in sessions, and does not follow links into private groups, friend-only posts, or anything behind a password.

The line that matters in practice: you may read what the page shows a logged-out visitor. You may not "just log in" with your own account to see more, and you may not use a reset flow to test an email the page revealed. The moment a check would notify a human, you are in Holehe's loud-module territory, and that territory stays closed. Holehe, if you use it at all in this course, stays \`holehe -NP\`.

Publishing the graph is a new act. A notebook graph of your persona is coursework. A public graph of a real person, with emails attached, can be a serious invasion of privacy under the statutory tort in force since 2025, and it can be the kind of carriage-service release of personal data the Criminal Code (Cth) now treats as a doxxing offence when it is menacing or harassing. Keep coursework in the course.

Queensland investigators who do this for reward still need to care about the Security Providers Act 1993. Link following feels gentle. Gentle paid investigation is still paid investigation.

> The brochure is public. Your copy of the brochure, stapled to a name and posted on the internet, is a publication. Decide which one you are making.
        `,
      },
      {
        title: "Quiz",
        duration: "3 min",
        content: `
1. How does Linkook's main approach differ from Sherlock's?
2. What must every edge in your link graph include?
3. A company About page lists five staff GitHub links. Does that merge them into one person?
4. Why might Linkook return almost nothing on a careful subject?
5. Is a publicly posted email free of Privacy Act issues in client work?

**Answers**

1. It follows publicly published links between accounts rather than only testing a handle across many sites.
2. An evidence URL (the page where the link appeared).
3. No — those are five people who share an employer page.
4. They do not publish cross-links; there is nothing public to follow.
5. No. Collection for a business purpose can still engage the APPs.
        `,
        exercise: "On your own (or test persona) public profiles, run Linkook or manually perform the same link-following. Produce a graph with at least three nodes and evidence URLs on each edge. Write four sentences: what Linkook caught that a username blast might miss, one false link risk you checked, whether any email appeared, and when you would reach for Linkook before Maigret.",
      }
    ],
  },
  "socialscan-availability": {
    id: "socialscan-availability",
    title: "Socialscan: Available Versus Exists (Not the Same Thing)",
    description: "Query a few major platforms for username and email availability using socialscan \u2014 on your own identifiers only \u2014 and learn why 'taken' is not a full profile.",
    level: "Beginner",
    estimatedTime: "35 min",
    sections: [
      {
        title: "What Socialscan does",
        duration: "8 min",
        content: `
### Asking the registration desk, carefully, and only a few desks

Socialscan checks whether a username or an email looks available, taken, or invalid on a small set of major platforms. It is a library and a command-line tool, under the Mozilla Public Licence 2.0. The platform list is short on purpose, and it changes between versions. Releases this course looked at have included names in the family of Instagram, X (Twitter), GitHub, Tumblr, and Last.fm. Your installed \`--help\` is the list. This paragraph is not the list. If a platform you care about is missing, socialscan did not check it. Silence is not a finding.

It talks to registration-style endpoints rather than loading a profile page. That is why, on the few sites it supports, it can be more precise than "did this URL 404?" checkers, and why it sits closer to Holehe than to Sherlock on the risk spectrum. You are not reading a shopfront. You are asking a signup desk whether the name is still for sale.

Learn the three words and refuse to upgrade them:

- Available. The platform says it would let someone register this identifier. Nobody in this course is going to register it as a stunt against a real brand.
- Taken, or unavailable. The platform says the identifier is in use, reserved, or otherwise not open. That is a registration answer. It is not a profile URL, a display name, a photo, or an identity.
- Invalid. The platform rejects the format. Too long, wrong characters, or otherwise not a name it will even consider.

"Taken" does not introduce you to the account. It does not mean the account is active. It does not mean a human, rather than a brand or a reserved word, holds it. Deleted accounts often keep the name taken. \`admin\` is taken everywhere and belongs to nobody you are looking for.

> Sherlock asks whether a shopfront seems to exist. Socialscan asks whether the name is still on the shelf. People mix those questions up, and then they write the wrong sentence in the case file.
        `,
      },
      {
        title: "Walkthrough",
        duration: "12 min",
        content: `
### Target

One username you own, and one email address you own. The persona handle \`pip_tadwell_osint101\` is a good username if you registered it somewhere. The email must be an inbox you can open. A disposable address you created for the Holehe lesson is fine. Someone else's address is not fine, including an address you "only" want to check for availability because you are thinking of contacting them. Availability is still a probe of an account system.

Write this down before install: "I am asking a few platforms whether identifiers I own are free to register, and I will not turn a 'taken' into a profile I have not opened."

### Install

\`pipx install socialscan\`

If the package name in the upstream README has changed, the README wins. Then:

\`socialscan --help\`

Confirm the flags on your version before you trust a blog, or this lesson. Two flags that have existed upstream, and that you should only use if \`--help\` still lists them:

- \`-p\` / \`--platforms\` limits which sites you query. Use it. The whole point of a small tool is that you can name the sites. Pick two or three, not "all of them because the default was easier".
- \`-a\` / \`--available-only\` hides everything except free names. That is a branding toy. Investigations care about taken as well. Leave it off for this exercise so you can see the full answer.

There is no loud switch to heroically disable, because this tool is not a password-reset cannon. You still do not pair it with a tool that sends mail or codes. No Holehe without \`-NP\`, and no Holehe in the same breath as a stranger's address. No User Scanner email mode beside it "for comparison" unless that run is also on your address and also quiet. One identifier, one quiet tool at a time, is how you notice which one emailed you.

### A run you can explain

A teaching shape, once \`--help\` agrees that usernames and emails can share a command, is:

\`socialscan -p github pip_tadwell_osint101\`

Then a second command for your email, with a platform \`--help\` actually offers. If the flag for selecting platforms has been renamed, use the new name and still select, rather than querying the default world.

Read every line the tool prints. Copy them into a table with four columns: the query (handle or email), the platform, the word it returned (available, taken, invalid, or whatever wording your version uses), and what you are willing to claim in a sentence.

The claim column is where students get sloppy, so here is the allowed dialect:

- "GitHub's registration check says this handle is taken." Then, separately, you open \`https://github.com/\` plus the handle in a browser, and you write what loaded.
- "The endpoint says this email is not registered on this one platform." You do not add "so they do not use it".
- "Invalid." You fix nothing. You note the format rule you bumped into.
- "Error, rate limit, or nonsense." You write "not checked". You do not coerce it into available.

Always open a profile URL yourself when the identifier is a username and you care whether a page exists. Socialscan will not fetch the profile for you. That is a feature. It stops you confusing a registration bit with a biography. Sometimes "taken" and the browser disagree: the name is reserved, the page 404s, the account is suspended, or you are not allowed to see it logged out. Record the disagreement. It is the best row in the exercise.

Do not run a list of emails. Do not run a list of guesses. One username, one email, a handful of platforms, once.
        `,
      },
      {
        title: "Limits and false positives",
        duration: "7 min",
        content: `
### Small on purpose, wrong in specific ways

The platform list is tiny next to Maigret or even Sherlock. A clean socialscan run tells you about those platforms and no others. "Not on the internet" is not a result this tool can produce. If you needed to know about a forum, this was the wrong tool, and running it did not make progress. It made a different fact.

Registration endpoints change, and they change without sending you a letter. A module that was accurate when the README was written can start returning available, or taken, or a polite error, after the platform updates a signup flow. Treat "socialscan is the accurate one" as a hypothesis you re-check, not as a slogan. The Holehe lesson makes the same point about stale modules. It applies here even though the list is shorter. Short lists rot too. They just rot in fewer places, which makes the rot easier to miss because you trusted the reputation.

Reserved names are false people. \`admin\`, \`support\`, \`help\`, a brand's product name, a single letter the platform keeps for itself. Taken, and there is no human to attribute. If your persona is a normal long handle, you will mostly avoid this. If you experiment with a short word "for interest", you will manufacture a ghost and then feel compelled to explain it. Don't. The long test handle is the interesting case, because a taken on that handle is either you, or a surprising collision you can check.

Deleted and suspended accounts keep names taken. The registration desk's memory is longer than the profile page. This is why the browser column exists. "Taken" plus a missing profile is a normal row. Write it that way. Do not upgrade it to "they deleted it after I looked", which is a story you have no evidence for.

Hitting signup endpoints is the sort of traffic platforms notice. Keep the volume low. One lesson, a few platforms, identifiers you own. If you get rate-limited, the result is "they stopped answering", the same as Holehe's \`[x]\`, not a secret third state you interpret as exists. Stop for the day. Do not rotate networks to get a cleaner answer. A cleaner answer obtained by evasion is not cleaner.

MPL-2.0 is file-level copyleft. If you only run the tool, you can finish this lesson without becoming a licensing hobbyist. If you later copy socialscan's source into a product and distribute it, read MPL-2.0 first, including the part about modifications to MPL files. Do not assume "it is not GPL, so anything goes". Anything does not go. Anything is how attribution disappears.

> Available means the shelf is empty. Taken means the shelf says it is not empty. Neither sentence names a person.
        `,
      },
      {
        title: "Ethics and legal limits",
        duration: "5 min",
        content: `
### A precise question is still a question about a person

An email address that identifies someone is personal information. A username often is too, once it is tied to a person you have in mind. Asking an overseas registration API about either one, for a business, is a collection. APP 3 asks if you needed to. APP 6 asks if this is still the purpose you had. APP 8 is the cross-border rule: the platform is almost certainly not in your suburb, and sending the identifier there is a disclosure you should be able to describe. APP 10 forbids you to write "has an Instagram" in a report when all you had was "taken" and you never opened a page.

Computer-misuse risk sits in the same family as Holehe, because these are account-system endpoints, not blog posts. The Criminal Code (Cth) Part 10.7 and Queensland's Criminal Code s 408E are the provisions a lawyer will want to look at before this is client work. This course does not give you that advice. It gives you a constraint that keeps the exercise obvious: identifiers you own, no reset tools beside the command, no volume.

Platform terms frequently ban automated checks against signup flows. Your own email, a handful of queries, a learning note, is the lowest-risk use. A script that runs every new sales lead through socialscan before breakfast is a product feature, and it needs a purpose, a collection notice conversation, and someone whose job is the terms. That person is not the \`-p\` flag.

There is no branded loud mode here, and that absence is not a dare to build one. Do not wrap socialscan around a password-reset workflow. Do not "verify" a taken email by trying to sign up as them and seeing the error. The error is the result you already had. Clicking through until a human gets a mail is the result you were told not to produce. If you also use Holehe, it stays \`holehe -NP\`. If you also use Numint, it stays \`--offline\`. This lesson does not relax either rule.

Sensitive categories are not socialscan's party trick, but the reports you write afterwards can still wander into sensitive information. Do not add health, religion, or sexual-life inferences on top of a taken bit. APP 3.3 will not be impressed by your creativity.

Queensland paid investigations remain under the Security Providers Act 1993. A short platform list does not make it a hobby when money is involved.

> The smallest tool in the track can still be the one you have to explain, because it spoke to a signup server and not to a public page.
        `,
      },
      {
        title: "Quiz",
        duration: "3 min",
        content: `
1. What three result states does socialscan aim to return?
2. Why can socialscan beat Sherlock on GitHub accuracy *and* still be less useful alone?
3. Does "taken" on Instagram give you the profile owner's name?
4. Who may you run socialscan against in this lesson?
5. Which APP is most relevant when an Australian client's email is sent to an overseas registration API?

**Answers**

1. Available, taken, invalid (wording may vary slightly by version).
2. It queries registration servers for a few platforms well, but covers far fewer sites and returns no profile content.
3. No — only that the platform considers the identifier unavailable.
4. Yourself — your usernames/emails or a test persona you control.
5. APP 8 (cross-border disclosure), alongside APP 3 on whether collection was necessary.
        `,
        exercise: "Run socialscan on one username you own and one email you own, limiting platforms with `-p` if available. Record each result. For every \"taken\" username, try to open the matching public profile URL manually. Write four sentences: which platforms answered, one case where \"taken\" did not equal a visible profile, why the small platform list matters, and when you would pick socialscan over Holehe or Sherlock.",
      }
    ],
  },
  "mailcat-nickname-email": {
    id: "mailcat-nickname-email",
    title: "Mailcat: Which Providers Know That Nickname?",
    description: "Check which mail providers accept a nickname as an address \u2014 using only nicknames you own \u2014 without Tor theatre or anything that notifies a human inbox on purpose.",
    level: "Beginner",
    estimatedTime: "35 min",
    sections: [
      {
        title: "What Mailcat does",
        duration: "8 min",
        content: `
### From a handle to a handful of email-shaped guesses

Mailcat takes a nickname, the local-part of an address, and checks a set of mail providers for whether \`nickname@that-provider\` appears to exist. Depending on the provider, the check is an API query or an SMTP conversation. The README's pitch includes the idea that this can be done without notifying the human who owns the mailbox. Treat that as a design aim you verify on an address you own, not as a guarantee you extend to other people. Aims are not switches. If a run ever produces a mail, a code, or a notification, you stop, and that provider is done for the day.

This is useful in a narrow way. You already have a handle. You want a candidate list of addresses that *might* be that handle at a few providers, so that later, on an address you yourself control, you can see what "exists" looks like. It is not a licence to guess a stranger's inbox, and it is not a step you follow by trying passwords. The candidate is a hypothesis. Hypotheses do not get logged into.

The licence is Apache-2.0, which is why you will hear it described as friendlier for products than the GPL tools in this track. Friendlier for a software licence is irrelevant to the person whose nickname you typed, and irrelevant to the provider's terms. Apache-2.0 still expects you to keep its notices if you redistribute the software. It never expected you to probe inboxes.

Common nicknames collide. \`pip_tadwell_osint101\` is a good training input because it should not belong to a thousand strangers. \`alex\` should, and will, and a hit on \`alex@\` a large provider tells you almost nothing except that the world contains people named Alex. If your real handle is a common word, do not use it for this lesson. Use the long persona. You are trying to see the tool, not to map a city.

> Mailcat turns a nickname into email-shaped hypotheses. A hypothesis is not an envelope, and you do not get to open it to see if you were right.
        `,
      },
      {
        title: "Walkthrough",
        duration: "12 min",
        content: `
### Target

A nickname you own. The local-part of an email address you can log into, or \`pip_tadwell_osint101\` if that string is yours and not a joke you borrowed from a classmate. Do not feed it a client's brand, a colleague's first name, or "the guy from the forum". Practice on those is how candidate lists leak into real notebooks with real names on them.

Purpose sentence: "I am learning what an existence check claims, on a nickname I control, and I will not touch any address that is not mine."

### Install

\`pipx install mailcat-osint\`

If that name does not match the README you have open, stop and use the README. Then:

\`mailcat --help\`

Read every option before you run anything. You are sorting them into three piles:

- Fine for class: an input nickname, a way to print results, a way to limit providers if it exists.
- Not for class: Tor, proxies, and anything described as a workaround for blocking. The README may recommend Tor for heavier, real-world use. That is an operator-OPSEC discussion for another context. It is not homework. A plain run from your own connection, once, is the lesson.
- Never, in this course: options that send mail, that request a reset, that "verify by inbox", or that ask for a password. Mailcat does not need a password to anything of yours. If a build asks for one, you are off the path. Quit.

### One run

A teaching shape, if \`--help\` shows a positional nickname, is:

\`mailcat pip_tadwell_osint101\`

Use your real training nickname. If the tool insists on flags you have not read, do not add them to get past the error. Read them. Prefer API-style checks when the help text lets you choose, only because they are easier to reason about. Skip any provider or method you cannot explain in one sentence. "SMTP something" is not a sentence. If you cannot explain it, you cannot tell whether it notifies anyone, so you leave it out.

Let it finish once. Save the output. Do not pipeline the candidates into another tool.

### How to read a candidate without getting clever

Make a table with three columns: the candidate address, what Mailcat claimed, and the only next step this course allows.

- If the address is one you control, the next step is to check it in a provider interface you can already log into, or to remember that you created it. You are confirming ground truth. You are not "testing the reset button".
- If the address is not yours, the next step is to leave it alone. You may write "unverified candidate" in your private exercise notes, and then you stop. You do not run Holehe on it. You do not run socialscan on it. You do not send a message "just to see if it bounces". A bounce probe is still you poking an inbox.
- If the tool says the address is missing, you record "not detected at this provider, by this method". You do not record "they do not use this provider". Methods fail. Providers ignore SMTP. APIs change.

Watch your own inbox anyway, the one associated with the nickname if it exists. The README hopes you will not be notified. Hope is the thing you verify. If a message arrives that you did not request, stop, name the provider in your notes, and do not re-run that path.

No second run with a shorter, more common nickname "to see a busier result". Busy results are other people's mailboxes. You have now seen why the persona handle is long.
        `,
      },
      {
        title: "Limits and false positives",
        duration: "7 min",
        content: `
### Catch-alls, collisions, and confident servers

SMTP probing is noisy, and a lot of providers refuse it, tarpit it, or lie. A timeout is not a "no". A "yes" from a server that accepts every recipient is also not a yes. Catch-all domains are configured to accept any local-part, so the mail server can sort or reject later, inside the house. From the outside, every guess looks real. \`pip_tadwell_osint101@a-catch-all.example\` can "exist" in the tool's output and correspond to no mailbox anyone reads. If you do not know whether a domain is catch-all, you do not know whether "exists" means anything. The honest grade is "the server accepted the recipient, which this domain may do for everyone".

APIs go stale and get shut. A provider that answered last year may now return a shape the module misreads as exists, or as missing. Mailcat's maintenance status is a reason it made the twelve, not a promise that every provider module is current. Check the project's README before you describe the tool as actively maintained in a report. Do not borrow a date from this lesson. It does not contain one.

Collisions dominate common nicknames. A hit on a short local-part at a big provider is a crowd, not a person. Even a long nickname can be copied. Your confirmation path is ownership: can you log in, because you created it? If you cannot, the row stays unverified, forever, as far as this course is concerned. There is no second path called "try harder".

False missing is the twin. A provider that blocks unauthenticated SMTP will look empty even when the mailbox is real. If you check a provider where you know you have an account and Mailcat says no, congratulations. You have a false negative, which is the result that stops you telling a client "no email at this host". Write it up. Negative results about the tool are results.

Tor, proxies, and "what my IP looks like" are discussed in some READMEs because operators who do this work at volume have problems you do not have during a single training run. Importing that setup into class adds complexity and, often, a terms issue, without teaching you how to read a catch-all. Leave it.

> A server that says yes to every name is not well informed. It is hospitable. Hospitable servers make terrible witnesses.
        `,
      },
      {
        title: "Ethics and legal limits",
        duration: "5 min",
        content: `
### Candidates are personal information as soon as they identify someone

The moment a candidate address is tied to an identifiable person, it is personal information under the Australian Privacy Act, even if the address later turns out to be wrong. APP 3 asks whether you needed to generate that list for a stated purpose. "The nickname was sitting there" is not a purpose. APP 10 asks you not to treat a catch-all "exists" as a fact in a file that other people will act on. APP 6 asks you not to reuse a training list as a contact list for a different job. APP 8 applies when the check is sent to an overseas provider, which is the usual case. Write "the query left Australia" in the method note and you will be ahead of most people who use this tool.

Validating a candidate by logging in, by password guesses, or by reset flows is where this stops being an existence check and becomes something you will struggle to describe as authorised. Unauthorised access offences in the Criminal Code (Cth) Part 10.7 and the Queensland Criminal Code s 408E are the framework a lawyer will use. You do not need to finish that analysis to obey the course rule. The rule is: no passwords, no resets, no "verify by inbox", no mail sent to discovered addresses to see what happens. Not on strangers. Not on the one interesting row. Not "just for the address that looked real".

Provider terms matter as much as platform terms did for Sherlock. Mail systems are not a public profile page. Automated SMTP and API enumeration is exactly the behaviour many providers ban. One nickname you own, one plain run, no evasion, is the training boundary. A lead-enrichment script is a business, and it needs advice this page will not mime.

Do not launder Mailcat's output through Holehe to "confirm". If you run Holehe, it is \`holehe -NP\`, on an address you own, as its own lesson. Numint stays \`--offline\`. User Scanner email mode stays off unless it is clearly quiet and clearly yours. Chaining email tools is how a notification sneaks in through the one module you forgot to read.

Queensland investigators doing this for a fee still have the Security Providers Act 1993 to think about, plus the ordinary licence duties about purpose and about not freelancing a locate job because a tool made it easy. The statutory privacy tort since 2025, and the Commonwealth doxxing offences, are what you bump into if a candidate list gets published to embarrass someone. Keep the exercise in the exercise.

> If the address is not yours, the investigation of that address is over. The note "unverified candidate" is the whole of the lawful curiosity.
        `,
      },
      {
        title: "Quiz",
        duration: "3 min",
        content: `
1. What input does Mailcat primarily take?
2. Why can catch-all domains wreck "exists" results?
3. Should you try passwords or resets against a Mailcat hit?
4. Why might the README mention Tor if we are not using it in class?
5. What is the correct next step when Mailcat lists an address that is not yours?

**Answers**

1. A nickname / local-part (and related username-shaped inputs).
2. They accept any local-part, so existence checks cannot distinguish real mailboxes.
3. No — out of scope and high legal risk.
4. Operator OPSEC for heavier/real-world use; not required for this owned-nickname exercise.
5. Leave it alone; at most note it as an unverified candidate under a lawful purpose later — never probe the inbox.
        `,
        exercise: "Run Mailcat on a nickname you own. List the candidate addresses returned. Mark which ones are actually yours. Write four sentences: how many candidates appeared, how many you control, one false-confidence risk (catch-all or common nickname), and when Mailcat would be the wrong tool compared with Holehe on a known full address.",
      }
    ],
  },
  "findme-username-simple": {
    id: "findme-username-simple",
    title: "FindMe: The Simple Username CLI (And When to Stop Collecting Tools)",
    description: "Run a straightforward username search on your own handle, use it as a cross-check, and practise retiring redundant tools instead of hoarding them.",
    level: "Beginner",
    estimatedTime: "35 min",
    sections: [
      {
        title: "What FindMe does",
        duration: "8 min",
        content: `
### A small hammer, and a question about your toolbox

FindMe is a small command-line username checker under the MIT licence. It looks for profiles linked to a handle across a few hundred sites. The Consensus snapshot used for this course put that figure a bit above four hundred, well short of Maigret, in the same neighbourhood as several tools you have already used. Maintenance has been quieter than User Scanner or Maigret. Both the count and the pace can change. The README you clone is the source for both claims if you ever repeat them outside class.

It is the weakest pick of the twelve on purpose. You do not need another way to ask the same question Sherlock asks. You need a point in the course where the correct professional move is to stop installing things. FindMe is that point. If it adds a confirmed hit the others missed, good, keep it as a cross-check and write down why. If it adds nothing but false positives and ten minutes, uninstall it. The uninstall is the advanced technique. The install is the easy part, which is why people accumulate seven username tools and still cannot say which hit they opened.

By now the track has handed you Sherlock, Maigret, WhatsMyName, GoSearch, Aliens Eye, and possibly User Scanner. They rhyme. FindMe rhymes too. The skill left to practise is sufficiency: the smallest set of tools that answers the question you wrote down, and a rubbish bin for the rest. A dock full of scanners feels like readiness. It is often procrastination with extra binaries.

> The most advanced move in this lesson is removing a tool you just proved you do not need.
        `,
      },
      {
        title: "Walkthrough",
        duration: "12 min",
        content: `
### Target

Your persona or your own handle, the same \`pip_tadwell_osint101\` you have been verifying all track, if that is the one you created. Do not revive a stranger's username "to give FindMe something juicy". Juicy means other people's lives. The tool is happy either way. You should not be.

Purpose sentence: "I am deciding whether FindMe earns a place next to one primary username tool, using a handle I own."

### Install without collecting folklore

Follow the upstream README. A typical install is a Python package, and the command shape this lesson uses is:

\`findme pip_tadwell_osint101\`

Shape, not scripture. Run \`--help\` or \`-h\` first. If the executable name differs, if it wants \`python -m\`, if it demands a flag before the handle, do what the help text says. Do not stack flags from other tools onto it. GoSearch's flags are not FindMe's flags. Maigret's \`--top-sites\` living in your muscle memory is how you get a command that fails, and a failure you then misread as "no accounts".

Keep the options boring. No Tor. No proxy. No all-site loop if a smaller mode exists. One run. Save the hit list to a file with the tool name in it. Future-you, diffing on a Sunday, will not remember which untitled text file was the good one.

### The cross-check, which is shorter than you want it to be

Pick one primary tool you already trust more than the others. For most people that will be Sherlock, or a capped Maigret run (\`--top-sites 50\` or whatever \`--help\` on Maigret actually calls the cap). Not both, unless you enjoy punishing yourself. Two lists diff cleanly. Four lists become a hobby.

Then:

1. Run FindMe once.
2. Put the two hit lists side by side.
3. Browser-verify every disagreement. Every one. A disagreement is a site one tool has and the other does not, or a site both name where you already suspect junk.
4. Browser-verify a sample of five agreements, not fifty. If five agreements contain a false positive, your sample was enough to hurt your feelings. Widen the sample. If five are clean, say so, and do not pretend you opened the rest.
5. Score FindMe in two numbers you counted, not vibes. Unique confirmed hits: rows only FindMe had, which the browser showed were really your persona. Unique false positives: rows only FindMe had, which the browser refused to turn into a profile. Shared true hits do not count as a reason to keep a second tool. The primary already had them.

If both numbers are zero, write that down without shame. FindMe neither helped nor hurt on this handle, today. If the false-positive number is the only one above zero, that is an argument for uninstalling, not an argument for "more research" on a different victim. You may run the same protocol on a second handle you also own, if you want a fairer sample. You may not borrow a handle you do not own because the first test was inconclusive. Inconclusive on your own accounts is still the result.

### What "keep" means

Keep means: you can name a job where FindMe is the tool you would open first, or second, for a reason a classmate would accept. "It is already installed" is not a reason. "MIT is a nice licence" is not a reason. "The README was short and I understood the command" is a pleasant reason to have tried it, and not a reason to leave it in the PATH for the next three years.

Uninstall is allowed in the exercise write-up. So is keeping it as a cold spare you do not run by default. What is not allowed is a vague "I'll probably use all of them depending". That sentence is how the next case starts with five sweeps and no purpose.
        `,
      },
      {
        title: "Limits and false positives",
        duration: "7 min",
        content: `
### Redundant tools multiply noise, not truth

A smaller, quieter corpus means FindMe will miss sites Maigret hits. Record the misses as "outside this corpus or not detected", not as "the account does not exist". You have had this warning in every username lesson because the mistake survives every rebrand. It will survive this one too if you let it.

The failure modes are unchanged, and FindMe does not get a folk exemption for being simple:

- Soft 404s and friendly missing-user pages.
- Captcha and cookie walls marked as hits.
- Rules older than the site's current layout. Quieter maintenance means you should expect this more, not less.
- Common-handle collisions, if you ignored the advice and used a short name.
- Rate limits from the rest of the track. If you have run four scanners today already, FindMe may be querying sites that are tired of you. A miss in that condition is contaminated. Say so.

Redundant tooling has a cost even when every hit is true. More requests, more terms-of-use exposure, more rows in the notebook, more chance you paste the unopened ones into something a client sees. APP 10 does not care that the sixth tool was easy to install. A stack of unverified hits is still unverified.

There is a false-confidence pattern specific to "the simple one". Students trust FindMe because the output is short and the command was one word. Short output feels checked. It is not checked until you open it. A twenty-line report contains the same species of mistake as a two-thousand-line report. It merely fits on the screen, which is when people get lazy.

Being MIT-licensed and easy to install does not make a tool necessary, current, or appropriate for a person you have not got a purpose sentence for. Licence, convenience, and necessity are three different gates. FindMe walks through the first two easily. The third gate is the exercise.

> If a tool adds no confirmed hit you did not already have, it did not fail the install. It failed the audition. Thank it and show it the door.
        `,
      },
      {
        title: "Ethics and legal limits",
        duration: "5 min",
        content: `
### Another sweep is not a new purpose

APP 3 is the article to reread before you run a seventh username tool. Collection has to be reasonably necessary for what you are actually doing. "I have not tried FindMe on them yet" is not necessity. On a handle you own, for a lesson about sufficiency, the collection is necessary for the lesson and it ends when the diff is done. On a person, the fact you already ran Sherlock is a reason to justify any extra tool, not a reason to assume the extra tool is free.

APP 6 is how a training diff becomes a file on someone. You built it to learn FindMe. Using it later to answer a different question, about a different context, needs its own basis. APP 10 is why the unverified majority of every list in this track should never reach a decision-maker. FindMe's shorter list makes it tempting to paste the whole thing. Paste the rows you opened.

Running the same collection repeatedly, against a person, without a reason that would survive being read aloud, can look like harassment long before anyone argues about a particular HTTP method. The statutory tort for serious invasions of privacy has been available in Australia since 2025. The Criminal Code (Cth) offences about releasing personal data via a carriage service in a menacing or harassing way do not contain an exemption for "I used the simple CLI". Do not publish the diff. Do not attach a real name. Do not keep a running tally of someone's accounts because the tools are sitting there.

Platform terms apply per site, per request, regardless of which binary sent the request. Seven tools do not average out to fair use. They add up to more requests. The training rule stays: your accounts, one extra tool, no Tor, no proxies, no volume.

Queensland's Security Providers Act 1993 still governs investigating people for reward. A minimalist CLI is a good aesthetic and a bad legal theory. If the work is paid, the licence and the purpose note come first. The choice between FindMe and Maigret comes second, and the honest choice is often "neither, until the purpose is narrower".

Prefer the minimum set. For most learners who finish this track, that set looks like one primary username tool (Sherlock or a capped Maigret), one place where you can read the rule (WhatsMyName), and maybe a single binary (GoSearch) if Python is the thing that will not install. Email work stays Holehe with \`-NP\`, on your own address. Phone work stays Numint with \`--offline\`. Everything else has to re-audition on a handle you own before it stays installed.

> You are finished with this track when you can say which tool you will run, which tool you will not, and why the second list is shorter than your enthusiasm.
        `,
      },
      {
        title: "Quiz",
        duration: "3 min",
        content: `
1. Why is FindMe in the twelve if it is the weakest username pick?
2. What should you browser-verify first when comparing two tools?
3. If FindMe adds zero confirmed unique hits, is the lesson a failure?
4. Does installing more username tools reduce Privacy Act risk?
5. What is a healthy personal toolkit size for username checks after this course?

**Answers**

1. To practise cross-checking and sufficiency — knowing when to stop collecting tools.
2. Disagreements (and a sample of agreements), not only the longest list.
3. No — learning that a tool is redundant is a valid outcome.
4. No — more collection can increase exposure without clearer purpose.
5. Something like one primary (Maigret or Sherlock) plus one web/dataset check (WhatsMyName) and optional binary (GoSearch); exact set is yours, but "all twelve forever" is not the goal.
        `,
        exercise: "Run FindMe on your test persona. Diff against Sherlock or Maigret. Write five sentences: unique confirmed hits (count), unique false positives (count), whether you will keep FindMe installed, which username tool is now your primary, and one tool you will uninstall or ignore.",
      }
    ],
  }

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
    id: "consensus-tools-track",
    title: "Consensus Tools Track",
    description: "Twelve free username, email and phone tools from the Consensus-OSINT set — own accounts and test personas only.",
    modules: [
      "sherlock-username-search",
      "maigret-username-dossier",
      "whatsmyname-username-web",
      "user-scanner-username-email",
      "gosearch-username-go",
      "aliens-eye-username",
      "linkook-account-linking",
      "holehe-email-registration",
      "socialscan-availability",
      "mailcat-nickname-email",
      "numint-phone-basics",
      "findme-username-simple",
    ],
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

/** Near-duplicate of llms-txt. Data stays so an old URL still resolves. */
export const HIDDEN_LISTING_IDS = new Set(["llm"])

const FLAGSHIP_MODULE_IDS = [
  "osint-fundamentals",
  "kali-tools",
  "digital-forensics",
  "geolocation-osint",
] as const

function isQuickBriefing(mod: Pick<LearningModule, "estimatedTime">) {
  return /^\d+\s*min$/i.test(mod.estimatedTime.trim())
}

export function listPublicModules() {
  const visible = Object.values(learningModules).filter(
    (mod) => !HIDDEN_LISTING_IDS.has(mod.id)
  )
  const byId = new Map(visible.map((mod) => [mod.id, mod]))
  const flagship = FLAGSHIP_MODULE_IDS.flatMap((id) => {
    const mod = byId.get(id)
    return mod ? [mod] : []
  })
  const flagshipIds = new Set<string>(FLAGSHIP_MODULE_IDS)
  const briefings = visible.filter((mod) => isQuickBriefing(mod))
  const briefingIds = new Set(briefings.map((mod) => mod.id))
  const rest = visible.filter(
    (mod) => !flagshipIds.has(mod.id) && !briefingIds.has(mod.id)
  )
  return { tracks: [...flagship, ...rest], briefings }
}
