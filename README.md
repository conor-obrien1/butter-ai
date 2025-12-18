Butter AI
AI Powered Customer Churn Prevention Platform
Lovable Project URL: https://lovable.dev/projects/2d145615-9470-4662-a3a4-325e128c528a
Project Overview
Butter AI is a SaaS platform that helps businesses predict and prevent customer churn using AI powered insights. This repository contains the marketing site, interactive prototype, and MVP automation that demonstrates how AI can revolutionize customer retention strategies.
The core promise is simple. Stop losing customers to the unknown.
Built with React, TypeScript, Vite, Tailwind CSS, Supabase, N8N, and ChatGPT 4.0.
What We Built
Phase 1 established the marketing foundation. Hero section, features, how it works, testimonials, pricing, FAQ. Consistent branding with glass morphism UI throughout. Lead generation through Typeform. AI powered chatbot for visitor questions.
Phase 2 added the interactive layer and backend automation. The Interactive Churn Risk Calculator lets users input sample customer metrics and get an AI generated risk score with recommendations. The Interactive Dashboard Preview simulates what the full product experience will look like. The N8N MVP Automation demonstrates our core technical feasibility by ingesting survey data, transforming it with AI, and outputting actionable insights.
Phase 3 is on the roadmap. AI generated blog section for SEO. AI powered lead qualification. Integration with HubSpot, Intercom, and Stripe for real customer data.
AI Features and Implementation
AI Powered Chatbot
An intelligent conversational assistant that helps visitors understand Butter AI capabilities, answers questions about churn prevention, and qualifies leads.
Model: Google Gemini 2.5 Flash via Lovable AI Gateway
Implementation: Token by token streaming for real time responses
Architecture: Supabase Edge Function at supabase/functions/chat/index.ts
The system prompt establishes the assistant as a helpful AI for Butter AI. It explains how the platform helps businesses reduce customer churn. It answers questions about features including AI powered predictions, early warning systems, and automated interventions. It qualifies leads by understanding business size, industry, and churn challenges. It keeps responses under 3 sentences unless the user asks for details. It encourages booking a demo for interested users.
Streaming matters for UX. Users see responses appear in real time. It feels faster even though total time is similar. It keeps users engaged during longer responses.
Interactive Churn Risk Calculator
This is our primary proof of concept demo on the marketing site.
The user inputs sample customer metrics like NPS score, months subscribed, and support tickets. This data is sent to a Supabase Edge Function. The function formats the data into a prompt for the Gemini API asking for a structured analysis. The AI model analyzes the inputs and returns a JSON object containing a risk score from 0 to 100, a risk level of Low Medium or High, and an array of short actionable recommendations. The frontend parses this JSON and displays the results in a visual gauge and a bulleted list.
The key is a structured JSON mode prompt that ensures the AI response is machine readable and not just conversational text. The prompt instructs the AI to act as a B2B churn prediction analyst. It specifies the input format. It requires the response to be only a valid JSON object with no markdown wrappers. It defines the exact structure and explains the scoring logic where low NPS and high tickets increase risk while high subscription length slightly decreases risk.
N8N MVP Automation
This is the core tool in our product and demonstrates our technical feasibility.
Model: ChatGPT 4.0 running as an agent within N8N
The automation links together Typeform for data collection, an AI agent for data transformation, Google Sheets for storage, and eventually Slack for notifications. The agent is one part in the process of being able to transform customer data into something useful.
We scoped down the automation for practicality. To get a working MVP that showed we could get customer information, transform it, and provide something useful we needed actual customer data. We were hoping to use HubSpot, Intercom, and Stripe data to more fully flesh out the predictive churn analysis. So we scoped down to just a churned customer survey to demonstrate that we could take information and transform it in a particular way without actually having access to the customer data we need yet.
The automation was built more manually than the marketing site. I wrote the system prompts myself. The prompt instructs the agent to analyze churned customer survey responses and extract key themes around why customers left, what features they valued, and what would have made them stay. It outputs structured insights that can be used by customer success teams to identify patterns and inform retention strategy.
Technical Architecture
Frontend is React, TypeScript, Tailwind CSS, and Framer Motion for animations. Charts and visualization use recharts.
For the chatbot AI integration is client side with the Lovable AI Gateway streaming Gemini responses.
For the calculator the client sends a fetch request to an edge function. The Supabase Edge Function receives the request, validates inputs, and securely calls the Gemini API with a system prompt. The Gemini API processes the request and returns a structured JSON response.
For the MVP automation the stack is N8N as the workflow orchestration layer. Typeform handles data collection from churned customer surveys. The AI agent runs ChatGPT 4.0 and processes the survey responses to extract insights and generate recommendations. Google Sheets stores the transformed data. Slack integration is planned for sending alerts to customer success teams.
Forms use Typeform for both the marketing site waitlist and the churned customer survey automation. Hosting runs through GitHub and Vercel.
Setup and Development
Prerequisites: Node.js and npm. Lovable account for AI credits.
Clone the repository. Install dependencies with npm install. Start development server with npm run dev.
Environment variables are auto configured via Lovable Cloud. No manual configuration needed.
Implementation Status
Chatbot is live using Gemini 2.5 Flash for lead qualification and product Q&A.
Churn Calculator is live using Gemini 2.5 Flash via Supabase Edge Function for risk scoring and recommendations.
Dashboard Preview is live using static mock data for visual prototype.
N8N Automation is live using ChatGPT 4.0 for churned customer survey analysis.
Content Generator is planned using GPT for blog articles and marketing copy.
HubSpot Intercom Stripe Integration is planned to enable predictive churn analysis with real customer data.
Project Structure
src/
  components/
    Chatbot.tsx
    ChurnCalculator.tsx
    DashboardPreview.tsx
    ui/
  pages/
  integrations/
supabase/
  functions/
    chat/
    churn-calculator/
  config.toml
n8n/
  workflows/
    churned-customer-survey.json
README.md
What I Learned
AI gets you 80% of the way there incredibly quickly but that final 20% still takes as long as it ever has. Making sure it is not buggy. Making sure it is designed right. Making sure it has the functionality you want. The prototyping process is incredibly quick with a real good feedback loop. But when you are actually trying to take a project to the final stages it is still not fully there.
The best tool for the job changed throughout the semester. I went from using ChatGPT to Gemini to Claude as they released new models. Do not write anyone off permanently based on one model being better than another at any given time. The landscape shifts fast.
Human judgment was most important on the design side. Loveable and Magic Patterns did okay jobs with one shotting design and feature fragments but getting the website to where I was happy with it took quite a bit of fine tuning in the prompting.
For the automation I wrote the system prompts myself. The strategic decisions about what to build and how were mine. AI was a tool not a substitute for thinking through the workflow.
Next Steps
Get access to real customer data. This is the critical dependency. Our core value proposition is predictive churn analysis and to deliver on that we need HubSpot, Intercom, and Stripe integrations. The N8N automation is ready to scale once we have the data flowing.
Connect AI systems. Feed the Calculator results into the Chatbot context so a user could ask why they got a particular risk score and the chatbot could explain the reasoning. Connect the N8N automation outputs to the dashboard so users can see real insights from their customer data.
Implement AI generated content. Build the Blog section using AI to generate articles on churn prevention for SEO and thought leadership.
Mobile polish. Full review of interactive components on mobile to ensure charts and input sliders are responsive.
