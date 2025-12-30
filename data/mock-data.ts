
import type { Post, Category, Product, Policies } from '../types';

export const MOCK_CATEGORIES: Category[] = [
  { slug: 'tech', name: 'Tech' },
  { slug: 'lifestyle', name: 'Lifestyle' },
  { slug: 'travel', name: 'Travel' },
  { slug: 'finance', name: 'Finance' },
  { slug: 'health', name: 'Health' },
  { slug: 'making-money', name: 'Making Money' },
  { slug: 'saving-money', name: 'Saving Money' },
];

export const MOCK_POLICIES: Policies = {
  'privacy-policy': {
    title: 'Privacy Policy',
    content: `## Privacy Policy for NicheAtlas\n\nLast Updated: [Date]\n\nYour privacy is important to us. It is NicheAtlas's policy to respect your privacy regarding any information we may collect from you across our website, [Your Website URL], and other sites we own and operate.\n\n### 1. Information We Collect\n\nWe only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.\n\n### 2. Use of Information\n\nWe use collected information to provide and improve our services, process transactions, and communicate with you. We do not share any personally identifying information publicly or with third-parties, except when required to by law.\n\n### 3. Cookies\n\nWe use cookies to store information about your preferences and to personalize the content you see. You can choose to disable cookies through your browser settings, but this may affect your experience on our website.\n\n### 4. Security\n\nWe take the security of your data seriously and use commercially acceptable means to protect it. However, no method of transmission over the Internet or electronic storage is 100% secure.`
  },
  'terms-of-service': {
    title: 'Terms of Service',
    content: `## Terms of Service for NicheAtlas\n\nLast Updated: [Date]\n\nBy accessing the website at [Your Website URL], you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.\n\n### 1. Use License\n\nPermission is granted to temporarily download one copy of the materials (information or software) on NicheAtlas's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.\n\n### 2. Disclaimer\n\nThe materials on NicheAtlas's website are provided on an 'as is' basis. NicheAtlas makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.\n\n### 3. Limitations\n\nIn no event shall NicheAtlas or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on NicheAtlas's website.`
  },
  'cookie-policy': {
    title: 'Cookie Policy',
    content: `## Cookie Policy for NicheAtlas\n\nLast Updated: [Date]\n\nThis is the Cookie Policy for NicheAtlas, accessible from [Your Website URL]\n\n### What Are Cookies\n\nAs is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies.\n\n### How We Use Cookies\n\nWe use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.`
  },
  'ethics-policy': {
    title: 'Ethics Policy',
    content: `## Ethics Policy\n\nNicheAtlas is committed to the highest standards of journalistic ethics. Our primary goal is to provide our readers with accurate, fair, and transparent content.\n\n### 1. Accuracy and Corrections\n\nWe strive for accuracy in all our publications. If we make an error, we will correct it promptly and transparently.\n\n### 2. Independence and Impartiality\n\nOur content is created independently. Our writers and editors are not influenced by advertisers or other external parties. We maintain a clear distinction between editorial content and advertising.`
  },
  'editorial-guidelines': {
    title: 'Editorial Guidelines',
    content: `## Editorial Guidelines\n\nOur editorial team is dedicated to producing high-quality content that is informative, engaging, and trustworthy.\n\n### 1. Sourcing and Attribution\n\nWe rely on credible sources and are transparent about them. We attribute all facts, quotes, and ideas to their original sources.\n\n### 2. Tone and Style\n\nOur content should be clear, concise, and accessible to a broad audience. We aim for a professional yet engaging tone.`
  },
  'disclosure': {
    title: 'Disclosure',
    content: `## Disclosure Policy\n\nTransparency with our readers is a core value at NicheAtlas. This site may contain affiliate links, which means we may earn a commission if you make a purchase through our links, at no extra cost to you. These commissions help us to maintain this website and continue to create valuable content. We only recommend products and services that we believe in and have vetted ourselves.`
  },
  'review-process': {
    title: 'Review Process',
    content: `## Our Review Process\n\nTo ensure our recommendations are reliable, we follow a rigorous review process for products and services.\n\n### 1. Hands-On Testing\n\nWhenever possible, we conduct hands-on testing of the products we review. Our reviewers use the products in real-world scenarios to assess their performance, usability, and value.\n\n### 2. Expert Opinion\n\nWe consult with industry experts to inform our reviews and ensure our analysis is accurate and comprehensive.`
  },
};


