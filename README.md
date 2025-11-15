# Butter AI - AI-Powered Customer Churn Prevention Platform

**Lovable Project URL**: https://lovable.dev/projects/2d145615-9470-4662-a3a4-325e128c528a

## 🎯 Project Overview

Butter AI is a SaaS platform that helps businesses predict and prevent customer churn using AI-powered insights. This marketing site and interactive prototype demonstrates how AI can revolutionize customer retention strategies.

**Built with**: React, TypeScript, Vite, Tailwind CSS, Supabase (via Lovable Cloud)

## 🤖 AI Features & Implementation

### 1. **AI-Powered Chatbot** (Currently Implemented)

An intelligent conversational assistant that helps visitors understand Butter AI's capabilities, answers questions about churn prevention, and qualifies leads.

**Key Technical Details:**
- **Model**: Google Gemini 2.5 Flash via Lovable AI Gateway
- **Implementation**: Token-by-token streaming for real-time responses
- **Architecture**: Supabase Edge Function (`supabase/functions/chat/index.ts`)
- **No API Key Required**: Uses Lovable AI integration

#### System Prompt (Actual Implementation)

```javascript
{
  role: "system",
  content: `You are a helpful AI assistant for Butter AI, a churn prediction and prevention platform. 
  
Your role is to:
- Explain how Butter AI helps businesses reduce customer churn
- Answer questions about features: AI-powered predictions, early warning systems, automated interventions
- Qualify leads by understanding their business size, industry, and churn challenges
- Be friendly, professional, and concise
- Encourage booking a demo for interested users

Key features to highlight:
1. AI-driven churn predictions with 95% accuracy
2. Real-time risk scoring and alerts
3. Automated retention campaigns
4. Actionable insights dashboard
5. Seamless CRM integration

Keep responses under 3 sentences unless the user asks for details.`
}
```

**Why This Prompt Works:**
- **Clear Role Definition**: Establishes the assistant's purpose and boundaries
- **Specific Responsibilities**: Lists exactly what the bot should do
- **Feature Knowledge**: Embeds key product information for consistent messaging
- **Tone Guidelines**: Ensures professional yet friendly communication
- **Length Constraint**: Prevents overly verbose responses

#### Streaming Implementation

```typescript
// Edge Function: supabase/functions/chat/index.ts
const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "google/gemini-2.5-flash",
    messages: [systemMessage, ...messages],
    stream: true, // Enable streaming
  }),
});

// Return stream to client
return new Response(response.body, {
  headers: {
    ...corsHeaders,
    "Content-Type": "text/event-stream",
  },
});
```

**Why Streaming Matters:**
- **Better UX**: Users see responses appear in real-time (like ChatGPT)
- **Perceived Speed**: Feels faster even though total time is similar
- **Engagement**: Keeps users engaged during longer responses

### 2. **Churn Risk Calculator** (Planned - Phase 1)

An interactive tool that analyzes customer metrics and predicts churn risk using AI.

#### Planned System Prompt

```javascript
{
  role: "system",
  content: `You are an expert churn prediction analyst. Analyze the provided customer metrics and return a structured risk assessment.

Input metrics you'll receive:
- Account age (months)
- Support tickets (last 30 days)
- Feature usage score (1-10)
- Payment history (on-time percentage)
- Engagement level (active days per month)

Your analysis must return JSON with:
{
  "score": number (0-100, where 100 is highest risk),
  "category": "low" | "medium" | "high",
  "factors": [top 3 risk factors as strings],
  "recommendations": [3 actionable retention strategies]
}

Analysis guidelines:
- High support tickets + low usage = high risk
- Account age < 3 months + low engagement = medium-high risk
- Payment issues are critical red flags
- Be specific in recommendations (not generic advice)
- Focus on quick wins that can be implemented immediately`
}
```

**Prompt Engineering Principles:**
1. **Structured Output**: Specifies exact JSON format needed
2. **Context Loading**: Explains what metrics mean
3. **Decision Logic**: Provides analysis framework
4. **Actionable Focus**: Emphasizes practical recommendations

### 3. **AI Content Generator** (Planned - Phase 2)

Generates blog articles and marketing copy on-demand.

#### Planned Prompt Pattern

```javascript
const contentPrompt = `Generate a ${wordCount}-word blog article about "${topic}" for Butter AI, a churn prevention platform.

Style guidelines:
- Professional yet approachable tone
- Include 3-5 actionable takeaways
- Use data-driven language (cite "industry research" generically)
- Include a CTA for booking a demo
- Format: Markdown with H2/H3 headings

Target audience: SaaS founders, Customer Success managers, Product leaders

Article should emphasize how AI and automation solve the problem.`;
```

## 🏗️ Technical Architecture

