"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      After graduating with a master's degree from UNC-Chapel Hill, I started my career as an intern and a full-time software engineer at AIG, which is a Finance and insurance corporation. Over the years, My experience spans various domains such as telecom, healthcare, banking, insurance, retail, and e-commerce. I have also worked on multiple POCs for my business clients using cutting-edge tech stacks. I also had an opportunity to mentor junior developers, get them up to speed, and guide them on the best practices by setting the bar high for coding standards. With 15+ years of experience building large-scale, high-performance web applications across telecom, healthcare (FHIR/EHR/Prior Auth), banking, and e-commerce. Expert in Angular (6–19), React, Next.js (SSR/SSG/ISR, App Router, API Routes, middleware, image optimization), Vue.js, React Native, TypeScript, JavaScript (ES6+), HTML5, CSS3/SCSS/SASS/LESS, Bootstrap, Material UI, Tailwind CSS, Chakra UI, Kendo UI, PrimeReact, D3, Chart.js, Blazor libraries, MudBlazor, and Blazorise, and micro-frontend / design-system architectures. Proven track record delivering EHR-embedded SMART on FHIR apps, FHIR R4–based clinical dashboards, and prior-authorization workflows, as well as complex portals and Next. js-based marketing/portal sites integrated with Contentful CMS, AEM, Astro, and Gatsby. Deep experience with state management and UI tooling, including Redux, Redux-Saga, NgRx, Zustand, MobX, RxJS, Storybook (WCAG/ADA/508-compliant component libraries), A/B testing tools (VWO, Optimizely, Maxymiser), and strong accessibility focus. Full-stack capable with Node.js/Express, FastAPI, Python, Java/J2EE, REST and GraphQL APIs, WebSockets, microservices, and data layers spanning MongoDB, MySQL, PostgreSQL, DynamoDB, ElasticSearch, and PL/SQL. Skilled across AWS (Lambda, CloudFront, OAC/OAI, S3, DynamoDB, Lex, Connect, CloudWatch), Azure (Functions, AAD, API Management, Blob, Cosmos DB, App Insights), Docker, Kubernetes, and modern CI/CD pipelines (Jenkins, GitLab CI, Azure DevOps) with robust automated testing using Jest, Cypress, Playwright, Enzyme, Karma, Jasmine, React Testing Library. Collaborated closely with product and UX teams (Figma, Adobe XD, Framer X) to translate complex domain workflows into intuitive, responsive, secure, and maintainable front-end solutions. Developed AI-powered React applications integrating LLM services with secure AWS backend APIs, delivering intelligent, responsive user experiences. Maintained scalable backend architectures, event-driven systems, distributed services, and cloud-native deployments on AWS and Azure. Participated in architecture reviews, sprint planning, and code reviews to deliver scalable AI-native applications following modern software engineering best practices. Maintained modular AI service layers supporting extensible agent workflows, tool invocation, and enterprise system integrations. Experience building production AI applications using LLMs, Retrieval-Augmented Generation (RAG), AI agents, prompt engineering, and vector databases. Collaborated with cross-functional teams to evaluate AI model performance, optimize inference workflows, and improve end-user experience. Designed reusable prompt templates for enterprise workflows. Partnered closely with executive-level stakeholders, senior leadership, product owners, and business teams to translate strategic objectives into scalable technology solutions and actionable delivery roadmaps. Maintained AI-assisted development using GitHub Copilot, ChatGPT, and Claude to accelerate component generation, UI scaffolding, and workflow implementation. 


      </p>

      <p>
      I enjoy playing badminton, swimming, binge-watching movies, and Netflix when not coding. I also enjoy learning new things and technologies and keeping myself updated. I am currently learning about the evolving technologies related to AI & ML.
      </p>
    </motion.section>
  );
}