export const MOCK_PRODUCTS: Product[] = [
  {
    slug: 'ultimate-productivity-guide-ebook',
    title: 'The Ultimate Productivity Guide',
    description: 'A comprehensive e-book to help you master your time, focus your energy, and achieve your goals.',
    featuredImage: 'https://picsum.photos/seed/ebook1/600/400',
    downloadUrl: '/downloads/placeholder.pdf',
    type: 'E-book',
    price: 0,
  },
  {
    slug: 'minimalist-weekly-planner-printable',
    title: 'Minimalist Weekly Planner',
    description: 'A clean, printable weekly planner to help you organize your tasks and stay on track.',
    featuredImage: 'https://picsum.photos/seed/printable1/600/400',
    downloadUrl: '/downloads/placeholder.pdf',
    type: 'Printable',
    price: 0,
  },
  {
    slug: 'premium-notion-dashboard-template',
    title: 'Premium Notion Dashboard Template',
    description: 'An all-in-one Notion template for ultimate organization, including project management and goal tracking.',
    featuredImage: 'https://picsum.photos/seed/template1/600/400',
    downloadUrl: '/downloads/placeholder.pdf',
    type: 'Template',
    price: 29.99,
  },
  {
    slug: 'introduction-to-investing-ebook',
    title: 'An Introduction to Investing',
    description: 'Learn the fundamentals of investing with this beginner-friendly guide to stocks, bonds, and funds.',
    featuredImage: 'https://picsum.photos/seed/ebook2/600/400',
    downloadUrl: '/downloads/placeholder.pdf',
    type: 'E-book',
    price: 0,
  },
  {
    slug: 'creative-writing-prompts-pack',
    title: 'Creative Writing Prompts Pack',
    description: 'Over 100 prompts to spark your imagination and overcome writer\'s block. Perfect for authors and hobbyists.',
    featuredImage: 'https://picsum.photos/seed/prompts1/600/400',
    downloadUrl: '/downloads/placeholder.pdf',
    type: 'Prompt',
    price: 9.99,
  },
];