### AI Integration Flow

```
┌─────────────┐
│   React UI  │
│  (Frontend) │
└──────┬──────┘
       │
       │ HTTP Request
       ▼
┌─────────────────────┐
│  Supabase Edge Fn   │
│  (Serverless)       │
└──────┬──────────────┘
       │
       │ Bearer Auth
       ▼
┌──────────────────────────┐
│  Lovable AI Gateway      │
│  ai.gateway.lovable.dev  │
└──────┬───────────────────┘
       │
       │ Routes to
       ▼
┌─────────────────────┐
│  AI Models          │
│  - Gemini 2.5 Flash │
│  - GPT-5 (optional) │
└─────────────────────┘
```

### Key Benefits of This Architecture

1. **No API Keys Required**: Lovable AI Gateway handles authentication
2. **Cost Efficiency**: Credits included in Lovable subscription
3. **Automatic Scaling**: Edge functions scale with traffic
4. **Multiple Models**: Easy to switch between AI providers
5. **Security**: API keys never exposed to client

### Available AI Models via Lovable AI

| Model | Best For | Speed | Cost |
|-------|----------|-------|------|
| `google/gemini-2.5-flash` | General chatbot, balanced performance | Fast | Low |
| `google/gemini-2.5-pro` | Complex reasoning, multimodal | Medium | Medium |
| `openai/gpt-5` | Highest accuracy, nuanced responses | Slow | High |
| `openai/gpt-5-mini` | Fast responses, good reasoning | Fast | Low |
| `openai/gpt-5-nano` | High-volume simple tasks | Fastest | Lowest |

**Current Choice**: Gemini 2.5 Flash
- **Why**: Optimal balance of speed, cost, and quality for chatbot use case
- **When to Switch**: Use GPT-5 Pro if users need more sophisticated reasoning

## 🚀 Setup & Development

### Prerequisites
- Node.js & npm ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- Lovable account (for AI credits)

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables

The following variables are auto-configured via Lovable Cloud:

```env
VITE_SUPABASE_URL=<auto-configured>
VITE_SUPABASE_PUBLISHABLE_KEY=<auto-configured>
VITE_SUPABASE_PROJECT_ID=<auto-configured>
```

**Note**: No manual configuration needed! Lovable Cloud handles all backend setup.

## 🛠️ AI Implementation Guide

### How to Modify the Chatbot Prompt

1. Open `supabase/functions/chat/index.ts`
2. Locate the `systemMessage` object
3. Edit the `content` field
4. Changes deploy automatically on save

**Example Modification**:

```typescript
// Add product pricing information
content: `You are a helpful AI assistant for Butter AI...

Pricing tiers:
- Starter: $99/mo (up to 1,000 customers)
- Growth: $299/mo (up to 10,000 customers)  
- Enterprise: Custom pricing

Mention pricing when users ask about cost.`
```

### Adding a New AI Feature

**Example**: Add sentiment analysis to customer feedback

1. **Create Edge Function**:
```bash
# File: supabase/functions/analyze-sentiment/index.ts
```

2. **Implement AI Call**:
```typescript
const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${Deno.env.get('LOVABLE_API_KEY')}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "google/gemini-2.5-flash",
    messages: [{
      role: "system",
      content: "Analyze sentiment of customer feedback. Return: positive/negative/neutral with confidence score."
    }, {
      role: "user",
      content: feedbackText
    }],
  }),
});
```

3. **Register Function** in `supabase/config.toml`:
```toml
[functions.analyze-sentiment]
verify_jwt = false
```

4. **Call from React**:
```typescript
import { supabase } from "@/integrations/supabase/client";

const { data } = await supabase.functions.invoke('analyze-sentiment', {
  body: { feedback: userFeedback }
});
```

### Prompt Engineering Best Practices

#### ✅ DO:
- **Be Specific**: "Analyze churn risk for SaaS customers" vs "Analyze customers"
- **Set Constraints**: "Keep responses under 100 words"
- **Provide Examples**: "Return JSON like: {score: 85, risk: 'high'}"
- **Define Role**: "You are an expert in customer retention"
- **Include Context**: "User is a B2B SaaS founder with 500 customers"

#### ❌ DON'T:
- Be vague: "Help with stuff" 
- Forget error cases: What if input is invalid?
- Over-constrain: Too rigid prompts break with edge cases
- Ignore tone: Specify friendly/professional/technical
- Skip testing: Always test prompts with various inputs

### Handling Rate Limits

```typescript
// Edge function error handling
const data = await response.json();

if (response.status === 429) {
  return new Response(
    JSON.stringify({ 
      error: "AI service is busy. Please try again in a moment." 
    }),
    { status: 429, headers: corsHeaders }
  );
}

if (response.status === 402) {
  return new Response(
    JSON.stringify({ 
      error: "AI credits exhausted. Please upgrade your plan." 
    }),
    { status: 402, headers: corsHeaders }
  );
}
```

