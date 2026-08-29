/** Canonical, single-source-of-truth metadata used to build page <head> tags and JSON-LD. */

export const SITE_URL = "https://wenyu.me";

export const PERSON = {
    name: "Wenyu Zhao",
    alternateName: ["赵文宇", "Wenyu Zhao (赵文宇)"],
    jobTitle: "Research Software Engineer",
    worksFor: "Google",
    email: "wenyu.zhao@anu.edu.au",
    /** Profiles Google uses to reconcile this page with the same person elsewhere. */
    sameAs: [
        "https://github.com/wenyuzhao",
        "https://www.linkedin.com/in/wenyu-zhao",
        "https://scholar.google.com.au/citations?user=7QSb8g4AAAAJ&hl=en",
        "https://dl.acm.org/profile/99659509405",
        "https://cecs.anu.edu.au/people/wenyu-zhao",
        "https://www.mmtk.io",
    ],
    knowsAbout: [
        "Garbage collection",
        "Memory management",
        "Programming languages",
        "Compilers and runtime systems",
        "Computer systems",
        "Large language models",
        "Agentic coding",
    ],
    alumniOf: [
        "Australian National University",
        "Monash University",
    ],
};

export const DEFAULT_DESCRIPTION =
    "Wenyu Zhao (赵文宇) is a Research Software Engineer at Google working on AI and systems, " +
    "with research in memory management, garbage collection, and programming languages.";
