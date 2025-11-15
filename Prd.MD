# Product Requirements Document (PRD)
**Project:** Butter AI - Interactive Marketing & Demo Website
**Version:** 2.0 (Phase 2 - Prototype Implementation)

---

### 1. Overview & Goal

**Product Purpose:** Butter AI is a SaaS platform that gives B2B companies AI-powered churn prediction, real-time monitoring, and automated retention tools to "Stop Losing Customers to the Unknown."

**Phase 2 Update:** This phase successfully evolved the project from a static "brochure" website (Phase 1) into a functional, interactive product demo. The primary goal was to satisfy the **Option 2: Product Demo** homework requirement, which our Phase 1 site only partially met. We achieved this by building out the two high-priority interactive features identified in our initial gap analysis: an **Interactive Churn Risk Calculator** and an **Interactive Dashboard Preview**.

This implementation transforms our site from "telling" users what we do to "showing" them, providing immediate, tangible value and a clear proof of concept.

---

### 2. Core Features (Implemented)

This list details the features built across Phase 1 and Phase 2, with their current status.

| Feature | Status | Type | AI Feature? |
| :--- | :--- | :--- | :--- |
| **Phase 1: Marketing Site** | | | |
| Hero, Features, How It Works, Testimonials, Pricing, FAQ | ✅ Complete | Marketing | No |
| Consistent Branding & Glass Morphism UI | ✅ Complete | Design | No |
| Lead Gen (Typeform) | ✅ Complete | Marketing | No |
| **Phase 1: AI Integration** | | | |
| AI-Powered Chatbot | ✅ Complete | Interactive | **Yes** |
| **Phase 2: Interactive Demos** | | | |
| Interactive Churn Risk Calculator | ✅ Complete | Interactive | **Yes** |
| Interactive Dashboard Preview | ✅ Complete | Interactive | No |
| **Phase 3: Future Roadmap** | | | |
| AI-Generated Blog Section | ⚠️ Planned | Content | **Yes** |
| AI-Powered Lead Qualification | ⚠️ Planned | Interactive | **Yes** |
| Onboarding Tutorial Flow | ⚠️ Planned | UI/UX | No |

---

### 3. AI Specification

Our prototype uses AI in two distinct, functional ways.

#### 1. AI-Powered Chatbot (Phase 1)
* **What it does:** The chatbot (floating widget) acts as a 24/7 sales assistant. It's primed with a system prompt that gives it context about Butter AI, our product features, and our target audience. It answers user questions about churn, pricing, and technical details.
* **Where it appears:** A floating chat widget available on all pages.
* **Model/Feature:** Uses **Google Gemini 2.5 Flash** via the Lovable AI Gateway. It streams token-by-token responses for a real-time feel.

#### 2. Interactive Churn Risk Calculator (Phase 2)
* **What it does:** This is our primary "proof of concept" demo.
    1.  The user inputs sample customer metrics (e.g., NPS score, months subscribed, support tickets).
    2.  This data is sent to a Supabase Edge Function.
    3.  The function formats the data into a prompt for the Gemini API, asking for a structured analysis.
    4.  The AI model analyzes the inputs and returns a **JSON object** containing a `risk_score` (0-100), a `risk_level` ("Low", "Medium", "High"), and an array of short, actionable `recommendations`.
    5.  The frontend parses this JSON and displays the results in a visual gauge and a bulleted list.
* **Where it appears:** A new, dedicated section on the homepage, between "How It Works" and "Testimonials."
* **Model/Feature:** Uses **Google Gemini** (via Supabase Edge Function). The key is a structured "JSON mode" prompt that ensures the AI's response is machine-readable and not just conversational text.

---

### 4. Technical Architecture

The Phase 2 build expanded our stack while maintaining the core foundation.

* **Frontend:** React, TypeScript, Tailwind CSS, Framer Motion (for animations).
* **Charts/Viz:** `recharts` (Used for the new Calculator gauge and the Dashboard Preview charts).
* **AI (Chatbot):** Client-side integration with **Lovable AI Gateway** (streaming Gemini responses).
* **AI (Calculator):**
    1.  **Client (React)** sends a fetch request to an edge function.
    2.  **Backend (Supabase Edge Function)** receives the request, validates inputs, and securely calls the Gemini API with a system prompt.
    3.  **AI (Gemini API)** processes the request and returns a structured JSON response.