export const MOCK_POSTS: Post[] = [
  {
    slug: '25-legit-ways-to-get-free-gift-cards',
    title: '25 Legitimate Ways to Earn Free Gift Cards in Your Spare Time',
    category: 'saving-money',
    featuredImage: 'https://picsum.photos/seed/giftcards/1200/800',
    metaDescription: 'Discover how to get free gift cards from popular brands by completing simple online tasks, shopping, and sharing your opinion.',
    content: `
## Turn Your Downtime into Real Rewards

Who doesn't love a gift card? It's like finding free money you can spend at your favorite stores. The good news is that you don't have to wait for a birthday to get one. There are dozens of legitimate companies that will reward you with gift cards for completing simple tasks online.

### 1. Share Your Opinion on Survey Sites

Market research companies are always looking for consumer opinions, and they're willing to pay for them.
*   **Swagbucks:** A giant in the rewards space. You can earn points (called SB) for taking surveys, watching videos, searching the web, and shopping online. Redeem your SB for gift cards from Amazon, Walmart, and more.
*   **Survey Junkie:** A straightforward platform focused purely on surveys. The interface is clean, and you can cash out with as little as $5, making it a quick way to earn your first reward.

### 2. Get Cashback for Shopping

If you're already shopping online, you might as well get a kickback for it.
*   **Rakuten (formerly Ebates):** Activate Rakuten before you shop at thousands of online retailers, and you'll earn a percentage of your purchase back as cash. They send your earnings via check or PayPal, which you can easily use to buy gift cards.
*   **Ibotta:** While famous for grocery rebates, Ibotta also offers cashback for online shopping. Scan your receipts or link your loyalty accounts to earn cash back that can be redeemed for gift cards.

### 3. Complete Micro-Tasks Online

Micro-task websites pay you to complete small, simple jobs that often take just a few seconds or minutes.
*   **Amazon Mechanical Turk (MTurk):** Perform simple tasks that computers can't, like identifying objects in images or transcribing audio. Earnings can be transferred to your Amazon Payments account, perfect for Amazon gift cards.

By combining a few of these methods, you can create a steady stream of gift cards to supplement your budget or treat yourself without spending a dime.
    `,
    author: 'Emily White',
    authorImage: 'https://picsum.photos/seed/emily/100/100',
    date: '2024-07-20',
    readingTime: 6,
    comments: [],
  },
  {
    slug: 'how-to-make-100-dollars-fast',
    title: 'How to Make $100 Fast: 30+ Proven Methods',
    category: 'making-money',
    featuredImage: 'https://picsum.photos/seed/fastcash/1200/800',
    metaDescription: 'Need to make extra cash quickly? Here are over 30 realistic ways to make $100 or more, from online gigs to local tasks.',
    content: `
## Quick Cash Strategies That Actually Work

Sometimes you just need a little extra cash, and you need it now. Whether it's for an unexpected bill or a weekend treat, making a quick $100 is more achievable than you might think. Here are some proven strategies.

### 1. Leverage the Gig Economy

App-based work allows you to start earning almost immediately.
*   **Food Delivery:** Services like DoorDash, Uber Eats, and Instacart are constantly looking for drivers and shoppers. You can often start earning within a week and cash out daily.
*   **Ridesharing:** If you have a reliable car, driving for Uber or Lyft during peak hours can be a very fast way to make $100.

### 2. Sell Things You No Longer Need

Declutter your home and make money at the same time.
*   **Facebook Marketplace:** Perfect for selling furniture, electronics, and other local pickup items. It's free to list, and you can get cash in hand the same day.
*   **Poshmark & Mercari:** These apps are fantastic for selling clothes, shoes, and accessories you no longer wear. Just snap a photo, write a description, and ship it out when it sells.

### 3. Offer Your Skills Online

If you have a marketable skill, you can make money from your computer.
*   **UserTesting Sites:** Websites like UserTesting.com pay you $10 to visit a website or app, complete a set of tasks, and record your spoken feedback. Each test takes about 20 minutes.
*   **Freelance Gigs:** Check out platforms like Upwork or Fiverr for quick jobs related to writing, graphic design, or social media management.
    `,
    author: 'John Smith',
    authorImage: 'https://picsum.photos/seed/john/100/100',
    date: '2024-07-19',
    readingTime: 7,
    comments: [],
  },
  {
    slug: 'get-paid-to-lose-weight',
    title: '11 Apps & Programs That Will Pay You to Lose Weight',
    category: 'health',
    featuredImage: 'https://picsum.photos/seed/fitnesspay/1200/800',
    metaDescription: 'Turn your fitness goals into financial rewards. Explore the best apps and programs that offer cash prizes and incentives for losing weight and staying healthy.',
    content: `
## Monetize Your Motivation

Sticking to a weight loss plan can be tough. What if you had a financial incentive to keep you on track? A growing number of apps and programs use cash rewards to motivate users to achieve their health and fitness goals. It's a powerful way to add an extra layer of accountability.

### Wager on Your Own Success

The most popular model involves "diet betting," where you put your own money on the line.
*   **HealthyWage:** This is the leader in weight loss wagering. You can participate in individual or team challenges. You state your goal, the timeframe, and how much you want to bet per month. If you hit your goal, you win your bet back plus a share of the pot. Prizes can be hundreds or even thousands of dollars.
*   **DietBet:** Similar to HealthyWage, but more focused on shorter-term, group-based challenges. You join a game, pay your bet into the pot, and if you lose a certain percentage of your body weight (e.g., 4% in 4 weeks), you split the pot with the other winners.

### Get Rewarded for Healthy Habits

Other apps reward you for consistent activity rather than just weight loss.
*   **StepBet:** If you have a fitness tracker, you can use StepBet to bet on hitting your personalized step goals. It's a great way to stay active.
*   **Achievement:** This app connects to over 20 other fitness apps (like Apple Health, Fitbit, MyFitnessPal) and rewards you with points for activities like walking, logging meals, and sleeping. You can redeem 10,000 points for $10. It's slower, but it's completely free.
    `,
    author: 'Jane Doe',
    authorImage: 'https://picsum.photos/seed/jane/100/100',
    date: '2024-07-18',
    readingTime: 5,
    comments: [],
  },
  {
    slug: 'companies-that-send-free-products-to-test',
    title: '15 Top Companies That Send You Free Products to Test at Home',
    category: 'lifestyle',
    featuredImage: 'https://picsum.photos/seed/producttest/1200/800',
    metaDescription: 'Become a product tester and get free stuff from major brands. Learn how to sign up with these 15 legitimate companies to get products sent to your door.',
    content: `
## Get Free Stuff in Exchange for Your Opinion

Before a new product hits the shelves, companies need real people to try it out and provide honest feedback. This is where product testing comes in. As a product tester, you can receive free products—from makeup and snacks to tech gadgets—in exchange for your thoughts.

### How Does Product Testing Work?

The process is generally straightforward:
1.  **Sign Up:** You create a profile on a product testing platform. You'll answer detailed questions about your lifestyle, habits, and demographics.
2.  **Get Matched:** Companies look for specific types of consumers for their products. If your profile is a match, you may be invited to a testing program.
3.  **Receive & Test:** The company ships the product to you for free. You use it as you normally would for a specified period.
4.  **Give Feedback:** You'll complete a survey, write a review, or participate in a discussion about your experience.

### Where to Sign Up

*   **L'Oréal Consumer Testing:** A great panel for anyone interested in skincare, makeup, and hair products.
*   **The Pink Panel:** Another beauty-focused panel that often lets you keep the products you test.
*   **McCormick Consumer Testing:** If you love to cook, you can get a chance to test new spices, seasonings, and food products.
*   **Toluna Influencers:** This is a large market research panel that not only offers surveys but also has a product testing section where you can sign up for opportunities.
    `,
    author: 'Alex Johnson',
    authorImage: 'https://picsum.photos/seed/alex/100/100',
    date: '2024-07-17',
    readingTime: 5,
    comments: [],
  },
  {
    slug: 'the-future-of-ai-in-2024',
    title: 'The Future of AI: Predictions for 2024 and Beyond',
    category: 'tech',
    featuredImage: 'https://picsum.photos/seed/ai2024/1200/800',
    metaDescription: 'A deep dive into the upcoming trends in Artificial Intelligence, from large language models to autonomous systems.',
    content: `
## The AI Revolution Continues

The year 2024 is poised to be another landmark year for Artificial Intelligence. We're moving beyond the initial hype of generative AI and into a phase of practical application and integration. Expect to see AI become more deeply embedded in everything from enterprise software to consumer gadgets.

### Key Trends to Watch

1.  **Multimodal AI:** Models that can understand and generate content across text, images, audio, and video will become mainstream. This will unlock new creative possibilities and more intuitive user interfaces.
2.  **AI Agents:** Autonomous agents capable of performing complex multi-step tasks will start to emerge. Think of an AI that can not only book a flight but also arrange transportation and book a hotel based on your preferences.
3.  **Edge AI:** More processing will happen on-device, reducing latency and improving privacy. This is crucial for applications like real-time translation and advanced driver-assistance systems.

The ethical considerations will also grow in importance. As AI becomes more powerful, ensuring fairness, transparency, and accountability will be paramount for developers and policymakers alike. The future is exciting, but it requires careful navigation.
    `,
    author: 'Jane Doe',
    authorImage: 'https://picsum.photos/seed/jane/100/100',
    date: '2024-07-15',
    readingTime: 5,
    comments: [
        { id: '1', author: 'Mike P.', content: 'Great insights on Multimodal AI. It really does feel like the next frontier.', date: '2024-07-16' },
        { id: '2', author: 'Sarah K.', content: 'The point about Edge AI and privacy is so important. Thanks for highlighting it!', date: '2024-07-17' },
    ],
  },
  {
    slug: '10-habits-for-a-healthier-lifestyle',
    title: '10 Simple Habits for a Healthier Lifestyle',
    category: 'health',
    featuredImage: 'https://picsum.photos/seed/healthylife/1200/800',
    metaDescription: 'Discover ten easy-to-implement habits that can drastically improve your physical and mental well-being.',
    content: `
## Small Changes, Big Impact

Achieving a healthier lifestyle doesn't require a complete overhaul of your life. By incorporating a few simple, sustainable habits, you can make a significant difference in your overall well-being.

### Your Daily Checklist for Health

1.  **Hydrate First Thing:** Start your day with a large glass of water to kickstart your metabolism.
2.  **Move for 30 Minutes:** Whether it's a brisk walk, a yoga session, or a bike ride, daily movement is non-negotiable.
3.  **Eat a Colorful Diet:** Aim to include a variety of fruits and vegetables in every meal.
4.  **Practice Mindful Eating:** Pay attention to your food, eat slowly, and savor each bite.
5.  **Prioritize Sleep:** Aim for 7-9 hours of quality sleep per night.
6.  **Disconnect to Reconnect:** Set aside time each day to unplug from screens.
7.  **Practice Gratitude:** End your day by noting three things you're thankful for.
8.  **Get Some Sunlight:** Spend at least 15 minutes outdoors to boost your Vitamin D levels.
9.  **Stretch Regularly:** Improve flexibility and reduce muscle tension with daily stretching.
10. **Connect with Loved Ones:** Nurture your social connections for better mental health.
    `,
    author: 'John Smith',
    authorImage: 'https://picsum.photos/seed/john/100/100',
    date: '2024-07-14',
    readingTime: 4,
    comments: [
        { id: '3', author: 'Laura', content: 'Love this list! Starting my day with water has been a game changer.', date: '2024-07-15' },
    ],
  },
  {
    slug: 'mastering-personal-finance-a-beginners-guide',
    title: 'Mastering Personal Finance: A Beginner\'s Guide',
    category: 'finance',
    featuredImage: 'https://picsum.photos/seed/financeguide/1200/800',
    metaDescription: 'A step-by-step guide to taking control of your finances, from budgeting to investing.',
    content: `
## Your Path to Financial Freedom

Personal finance can seem intimidating, but the core principles are straightforward. By mastering the basics, you can build a secure financial future.

### The Four Pillars of Personal Finance

1.  **Budgeting:** This is the foundation. Track your income and expenses to understand where your money is going. Use an app or a simple spreadsheet. The 50/30/20 rule is a great starting point: 50% for needs, 30% for wants, and 20% for savings.
2.  **Debt Management:** High-interest debt can cripple your financial growth. Prioritize paying off credit cards and personal loans. Consider strategies like the debt snowball or debt avalanche method.
3.  **Building an Emergency Fund:** Life is unpredictable. Aim to save 3-6 months' worth of living expenses in a high-yield savings account. This is your safety net.
4.  **Investing for the Future:** Once you have a handle on the first three pillars, it's time to make your money work for you. Start with low-cost index funds or ETFs through a retirement account like a 401(k) or IRA. The power of compound interest is your best friend.
    `,
    author: 'Emily White',
    authorImage: 'https://picsum.photos/seed/emily/100/100',
    date: '2024-07-12',
    readingTime: 6,
    comments: [],
  },
  {
    slug: 'the-ultimate-guide-to-solo-travel',
    title: 'The Ultimate Guide to Solo Travel in Southeast Asia',
    category: 'travel',
    featuredImage: 'https://picsum.photos/seed/solotravel/1200/800',
    metaDescription: 'Everything you need to know to plan an unforgettable solo adventure through Southeast Asia.',
    content: `
## Embrace the Adventure of a Lifetime

Solo travel is one of the most rewarding experiences you can have. It pushes you out of your comfort zone and allows for ultimate freedom. Southeast Asia is a perfect destination for first-time solo travelers due to its affordability, friendly locals, and well-trodden backpacker trail.

### Essential Planning Tips

*   **Itinerary:** Be flexible. Plan your first few nights, but leave room for spontaneity. Popular routes include the Thailand-Laos-Vietnam-Cambodia loop.
*   **Packing:** Pack light. A 40L backpack is more than enough. Focus on quick-drying clothes and versatile items.
*   **Budget:** You can comfortably travel on $30-$50 USD per day in most countries.
*   **Safety:** Stay aware of your surroundings, inform someone of your itinerary, and get travel insurance.

Don't be afraid to strike up conversations in hostels or on tours. The connections you make with other travelers are often the best part of the journey.
    `,
    author: 'Alex Johnson',
    authorImage: 'https://picsum.photos/seed/alex/100/100',
    date: '2024-07-10',
    readingTime: 7,
    comments: [
        { id: '4', author: 'Tom', content: 'This is the sign I needed to finally book my trip!', date: '2024-07-11' },
    ],
  },
  {
    slug: 'creating-a-mindful-morning-routine',
    title: 'How to Create a Mindful Morning Routine That Sticks',
    category: 'lifestyle',
    featuredImage: 'https://picsum.photos/seed/morning/1200/800',
    metaDescription: 'Transform your mornings from chaotic to calm with a mindful routine that sets a positive tone for the entire day.',
    content: `
## Win the Morning, Win the Day

How you start your day has a profound impact on your mood, productivity, and stress levels. A mindful morning routine isn't about waking up at 5 AM; it's about being intentional with the first hour of your day.

### Building Blocks of a Mindful Morning

*   **No Screens:** The first 30 minutes of your day should be screen-free. The news and social media can wait.
*   **Hydrate:** Drink a glass of water before anything else.
*   **Movement:** Gentle stretching or a short walk can awaken your body.
*   **Mindfulness:** Spend 5-10 minutes in meditation or simply sitting in silence, focusing on your breath.
*   **Journaling:** Write down your thoughts, goals, or anything that's on your mind. This helps clear your head.

Start small. Introduce one new habit at a time. The goal is to create a peaceful, intentional start to your day that you look forward to.
    `,
    author: 'Jane Doe',
    authorImage: 'https://picsum.photos/seed/jane/100/100',
    date: '2024-07-08',
    readingTime: 5,
    comments: [
        { id: '5', author: 'David R.', content: 'The "no screens" rule is the hardest but most rewarding. Highly recommend.', date: '2024-07-09' },
        { id: '6', author: 'Chloe', content: 'Journaling has really helped clear my mind in the mornings.', date: '2024-07-09' },
    ],
  }
];