## 📊 Current Implementation Status

| Feature | Status | AI Model | Purpose |
|---------|--------|----------|---------|
| Chatbot | ✅ Live | Gemini 2.5 Flash | Lead qualification, product Q&A |
| Churn Calculator | 📋 Planned | Gemini 2.5 Pro | Risk scoring & recommendations |
| Dashboard Demo | 📋 Planned | N/A (Static data) | Visual prototype |
| Content Generator | 📋 Planned | GPT-5 | Blog articles, marketing copy |

## 🎓 Homework Requirements Checklist

### Option 1: Advertisement / Marketing Site
- ✅ AI Studio used for code generation
- ✅ 6 sections (Hero, Features, How It Works, Benefits, Testimonials, FAQ, CTA)
- ✅ AI-powered chatbot (dynamic element)
- ✅ Strong narrative and consistent branding
- ✅ AI-generated concept and copy refinement

### Option 2: Product Demo / Interactive Prototype
- ✅ Interactive chatbot (Feature #1)
- 📋 Churn calculator (Feature #2 - planned)
- ✅ Active AI integration (chat function)
- ✅ AI Studio used throughout
- 📋 User input forms (planned with calculator)

## 🔮 Future Enhancements (Roadmap)

### Phase 1: Core Interactive Features (Next)
1. **Churn Risk Calculator** - Input customer metrics, get AI-powered risk score
2. **Interactive Dashboard** - Recharts visualizations with sample data

### Phase 2: AI Content
3. **Blog Generator** - On-demand article creation
4. **Enhanced Chatbot** - Lead qualification + demo scheduling

### Phase 3: Polish
5. **Onboarding Tutorial** - Guided product tour
6. **Mobile Optimization** - Responsive improvements

### Phase 4: Backend (Optional)
7. **User Authentication** - Supabase Auth
8. **Chat History** - Persist conversations
9. **Calculator Results Database** - Store & retrieve analyses

## 📝 Prompt Sample Library

### Chatbot Variants

**Technical Support Bot**:
```
You are a technical support specialist for Butter AI. Help users troubleshoot integration issues, explain API documentation, and resolve technical problems. Be patient and ask clarifying questions.
```

**Sales Bot**:
```
You are a sales consultant for Butter AI. Your goal is to qualify leads by asking about company size, current churn rate, and pain points. Always end with a clear CTA to book a demo. Be persuasive but not pushy.
```

### Content Generation

**Case Study Generator**:
```
Generate a 500-word case study for Butter AI showing how a ${industry} company reduced churn by ${percentage}%. Include:
- Company background (anonymized)
- Challenge they faced
- Solution implemented with Butter AI
- Results with specific metrics
- Customer quote (fabricated but realistic)
Format as HTML with proper headings.
```

**Email Campaign**:
```
Write a 3-email sequence for Butter AI:
Email 1: Problem awareness (churn costs)
Email 2: Solution introduction (Butter AI features)
Email 3: Urgency + CTA (limited demo slots)

Each email: 150 words max, subject line included, B2B SaaS tone.
```

## 🤝 Contributing & Development

### Project Structure
```
├── src/
│   ├── components/         # React components
│   │   ├── Chatbot.tsx    # AI chatbot UI
│   │   └── ui/            # shadcn components
│   ├── pages/             # Route pages
│   └── integrations/      # Supabase client
├── supabase/
│   ├── functions/         # Edge functions
│   │   └── chat/         # Chatbot backend
│   └── config.toml        # Supabase config
└── README.md             # This file
```

### Making Changes
1. Edit code in Lovable or locally
2. Changes auto-deploy to preview
3. Test in browser
4. Publish to production when ready

### Debugging AI Issues

**Check Edge Function Logs**:
1. Open Lovable Cloud (click "Cloud" tab)
2. Navigate to Functions → chat
3. View real-time logs

**Common Issues**:
- **Empty responses**: Check system prompt formatting
- **Rate limits**: Upgrade Lovable plan
- **Slow responses**: Switch to faster model (gemini-2.5-nano)

## 📚 Resources

- [Lovable Documentation](https://docs.lovable.dev/)
- [Supabase Edge Functions Guide](https://supabase.com/docs/guides/functions)
- [Prompt Engineering Guide](https://www.promptingguide.ai/)
- [OpenAI Best Practices](https://platform.openai.com/docs/guides/prompt-engineering)

## 📄 License

This project is part of an academic assignment for [Your Course Name].

---

**Built with ❤️ using Lovable AI Studio**

*Questions? Chat with our AI assistant on the site!*
