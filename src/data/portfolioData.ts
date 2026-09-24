import { Project, SkillCategory, ExperienceItem, EducationItem } from '../types/portfolio';

import chromeStarImg from '../assets/images/abstract_chrome_star_1790203205258.jpg';
import purpleTorusImg from '../assets/images/abstract_purple_torus_1790203216565.jpg';

export const DECORATIVE_ASSETS = {
  chromeStar: chromeStarImg,
  purpleTorus: purpleTorusImg,
};

export const PROJECTS: Project[] = [
  {
    id: 'tether-voc',
    number: '01',
    title: 'TETHER VoC',
    tagline: 'Traceable Feedback Intelligence for Quick-Commerce Ops',
    industry: 'Quick Commerce & AI Ops',
    problem: 'Quick-commerce customer operations teams face thousands of unstructured support tickets, chat logs, and delivery partner complaints with fragmented root causes and zero traceable attribution to dark-store logistics.',
    whatIDid: [
      'Architected end-to-end feedback intelligence system separating deterministic rules from probabilistic LLM clusters',
      'Designed citation and trust architecture allowing ops managers to audit every AI summary back to raw ticket IDs',
      'Defined operational KPI trees and RICE prioritization for dark-store escalation workflows',
      'Engineered confidence-scoring thresholds to eliminate hallucinated root causes in quick-turnaround logistics',
    ],
    keySkills: [
      'AI Feedback Intelligence',
      'Product Architecture',
      'Citation/Trust Architecture',
      'KPI Design',
      'RICE Prioritization',
      'Deterministic + AI System Separation',
    ],
    image: '/project_tether.svg',
    accentColor: '#3b82f6',
    caseStudy: {
      problemStatement:
        'Quick-commerce dark-store managers and central ops teams were inundated with thousands of unstructured daily escalations (late deliveries, damaged cold-chain items, missing SKUs). Existing generic AI tools provided high-level summaries that ops teams distrusted because they lacked verifiable citations to original tickets.',
      insight:
        'Ops and customer support leadership only adopt automated triage when they can trace any flagged anomaly back to verified customer-agent transcripts in less than two clicks.',
      approach:
        'Designed a decoupled two-tier architecture: Tier 1 handles deterministic schema validation, timestamp alignment, and delivery hub categorization; Tier 2 deploys targeted semantic clustering with mandatory source-citation references.',
      productThinking:
        'Framed trust as a first-order product metric rather than an engineering afterthought. Introduced RICE scoring to prioritize features that directly reduced dark-store investigation cycle time over vanity conversational chat features.',
      mvp:
        'Scoped an initial focused dashboard for top-3 high-variance dark stores monitoring cold-chain perishables and medicine delivery tickets, featuring one-click citation drilldowns and manual ops overrides.',
      metrics: [
        'Root-Cause Attribution Accuracy (verified by ops leads)',
        'Dark-Store Escalation Cycle Time (time from ticket spike to dark-store action)',
        'Ops Trust & Actionability Index (percentage of AI-flagged clusters acted upon)',
        'Re-Escalation & Duplicate Inquiry Rate',
      ],
      outcomeLearning:
        'In operational AI products, deterministic citation beats open-ended generation. When operators can verify proof instantaneously, actionability accelerates.',
      architecturePillars: [
        {
          title: 'Deterministic Ingestion Layer',
          desc: 'Sanitizes raw timestamps, warehouse IDs, and SLA breach markers with strict schema validation.',
        },
        {
          title: 'Citation-Anchored Clustering',
          desc: 'Clusters recurring friction vectors while binding immutable ticket IDs to each synthesized insight.',
        },
        {
          title: 'Ops Action Loop',
          desc: 'Routes verified incident clusters directly to regional warehouse leads with explicit mitigation playbooks.',
        },
      ],
    },
  },
  {
    id: 'pharmeasy-teardown',
    number: '02',
    title: 'PHARM EASY TEARDOWN',
    tagline: 'Chronic-Refill Retention & Adherence Architecture',
    industry: 'HealthTech & E-Pharmacy',
    problem: 'Chronic patients on life-long medication regimens experience friction during prescription renewal and repeat ordering, driving substantial churn back to neighborhood offline pharmacies.',
    whatIDid: [
      'Conducted rigorous end-to-end UX teardown of PharmEasy’s repeat purchase and prescription re-validation funnel',
      'Constructed segmented user personas contrasting elderly self-ordering patients with busy sandwich-generation caregivers',
      'Formulated structured RICE prioritization model evaluating adherence reminders versus doctor tele-consult friction',
      'Scoped phased MVP strategy transitioning transactional reorders into an intelligent automated refill subscription',
    ],
    keySkills: [
      'Chronic-Refill Retention',
      'UX Research',
      'Persona Segmentation',
      'RICE Prioritization',
      'Phased MVP Strategy',
      'Healthcare Domain Empathy',
    ],
    image: '/project_pharmeasy.svg',
    accentColor: '#10b981',
    caseStudy: {
      problemStatement:
        'Patients managing chronic conditions (hypertension, diabetes, thyroid disorders) require predictable monthly medicine refills. However, expiration of uploaded prescriptions and cumbersome 7-step repeat order flows caused severe drop-offs at day 25–28 of the refill cycle.',
      insight:
        'In Indian households, over 60% of chronic medications are procured by adult children on behalf of elderly parents. Prescription expiry anxiety occurs when caregivers are away from home and lack instant access to physical doctor scripts.',
      approach:
        'Deconstructed the entire 30-day journey into four distinct emotional stages: Stock Comfort, Pre-Empty Alert, Prescription Verification, and Doorstep Dispatch. Designed proactive asynchronous doctor prescription renewals.',
      productThinking:
        'Separated chronic wellness items from urgent acute medications in the cart architecture. Prioritized friction-free WhatsApp adherence alerts with one-tap payment links over in-app notification spam.',
      mvp:
        'A streamlined 3-step "Smart Refill Guard": 5-day predictive refill alert, automated backend doctor verification for recurring Rx, and doorstep batch delivery with caregiver confirmation.',
      metrics: [
        '30-Day and 60-Day Chronic Refill Repeat Rate',
        'Prescription Re-Validation Drop-off Percentage',
        'Caregiver WhatsApp Alert Conversion Rate',
        'Refill Churn to Offline Chemists',
      ],
      outcomeLearning:
        'Healthcare retention cannot be solved with generic e-commerce discounts. It requires aligning product mechanics with patient psychology, caregiver habits, and clinical compliance.',
      architecturePillars: [
        {
          title: 'Caregiver-Patient Dual Personas',
          desc: 'Distinct interface workflows tailored for primary caregivers managing remote prescriptions.',
        },
        {
          title: 'Predictive Refill Scheduling',
          desc: 'Dynamic countdown timers calculating pill depletion dates based on dosage frequency.',
        },
        {
          title: 'Asynchronous Rx Renewal',
          desc: 'Frictionless doctor validation queue eliminating repeated manual prescription re-uploads.',
        },
      ],
    },
  },
  {
    id: 'qcommerce-pilani-study',
    number: '03',
    title: 'PILANI Q-COMMERCE STUDY',
    tagline: 'Consumer Readiness & Market Entry Strategy for Quick-Commerce Pharmacy in Pilani',
    industry: 'Market Research & Statistical Modeling',
    problem:
      'Should an online pharmacy platform enter Pilani, and if so, what entry mode should be adopted (independent company-owned warehouse vs. partnership with local chemists) based on consumer adoption barriers, perceived risk, and delivery speed expectations?',
    whatIDid: [
      'Formulated 6 empirical hypotheses grounded in consumer trust, perceived risk, and competitive distribution literature',
      'Designed structured quantitative questionnaire and gathered primary survey data across BITS Pilani students and local town residents (n=60)',
      'Executed K-Means Cluster Analysis in IBM SPSS, segmenting the market into 3 statistically distinct consumer cohorts',
      'Conducted ANOVA cluster profiling to isolate true behavioral drivers (perceived risk, trust) from baseline hygiene factors (delivery speed)',
      'Formulated data-driven market entry strategy recommending a company-owned warehouse model (backed by 73.33% preference)',
    ],
    keySkills: [
      'Market Research',
      'IBM SPSS',
      'K-Means Clustering',
      'Hypothesis Testing (H1–H6)',
      'Survey Design (n=60)',
      'Strategic Entry Modeling',
    ],
    image: '/project_qcommerce.svg',
    accentColor: '#ea580c',
    caseStudy: {
      problemStatement:
        'Should an online pharmacy platform enter Pilani, and if so, what entry mode should be adopted—an independent company-owned warehouse (dark store) or partnership with local pharmacies? Evaluating whether consumer readiness, medicine authenticity concerns, and delivery speed justify capital expenditure in a semi-urban university ecosystem.',
      insight:
        'Fast delivery is not a differentiator—it is a baseline hygiene expectation across every single cluster. The primary gatekeeper to adoption is Perceived Risk of counterfeit/substandard medicines (F=38.36, p<.001), meaning entry mode must prioritize supply-chain control and verifiable authenticity over local chemist partnerships.',
      approach:
        'Descriptive survey research grounded in Agustin & Singh (2005) on relational loyalty, Steenkamp & Maydeu-Olivares (2015) on perceived value and risk, and Sharma et al. (2019) on distribution strategy. Collected primary quantitative data from 60 respondents using Google Forms, operationalizing 10 Likert statements across 5 constructs (Trust, Risk, Convenience, Price, Delivery), analyzed via IBM SPSS K-Means clustering and ANOVA verification.',
      productThinking:
        'Transformed academic statistical output into an actionable go-to-market product blueprint: identified that 76.6% of the market falls into favorable segments (Ready Adopters 43.3% + Cautious Convenience Seekers 33.3%). Designed launch positioning around authenticity guarantees and tamper-evident fulfillment rather than discount wars.',
      mvp:
        'A company-owned dark store pilot in Pilani with guaranteed 15–20 minute delivery, real-time dispatch tracking, pharmacist verification seals on medicine packaging, and emergency prescription prioritization.',
      metrics: [
        'Customer Segment Adoption Rate (Ready Adopters vs Cautious Seekers)',
        'Perceived Risk Reduction & Authenticity Trust Score',
        'Delivery SLA Adherence (<20 minutes emergency threshold)',
        'Repeat Refill Adoption Rate at Day 30',
      ],
      outcomeLearning:
        'Rigorous quantitative data challenges intuitive assumptions: while price is traditionally considered the primary barrier in semi-urban India, empirical SPSS ANOVA testing revealed price sensitivity was statistically insignificant (p=.66), whereas perceived authenticity risk was overwhelmingly decisive (F=38.36, p<.001).',
      architecturePillars: [
        {
          title: 'Primary Quantitative Survey (n=60)',
          desc: '10 operationalized variables across trust, risk, convenience, price sensitivity, and delivery speed across students and residents.',
        },
        {
          title: 'K-Means Cluster Segmentation',
          desc: 'Identified 3 distinct cohorts: Ready Adopters (43.3%), Cautious Convenience Seekers (33.3%), and Skeptical Traditionalists (23.3%).',
        },
        {
          title: 'Statistical Hypothesis Validation',
          desc: 'Validated H1, H2, H3, and H6 with high significance (p<.001); proved delivery speed is universal hygiene rather than differentiator.',
        },
        {
          title: 'Direct Entry Strategy Model',
          desc: 'Recommended Company-Owned Warehouse model (73.33% preference) over local chemist collaboration for quality control and trust.',
        },
      ],
    },
  },
  {
    id: 'janani-care',
    number: '04',
    title: 'JANANI CARE',
    tagline: 'Empathetic Maternal Health & Multilingual Voice Interaction',
    industry: 'Maternal Health & AI Voice',
    problem: 'Expectant mothers in tier-2/3 and semi-urban communities struggle with complex digital healthcare applications, encountering medical jargon, language barriers, and hesitation in logging sensitive pregnancy symptoms.',
    whatIDid: [
      'Spearheaded full product audit evaluating clinical accessibility, visual clarity, and maternal stress factors',
      'Authored comprehensive PRD establishing information architecture across all three pregnancy trimesters',
      'Mapped intuitive user journeys integrating conversational low-latency AI voice queries in regional dialects',
      'Architected retention-oriented symptom tracking and proactive maternal wellness milestone loops',
    ],
    keySkills: [
      'Healthcare UX',
      'Product Audit',
      'PRD Formulation',
      'Information Architecture',
      'User Journey Mapping',
      'AI Voice Interaction',
      'Retention-Oriented Product Thinking',
    ],
    image: '/project_janani.svg',
    accentColor: '#ec4899',
    caseStudy: {
      problemStatement:
        'Maternal health monitoring in non-metro regions suffers from delayed clinical interventions because mothers find traditional form-heavy apps intimidating, leading to undetected complications like gestational diabetes or preeclampsia.',
      insight:
        'Spoken voice in regional dialects evokes emotional safety and higher disclosure accuracy. Expectant mothers are 4x more likely to describe subtle bodily changes verbally than to locate medical checkboxes.',
      approach:
        'Built an empathetic, voice-led interface paired with visual trimester milestone timelines. Designed a multi-modal symptom logger that accepts spoken descriptions and converts them into structured clinical triage markers.',
      productThinking:
        'Established clear boundary conditions between informative maternal reassurance and emergency clinical escalation. Implemented a deterministic red-flag alert system routing severe vitals to local ASHA healthcare workers immediately.',
      mvp:
        'Trimester-specific home screen highlighting 3 core cards: "Speak Today’s Symptoms", "Baby’s Growth Milestone", and "One-Tap ASHA / Clinic Connect".',
      metrics: [
        'Weekly Symptom Logging Frequency',
        'Voice Interaction Completion Rate',
        'Critical Vitals Escalation Latency (time to clinical triage)',
        'Maternal D30 and D90 Cohort Retention',
      ],
      outcomeLearning:
        'Empathy in healthtech is an engineering and UX discipline. Reducing cognitive load directly impacts clinical outcomes and maternal peace of mind.',
      architecturePillars: [
        {
          title: 'Multilingual Voice Gateway',
          desc: 'Speech-to-intent engine capable of understanding colloquial maternal symptom descriptions.',
        },
        {
          title: 'Trimester Information Hierarchy',
          desc: 'Dynamic UI state transitioning content as the pregnancy advances from weeks 1 to 40.',
        },
        {
          title: 'Clinical Escalation Guardrails',
          desc: 'Deterministic safety rules triggering priority outreach whenever red-flag symptoms occur.',
        },
      ],
    },
  },
  {
    id: 'instagram-campaign-world',
    number: '05',
    title: 'INSTAGRAM CAMPAIGN WORLD',
    tagline: 'Campaign Orchestration & Ad Recall Product Strategy',
    industry: 'Growth & Creator Ecosystems',
    problem: 'High-velocity digital growth campaigns suffer from ad creative fatigue, uncalibrated influencer attribution, and fragmented budget allocation rules across dynamic audience cohorts.',
    whatIDid: [
      'Developed comprehensive product strategy for creative campaign orchestration and performance tracking',
      'Formulated multi-factor ad recall and engagement metrics linking short-form video hooks to brand recall',
      'Identified critical operational risks in creator delivery and defined automated decision rules for budget shifts',
      'Prioritized strategic feature backlog balancing automated creative scheduling against manual brand governance',
    ],
    keySkills: [
      'Product Strategy',
      'Feature Prioritization',
      'Risk Identification',
      'Campaign Orchestration',
      'Ad Recall Metrics',
      'Decision Rules & Experimentation',
    ],
    image: '/project_instagram.svg',
    accentColor: '#8b5cf6',
    caseStudy: {
      problemStatement:
        'Brands and growth marketers deploy multi-creator Instagram campaigns with high variance in performance. Without real-time decision rules, sub-optimal creatives drain marketing budgets before human managers can intervene.',
      insight:
        'The first 4 hours of post engagement velocity and comments sentiment predict 80%+ of a campaign’s 7-day conversion efficiency and ad recall lift.',
      approach:
        'Structured an orchestration workflow that treats creative variations as discrete product experiments. Built an automated decision tree that scales ad spend behind high-velocity creators and throttles saturated creatives.',
      productThinking:
        'Applied product experimentation rigor to marketing operations. Created explicit decision rules (e.g., if hook-rate drops below 22% and negative sentiment exceeds 5%, auto-reallocate budget to alternative angle).',
      mvp:
        'A unified campaign command panel mapping creator assets, real-time engagement velocity heatmaps, and one-click budget redistribution triggers.',
      metrics: [
        'Estimated Ad Recall Lift (Day 1 vs Day 7)',
        'Budget Reallocation Efficiency (reduction in wasted ad spend)',
        'Creative Fatigue Warning Latency',
        'Cost Per Engaged Qualified User',
      ],
      outcomeLearning:
        'Growth and product strategy converge around rapid feedback loops and disciplined decision frameworks. Automating the rules of engagement frees teams to focus on bold creative hypotheses.',
      architecturePillars: [
        {
          title: 'Velocity-Driven Scoring',
          desc: 'Algorithmic early-signal detection measuring engagement acceleration in the initial 240 minutes.',
        },
        {
          title: 'Rule-Based Allocation Engine',
          desc: 'Automated decision switches shifting spend between testing, scaling, and paused campaigns.',
        },
        {
          title: 'Ad Recall Measurement',
          desc: 'Surveys and retention cohorts quantifying genuine brand memorability beyond raw impressions.',
        },
      ],
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    number: '01',
    category: 'PRODUCT',
    description: 'Transforming messy user problems into structured product roadmaps, measurable MVPs, and disciplined experimentation.',
    skills: [
      'Product strategy',
      'Prioritization (RICE / MoSCoW)',
      'Roadmapping',
      'Product teardowns',
      'MVP scoping',
      'Experiment design',
      'Hypothesis-driven strategy',
    ],
  },
  {
    number: '02',
    category: 'UX & RESEARCH',
    description: 'Grounding product decisions in rigorous user empathy, clinical contextual inquiries, and friction mapping.',
    skills: [
      'User research',
      'Persona development',
      'Journey mapping',
      'UX audits',
    ],
  },
  {
    number: '03',
    category: 'ANALYTICS',
    description: 'Translating quantitative datasets into defensible product logic, statistical validations, and financial models.',
    skills: [
      'SQL',
      'SPSS',
      'ANOVA',
      'K-means clustering',
      'Excel (Advanced Modelling)',
      'Market research',
      'Cost modelling',
      'Data-driven recommendations',
    ],
  },
  {
    number: '04',
    category: 'COMMUNICATION',
    description: 'Aligning cross-functional stakeholders through crisp technical documentation, clarity, and collaborative facilitation.',
    skills: [
      'Workshop facilitation',
      'Clear documentation (PRDs & Specs)',
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    number: '01',
    role: 'UNDERGRADUATE RESEARCH INTERN',
    organization: 'BITS Pilani, Pilani Campus',
    period: '2025 — Present',
    type: 'Academic Research & Evidence Synthesis',
    description:
      'Engaging in rigorous academic research at BITS Pilani, combining pharmacological domain principles with structured quantitative methodologies, hypothesis formulation, experimental design, and data validation.',
    keyContributions: [
      'Formulating rigorous research hypotheses and designing reproducible experimental frameworks',
      'Conducting quantitative data synthesis, comparative regression, and empirical validation across laboratory datasets',
      'Synthesizing clinical and pharmacological literature into structured, evidence-backed documentation',
      'Bridging scientific principles with translational healthcare problem solving',
    ],
  },
  {
    number: '02',
    role: 'CONTENT STRATEGIST INTERN',
    organization: 'SMAD Wealth Advisors LLP',
    period: 'May — July 2024',
    type: 'Strategy & Audience Growth',
    description:
      'Spearheaded audience-focused content strategy and communication architecture, distilling complex financial concepts into structured narratives that drove organic user engagement and trust.',
    keyContributions: [
      'Conducted target audience research and persona segmentation to identify high-intent informational gaps',
      'Developed structured strategic content roadmaps aligning brand communication with user search intent',
      'Analyzed distribution analytics and engagement metrics to iterate on content formatting and tone',
      'Collaborated cross-functionally to ensure brand compliance, clarity, and authoritative positioning',
    ],
  },
];

export const EDUCATIONS: EducationItem[] = [
  {
    number: '01',
    degree: 'BACHELOR OF PHARMACY (HONS.)',
    institution: 'BITS Pilani, Pilani Campus',
    period: '2023 — 2027',
    description:
      'Undergraduate education at BITS Pilani (\'27), developing strong analytical foundations across market research, quantitative analysis, probability & statistics, economics, and healthcare systems.',
    highlights: [
      'Relevant Coursework: Market Research, Probability and Statistics, Principles of Economics',
      'Quantitative & analytical methods: Survey design, K-means clustering, hypothesis testing (ANOVA), and statistical inference',
      'Market research applications: Translating consumer behavioral constructs, segment identification, and empirical analysis into product recommendations',
    ],
  },
  {
    number: '02',
    degree: 'SENIOR SECONDARY SCHOOL',
    institution: 'Delhi Public School',
    period: '2020 — 2022',
    description:
      'Completed senior secondary education with distinction in Science, fostering strong fundamentals in analytical thinking and natural sciences.',
    highlights: [
      'Academic focus in Biology, Physics, and Chemistry',
      'Developed core foundations in logical reasoning, data interpretation, and scientific inquiry',
    ],
  },
];
