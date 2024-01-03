import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assessmentProgress: 0,
  foundersAssessmentStarted: false,
  assessmentFile: [
    {
      add_more: false,
      number: "01",
      qstn: "Our business is in this stage",
      options: [
        "Early Prototype",
        "Advanced Prototype",
        "Early Revenue",
        "Profitability",
        "Scale",
        "Middle Market",
        "Maturity",
      ],
    },
    {
      add_more: false,
      number: "02",
      qstn: "Our business is in this stage",
      options: [
        "Early Prototype",
        "Advanced Prototype",
        "Early Revenue",
        "Profitability",
        "Scale",
        "Middle Market",
        "Maturity",
      ],
    },
    {
      add_more: false,
      number: "03",
      qstn: "We solve a clear need many people have better than any other options",
      options: [
        "Totally like us",
        "Mostly like us",
        "Somewhat like us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
    },
    {
      add_more: false,
      number: "04",
      qstn: "Our business model has been validated through customer feedback and consistently increasing revenue",
      options: [
        "Totally like us",
        "Mostly like us",
        "Somewhat like us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
    },
    {
      add_more: false,
      number: "05",
      qstn: "This best describes our business model  ",
      options: [
        "Volume focused - we work hard to charge less",
        "Pemium focused - we work hard to charge more",
      ],
    },
    {
      add_more: false,
      number: "06",
      qstn: "We know exactly which of our customer types is most profitable to serve",
      options: [
        "Totally like us",
        "Mostly like us",
        "Somewhat like us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
    },
    {
      add_more: false,
      number: "07",
      qstn: "Government policy where we operate is supportive of our industry",
      options: [
        "Totally like us",
        "Mostly like us",
        "Somewhat like us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
    },
    {
      add_more: false,
      number: "08",
      qstn: "We have valuable, registered intellectual property that we can defend where we operate",
      options: [
        "Totally like us",
        "Mostly like us",
        "Somewhat like us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
    },
    {
      add_more: false,
      number: "09",
      qstn: "The value of our total addressable market is this size in USD ($)",
      options: ["Over 10Billion", "1B - 9.99B ", "100M-999M", "Less than 100M"],
    },
    {
      add_more: false,
      number: "10",
      qstn: "The % share of our total addressable market that we expect to cultivate over the next 3 years is this size",
      options: ["Over 30%", "15-29%", "5-19%", "Less than 5%"],
    },
    {
      add_more: false,
      number: "11",
      qstn: "Those we care about most are fans of us pursuing this business",
      options: [
        "Totally like us",
        "Mostly like us",
        "Somewhat like us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
    },
    {
      add_more: false,
      number: "12",
      qstn: "None of our senior leaders has ever defaulted on a business loan payment",
      options: [
        "Totally like us",
        "Mostly like us",
        "Somewhat like us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
    },
    {
      add_more: false,
      number: "13",
      qstn: "Our current team has these components ",
      options: [
        "Visionary (skillfully sets strategy)",
        "Executor (focused on delivering on the operating details)",
        "Developer (skilled in product innovation)",
        "Communicator (skilled in internal and external messaging)",
        "Seller (skilled in driving revenue)",
        "Globtrotter (at least one founder has lived, worked or studied abroad)",
      ],
    },
    {
      add_more: false,
      number: "14",
      qstn: "We have a clear talent plan prepared for next-level growth and can access this talent",
      options: [
        "Totally like us",
        "Mostly like us",
        "Somewhat like us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
    },
    {
      add_more: false,
      number: "15",
      qstn: "This best describes our revenue trajectory",
      options: [
        "We're growing much faster than our closest competitors",
        "We're growing faster than our closest competitors",
        "We're growing at the same rate as a our closest competitors",
        "We're growing slower than our closest competitors",
      ],
    },
    {
      add_more: false,
      number: "16",
      qstn: "Growing this venture is our sole professional focus",
      options: [
        "Totally like us",
        "Mostly like us",
        "Somewhat like us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
    },
    {
      add_more: true,
      number: "17",
      qstn: "This best describes our market focus",
      options: [
        "Artificial Intelligence (AI)",
        "Bioscience",
        "Business Services",
        "Consumer Goods",
        "Ecommerce",
        "Energy",
        "ENtertainment",
        "Finance (Fintech",
        "Food & Beverage",
        "Healthcare",
        "Hospitality",
        "Life Science",
        "Logistics",
        "Mobility",
        "Real Estate",
        "Retail",
        "Software",
        "Share Economy Services",
      ],
    },
    {
      add_more: false,
      number: "18",
      qstn: "This best describes the next 3 years for our market",
      options: [
        "Rapidly growing and global",
        "Moderately growing and global",
        "Rapidly growing and regional",
        "Moderately growing and regional",
        "Market is still forming",
      ],
    },
    {
      add_more: false,
      number: "19",
      qstn: "We expect to reach these revenues in the next 3 years in USD ($)",
      options: ["Over 100M", "50-99M", "30-49M", "10-29M", "Less than 10M"],
    },
    {
      add_more: false,
      number: "20",
      qstn: "This best describes our current growth strategy",
      options: [
        "Market penetration (growing existing products in current markets)",
        "Market development (expanding existing products to new markets)",
        "Product development (adapt or create new products marketed to current customers using existing channels)",
      ],
    },
    {
      add_more: false,
      number: "21",
      qstn: "This best describes our sales channel focus",
      options: ["B2B", "B2C", "B2B2C", "B2G", "C2C"],
    },
    {
      add_more: true,
      number: "22",
      qstn: "This best describes our sales approach",
      options: [
        "Direct Sales",
        "Distribution Agreement",
        "Affiliate Agreement",
        "Franchising",
        "Licensing",
        "Retail",
      ],
    },
    {
      add_more: false,
      number: "23",
      qstn: "This is what our customers care about most",
      options: [
        "Price",
        "Service",
        "Reliability",
        "Quality",
        "Convenience",
        "Choice",
        "Vertical Integration",
        "Status",
      ],
    },
    {
      add_more: false,
      number: "24",
      qstn: "This is what we're currently best built to deliver",
      options: [
        "Cost efficiency",
        "Service responsiveness",
        "Process precision",
        "User functionality",
        "Placement accessibility",
        "Operating agility",
        "Product integration",
        "Social prestige",
      ],
    },
    {
      add_more: false,
      number: "25",
      qstn: "This best describes our sales approach",
      options: [
        "Vertical integration with other valued services that we own",
        "Horizontal integration with valued services from our partner network",
        "Exceptional customer service",
        "Exceptional customer experience convenience",
        "Exceptional and ongoing innovation to customer interests alignment",
        "Service agreements",
        "Accessible subscription-based payment model",
      ],
    },
    {
      add_more: false,
      number: "26",
      qstn: "Our primary focus compared to our closest competitors is",
      options: [
        "Deliver the same value at a lower cost  ",
        "Deliver more value for the same cost",
        "Deliver much more value at a higher cost",
      ],
    },
    {
      add_more: false,
      number: "27",
      qstn: "This best describes our business model",
      options: [
        "High acquisition cost and transactional",
        "Medium acquisition cost and transactional",
        "Low acquisition cost and transactional",
        "High acquisition cost and recurring",
        "Medium acquisition cost and recurring",
        "Low acquisition cost and recurring",
      ],
    },
    {
      add_more: false,
      number: "28",
      qstn: "This is how much customers are required to change their behavior in order to adopt our offering",
      options: [
        "Completely - what we do is very different from anything they've experienced",
        "Significantly - what we do completely re-imagines a familiar service",
        "Moderately - what we do brings new elements to their existing behaviors",
        "Very Little - we give them another option to something that's very familiar to them",
      ],
    },
    {
      add_more: false,
      number: "29",
      qstn: "This best describes our leadership team",
      options: [
        "Members of our team have successfully raised third-party funding",
        "Members of our team have successfully built and harvested another company",
        "Members of our team have successfully conducted M&A transactions",
        "This is the first venture for all of us",
      ],
    },
    {
      add_more: false,
      number: "30",
      qstn: "This color best describes our competitive landscape",
      options: [
        "Red - Intense and coming from all directions",
        "Purple - High and increasing, but we know who they are",
        "Orange - There's competition, but we know exactly how to win",
        "White - There's no competition",
        "Gray - We haven't done a competitor analysis",
      ],
    },
    {
      add_more: false,
      number: "31",
      qstn: "This best describes how our stakeholders view us",
      qstns: [
        {
          qstn: "Customer",
          options: [
            "Essential",
            "Important",
            "Useful",
            "Ambivalent",
            "Harmful",
          ],
        },
        {
          qstn: "Employees",
          options: [
            "Essential",
            "Important",
            "Useful",
            "Ambivalent",
            "Harmful",
          ],
        },
        {
          qstn: "Partners",
          options: [
            "Essential",
            "Important",
            "Useful",
            "Ambivalent",
            "Harmful",
          ],
        },
        {
          qstn: "Community (social and regulatory)",
          options: [
            "Essential",
            "Important",
            "Useful",
            "Ambivalent",
            "Harmful",
          ],
        },
      ],
    },
    {
      add_more: false,
      number: "32",
      qstn: "This best describes our market",
      options: [
        "Fragmented — There is no clear leader with more than 10% market share",
        "Consolidating — A few competitors are poised to exceed 10% market share",
        "Concentrated — There is a strong leader with over 30% market share",
        "Dominated — There is a dominant player with over 40% market share",
      ],
    },
    {
      add_more: false,
      number: "33",
      qstn: "We have social proof for our offering(s) in these forms",
      options: [
        "Awards",
        "Certifications",
        "Designations",
        "Endorsements",
        "Media Coverage",
      ],
    },
    {
      add_more: false,
      number: "34",
      qstn: "We've completed a third-party valuation of our venture in the last year",
      options: ["Yes", "No"],
    },
    {
      add_more: false,
      number: "35",
      qstn: "This is what we solve and for whom",
      qstns: [
        {
          qstn: "In order to",
          placeholder: "X - insert the problem",
        },
        {
          qstn: "We",
          placeholder: "Y - how do you solve the need",
        },
        {
          qstn: "better than anyone else for",
          placeholder: "Z - who is your target customer audience",
        },
      ],
    },
    {
      add_more: false,
      number: "36",
      qstn: "This best describes our purpose",
      options: [
        "Grow a sustainable business is built to last",
        "Grow a business that provides a clear social benefit",
        "Grow a business that is a great place to work",
      ],
    },
    {
      add_more: false,
      number: "37",
      qstn: "This is how our model works",
      qstns: [
        {
          qstn: "We offer A ",
          placeholder: "what is your product or service?",
        },
        {
          qstn: "to B",
          placeholder: "who is your target customer?",
        },
        {
          qstn: "that we produce by C",
          placeholder: "how is it built?",
        },
        {
          qstn: "and sell by D",
          placeholder: "how is it distributed?",
        },
        {
          qstn: "using E pay structure",
          placeholder: "what is the revenue model?",
        },
        {
          qstn: "resulting in F % return",
          placeholder: "what is the sales margin?",
        },
        {
          qstn: "while upholding G",
          placeholder: "(what are three important values to your firm?",
        },
      ],
    },
    {
      add_more: false,
      number: "38",
      qstn: "This is what people need to stop doing in order to start using our service",
      options: [
        "Using a competitor's product",
        "Being loyal to a current supplier",
        "Following a majority trend",
        "Utilizing integrated support systems",
        "Continuing current service agreements or subscriptions",
        "Believing that there's not a better solution",
        "Supporting certain cultural or social norms",
      ],
    },
    {
      add_more: true,
      number: "39",
      qstn: "This is what people need to stop doing in order to start using our service",
      options: [
        "Crowdfunding",
        "Equity-based venture capital",
        "Convertible Debt",
        "Revenue Royalties",
        "Loan (debt)",
        "Private Equity",
      ],
    },
    {
      add_more: false,
      number: "40",
      qstn: "This is the amount of funding we're seeking",
      options: [
        "$50k - $100k",
        "$100k - $500k",
        "$500k - $2M",
        "$2M - $5M",
        "$5M - $10M",
        "$10M-$49M",
        "$50M+",
      ],
    },
    {
      add_more: false,
      number: "41",
      qstns: [
        {
          qstn: "What do you do?",
          placeholder: "In 1-2 sentences describe what your business does",
        },
        {
          qstn: "What challenges do your customers face?",
          placeholder:
            "In 1-2 sentences describe what challenge your business solves",
        },
        {
          qstn: "How do you distinguish yourself?",
          placeholder:
            "In 1-2 sentences highlight how your business is distinct from others",
        },
      ],
    },
  ],
};

export const AppSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    setAssessmentProgress: (state, action) => {
      if (state.assessmentProgress < 100) {
        state.assessmentProgress = action.payload;
      }
    },
    setFoundersAssessmentStarted: (state, action) => {
      state.foundersAssessmentStarted = action.payload;
    },
  },
});

export const { setAssessmentProgress, setFoundersAssessmentStarted } =
  AppSlice.actions;
export default AppSlice.reducer;
