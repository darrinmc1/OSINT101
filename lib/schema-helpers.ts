import {
  createCourseSchema,
  createBreadcrumbSchema,
  createFAQSchema,
  createArticleSchema,
  CourseSchemaProps,
  BreadcrumbItem,
  FAQItem
} from "@/components/json-ld"

export const BASE_URL = "https://osinttraining.com"

export function getCourseBreadcrumbs(courseName: string, courseSlug: string): BreadcrumbItem[] {
  return [
    { name: "Home", url: BASE_URL },
    { name: "Courses", url: `${BASE_URL}/courses` },
    { name: courseName, url: `${BASE_URL}/courses/${courseSlug}` }
  ]
}

export function getCategoryBreadcrumbs(categoryName: string, categorySlug: string): BreadcrumbItem[] {
  return [
    { name: "Home", url: BASE_URL },
    { name: "Courses", url: `${BASE_URL}/courses` },
    { name: categoryName, url: `${BASE_URL}/courses/category/${categorySlug}` }
  ]
}

export function getBlogBreadcrumbs(postTitle: string, postSlug: string): BreadcrumbItem[] {
  return [
    { name: "Home", url: BASE_URL },
    { name: "Blog", url: `${BASE_URL}/blog` },
    { name: postTitle, url: `${BASE_URL}/blog/${postSlug}` }
  ]
}

export function buildCoursePageSchemas(course: CourseSchemaProps, breadcrumbs: BreadcrumbItem[]) {
  return [
    createCourseSchema(course),
    createBreadcrumbSchema(breadcrumbs)
  ]
}

export function buildFAQPageSchemas(faqs: FAQItem[], breadcrumbs: BreadcrumbItem[]) {
  return [
    createFAQSchema(faqs),
    createBreadcrumbSchema(breadcrumbs)
  ]
}

export function buildArticlePageSchemas(
  article: Parameters<typeof createArticleSchema>[0],
  breadcrumbs: BreadcrumbItem[]
) {
  return [
    createArticleSchema(article),
    createBreadcrumbSchema(breadcrumbs)
  ]
}

export const commonFAQs: FAQItem[] = [
  {
    question: "What is OSINT?",
    answer: "OSINT (Open Source Intelligence) is the practice of collecting and analyzing publicly available information from various sources including social media, websites, public records, and other open sources to gather intelligence."
  },
  {
    question: "Who should take OSINT training courses?",
    answer: "OSINT training is ideal for security professionals, investigators, journalists, law enforcement, corporate security teams, researchers, and anyone interested in digital investigation techniques."
  },
  {
    question: "Are the OSINT courses available online?",
    answer: "Yes, all our OSINT training courses are available online and can be accessed at your own pace from anywhere in the world."
  },
  {
    question: "Do I receive a certificate after completing an OSINT course?",
    answer: "Yes, upon successful completion of our OSINT courses, you will receive a certificate of completion that you can share on LinkedIn and other professional platforms."
  },
  {
    question: "What skill level is required to start OSINT training?",
    answer: "We offer courses for all skill levels, from complete beginners to advanced practitioners. Our beginner courses require no prior experience, while advanced courses build on foundational OSINT knowledge."
  }
]

export { createCourseSchema, createBreadcrumbSchema, createFAQSchema, createArticleSchema }
export type { CourseSchemaProps, BreadcrumbItem, FAQItem }
