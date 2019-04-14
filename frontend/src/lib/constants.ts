export const storage = {
    // TO-DO: decrease free storage upon subscription activation
    free: 10000,
    basic: 200,
    advanced: 500,
};

export const price = {
    free: 0,
    basic: 5,
    advanced: 20,
};

export const allowedItunesCategories: { [key: string]: string[] } = {
    "Arts": [
        "Design",
        "Fashion & Beauty",
        "Food",
        "Literature",
        "Performing Arts",
        "Visual Arts",
    ],
    "Business": [
        "Business News",
        "Careers",
        "Investing",
        "Management & Marketing",
        "Shopping",
    ],
    "Comedy": [],
    "Education": [
        "Educational Technology",
        "Higher Education",
        "K-12",
        "Language Courses",
        "Training",
    ],
    "Games & Hobbies": [
        "Automotive",
        "Aviation",
        "Hobbies",
        "Other Games",
        "Video Games",
    ],
    "Government & Organizations": [
        "Local",
        "National",
        "Non-Profit",
        "Regional",
    ],
    "Health": [
        "Alternative Health",
        "Fitness & Nutrition",
        "Self-Help",
        "Sexuality",
    ],
    "Kids & Family": [],
    "Music": [],
    "News & Politics": [],
    "Religion & Spirituality": [
        "Buddhism",
        "Christianity",
        "Hinduism",
        "Islam",
        "Judaism",
        "Other",
        "Spirituality",
    ],
    "Science & Medicine": [
        "Medicine",
        "Natural Sciences",
        "Social Sciences",
    ],
    "Society & Culture": [
        "History",
        "Personal Journals",
        "Philosophy",
        "Places & Travel",
    ],
    "Sports & Recreation": [
        "Amateur",
        "College & High School",
        "Outdoor",
        "Professional",
    ],
    "Technology": [
        "Gadgets",
        "Tech News",
        "Podcasting",
        "Software How-To",
    ],
    "TV & Film": [],
};