* **Forms:** Typeform (all "Get Started" CTAs still link to our main waitlist form).
* **Hosting & CI/CD:** GitHub + Vercel (or AI Studio Publish).

---

### 5. Prompting Strategy & Iteration Log

We used Google AI Studio's "Build" feature extensively to generate both UI components and the core AI logic.

#### Prompt 1: Generating the Calculator UI Component

* **Initial Prompt:**
    > "Generate a React component using TypeScript and Tailwind CSS for a 'Churn Risk Calculator'. It needs three input sliders: 'NPS' (0-10), 'Support Tickets' (0-20), and 'Months Subscribed' (1-36). Include a 'Calculate' button."
* **Result:** This produced a functional but visually plain component.
* **Refinement (Iteration):**
    > "Refine the last component. Apply the 'glass morphism' design system: a `backdrop-blur-lg`, `bg-white/10`, and `border border-white/20`. Style the button to match my project's primary gradient. After the button, add a placeholder for a `recharts` Gauge component."
* **Outcome:** This prompt successfully generated a component that matched our existing brand identity, saving significant styling time.

#### Prompt 2: Creating the Calculator's AI Logic (System Prompt)

* **Initial Prompt:**
    > "Write a prompt for an AI that takes user metrics and predicts churn."
* **Result:** The AI generated a *conversational* response (e.g., "Based on those metrics, the customer seems at risk..."). This was unusable for a UI.
* **Refinement (Iteration):**
    > "Act as a B2B churn prediction analyst. The user will provide metrics in the format: `NPS: 7, Tickets: 12, Months: 4`.
    >
    > Your response MUST be only a valid JSON object. Do not include markdown \`\`\`json wrappers or any other text.
    >
    > The JSON object must have this exact structure:
    > {
    > "risk_score": <number from 0-100>,
    > "risk_level": <"Low", "Medium", or "High">,
    > "recommendations": [<string>, <string>]
    > }
    >
    > Base the score on the inputs: low NPS and high tickets increase risk. High subscription length slightly decreases risk."
* **Outcome:** This highly-structured prompt was critical. It forces the AI to return machine-readable data that our React app can directly parse and display.

#### Prompt 3: Debugging the Interactive Dashboard

* **Initial Prompt:**
    > "My `recharts` bar chart isn't re-rendering when I update my filter state in React."
* **Result:** The AI provided several possible reasons (state mutation, incorrect `data` prop, missing key).
* **Refinement (Iteration):**
    > "Here is my code: [...pasted component code...]. I think I'm mutating the state directly. Show me the correct way to filter my `mockData` array based on my `filterCategory` state and update the chart data immutably using `useState`."
* **Outcome:** The AI provided the corrected code snippet using a `useEffect` hook and a non-mutating `.filter()` method, which solved the bug.

---

### 6. UX & Design Notes

* **UX Strategy:** The primary UX goal for Phase 2 was to provide **instant value**. The calculator gives users an immediate, tangible "win" by turning their inputs into an AI-driven insight. This builds trust and makes the product's value proposition concrete.
* **Design:** We successfully extended the Phase 1 "glass morphism" and gradient design system to the new interactive components. The `recharts` library was customized to fit our color palette.
* **Limitations & Tradeoffs:**
    * The **Churn Risk Calculator** is clearly labeled as a "demo." It's not a statistically perfect model but an *illustrative tool* to showcase the *concept* of our AI's analytical capabilities.
    * The **Dashboard Preview** is also illustrative. It uses a static `mockData.json` file and is *not* connected to a live database. The interactivity (filtering) is all client-side, but it effectively simulates the look and feel of the final product.

---

### 7. Next Steps (Phase 3)

With the core prototype now functional and meeting all homework requirements, Phase 3 will focus on polishing the experience and deepening the AI integration.

1.  **Implement AI-Generated Content:** Build the "Blog" section from our original roadmap, using AI to generate 3-5 static articles on churn prevention. This will build SEO and thought leadership.
2.  **Connect AI Systems:** A key priority is to connect our AI features. We will explore feeding the Calculator's results into the Chatbot's context. A user could ask, "Why did I get a 78% risk score?" and the chatbot could explain the reasoning based on their inputs.
3.  **Refine Lead Gen (AI Qualification):** As a stretch goal, we will A/B test replacing the static Typeform with a conversational AI lead qualification bot that can ask for the user's email *after* providing value.
4.  **Mobile Polish:** Conduct a full review of the new interactive components on mobile to ensure the charts and input sliders are responsive and usable.
