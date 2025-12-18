# Butter AI

AI Powered Customer Churn Prevention Platform

**Lovable Project URL**: https://lovable.dev/projects/2d145615-9470-4662-a3a4-325e128c528a
**Loom URL**: https://www.loom.com/share/2216a11259324eab810cd5236b34d7b2

## Project Overview

Butter AI is a SaaS platform that helps businesses predict and prevent customer churn using AI powered insights. This repository contains the marketing site, interactive prototype, and MVP automation that demonstrates how AI can revolutionize customer retention strategies.

The core promise is simple. Stop losing customers to the unknown.

**Built with**: React, TypeScript, Vite, Tailwind CSS, Supabase, N8N, ChatGPT 4.0

## What We Built

**Phase 1** established the marketing foundation. Hero section, features, how it works, testimonials, pricing, FAQ. Consistent branding with glass morphism UI throughout. Lead generation through Typeform. AI powered chatbot for visitor questions.

**Phase 2** added the interactive layer and backend automation. The Interactive Churn Risk Calculator lets users input sample customer metrics and get an AI generated risk score with recommendations. The Interactive Dashboard Preview simulates what the full product experience will look like. The N8N MVP Automation demonstrates our core technical feasibility by ingesting survey data, transforming it with AI, and outputting actionable insights.

**Phase 3** is on the roadmap. AI generated blog section for SEO. AI powered lead qualification. Integration with HubSpot, Intercom, and Stripe for real customer data.

## AI Features

### AI Powered Chatbot

An intelligent conversational assistant that helps visitors understand Butter AI capabilities, answers questions about churn prevention, and qualifies leads.

| Attribute | Detail |
|-----------|--------|
| Model | Google Gemini 2.5 Flash via Lovable AI Gateway |
| Implementation | Token by token streaming for real time responses |
| Architecture | Supabase Edge Function |

The system prompt establishes the assistant as a helpful AI for Butter AI. It explains how the platform helps businesses reduce customer churn. It answers questions about features including AI powered predictions, early warning systems, and automated interventions. It qualifies leads by understanding business size, industry, and churn challenges.

### Interactive Churn Risk Calculator

This is our primary proof of concept demo on the marketing site.

| Attribute | Detail |
|-----------|--------|
| Model | Google Gemini 2.5 Flash via Supabase Edge Function |
| Input | NPS score, months subscribed, support tickets |
| Output | Risk score 0 to 100, risk level, actionable recommendations |

The user inputs sample customer metrics. The data is sent to a Supabase Edge Function which formats it into a structured prompt for the Gemini API. The AI returns a JSON object that the frontend parses and displays as a visual gauge with recommendations.

### N8N MVP Automation

This is the core tool in our product and demonstrates technical feasibility.

| Attribute | Detail |
|-----------|--------|
| Model | ChatGPT 4.0 running as an agent within N8N |
| Data Collection | Typeform churned customer survey |
| Storage | Google Sheets |
| Planned | Slack notifications, HubSpot/Intercom/Stripe integration |

The automation links together Typeform for data collection, an AI agent for data transformation, and Google Sheets for storage. The agent analyzes churned customer survey responses and extracts key themes around why customers left, what features they valued, and what would have made them stay.

We scoped down to the churned customer survey to demonstrate that we could take information and transform it without having access to the real customer data we need yet. Our next step is getting access to HubSpot, Intercom, and Stripe data.

## Technical Architecture
```
Frontend (React/TypeScript/Tailwind)
    │
    ├── Chatbot ──► Lovable AI Gateway ──► Gemini 2.5 Flash
    │
    ├── Calculator ──► Supabase Edge Function ──► Gemini API
    │
    └── Forms ──► Typeform

N8N Automation
    │
    ├── Typeform Survey
    ├── ChatGPT 4.0 Agent
    ├── Google Sheets
    └── Slack (planned)
```

## Setup and Development

### Prerequisites

- Node.js and npm
- Lovable account for AI credits

### Installation
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install
npm run dev
```

### Environment Variables

Environment variables are auto configured via Lovable Cloud. No manual configuration needed.

## Implementation Status

| Feature | Status | Model | Purpose |
|---------|--------|-------|---------|
| Chatbot | Live | Gemini 2.5 Flash | Lead qualification, product Q&A |
| Churn Calculator | Live | Gemini 2.5 Flash | Risk scoring, recommendations |
| Dashboard Preview | Live | Static mock data | Visual prototype |
| N8N Automation | Live | ChatGPT 4.0 | Churned customer survey analysis |
| Content Generator | Planned | GPT | Blog articles, marketing copy |
| CRM Integration | Planned | N/A | HubSpot, Intercom, Stripe data |

## Project Structure
```
src/
├── components/
│   ├── Chatbot.tsx
│   ├── ChurnCalculator.tsx
│   ├── DashboardPreview.tsx
│   └── ui/
├── pages/
└── integrations/

supabase/
├── functions/
│   ├── chat/
│   └── churn-calculator/
└── config.toml

n8n/
└── workflows/
    └── churned-customer-survey.json
```

## What I Learned

AI gets you 80% of the way there incredibly quickly but that final 20% still takes as long as it ever has. Making sure it is not buggy. Making sure it is designed right. Making sure it has the functionality you want. The prototyping process has a great feedback loop. But taking a project to the final stages still requires significant human judgment.

The best tool for the job changed throughout the semester. I went from using ChatGPT to Gemini to Claude as they released new models. Do not write anyone off permanently based on one model being better than another at any given time.

Human judgment was most important on the design side. Loveable and Magic Patterns did okay jobs with one shotting design fragments but getting the website to where I was happy with it took fine tuning in the prompting.

For the automation I wrote the system prompts myself. The strategic decisions about what to build and how were mine. AI was a tool not a substitute for thinking through the workflow.

## Next Steps

1. **Get access to real customer data.** This is the critical dependency. Our core value proposition is predictive churn analysis and to deliver on that we need HubSpot, Intercom, and Stripe integrations.

2. **Connect AI systems.** Feed the Calculator results into the Chatbot context so users can ask why they got a particular risk score.

3. **Implement AI generated content.** Build the Blog section using AI for SEO and thought leadership.

4. **Mobile polish.** Full review of interactive components to ensure charts and input sliders are responsive.
