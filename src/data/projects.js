import img from "../assets/images/img4.jpeg";
import img2 from "../assets/heroimages/img2.jpeg";
import img3 from "../assets/heroimages/img3.jpeg";

const projects = [
  {
    slug: "education-for-all",
    title: "Education for All",
    category: "Education",
    image: img,
    shortDesc: "Supporting access to quality education for children and communities.",
    description: "Providing access to quality education for children in underserved communities across Afghanistan. Our programs include school supplies, teacher training, and community learning centers.",
    impact: "5,000+ students supported since 2017",
    fullDescription: "Our Education for All program works to break the cycle of poverty through learning. We establish community-based classrooms, train local teachers, provide school supplies, and run literacy campaigns for children who have never attended school. Special focus is given to girls' education, ensuring they have equal opportunities to learn and thrive.",
    stats: [
      { label: "Students Supported", value: "5,000+" },
      { label: "Teachers Trained", value: "200+" },
      { label: "Schools Supported", value: "25+" },
      { label: "Provinces", value: "4" },
    ],
    objectives: [
      "Increase access to primary and secondary education for out-of-school children",
      "Improve quality of teaching through professional development programs",
      "Provide learning materials and infrastructure support to community schools",
      "Promote girls' education and reduce gender disparities in enrollment",
    ],
  },
  {
    slug: "womens-health-initiative",
    title: "Women's Health Initiative",
    category: "Health",
    image: img2,
    shortDesc: "Improving access to essential healthcare for vulnerable populations.",
    description: "Improving maternal and reproductive health outcomes through mobile health clinics, awareness campaigns, and training for community health workers in remote areas.",
    impact: "12,000+ women reached with health services",
    fullDescription: "The Women's Health Initiative delivers essential healthcare services to women in remote and underserved areas of Afghanistan. Through mobile health clinics, community health worker training, and awareness campaigns, we address maternal mortality, reproductive health, and nutrition. Our approach combines direct service delivery with community education to create lasting health improvements.",
    stats: [
      { label: "Women Reached", value: "12,000+" },
      { label: "Mobile Clinics", value: "40+" },
      { label: "Health Workers Trained", value: "150+" },
      { label: "Villages Reached", value: "60+" },
    ],
    objectives: [
      "Reduce maternal and infant mortality in target communities",
      "Increase access to reproductive health services and family planning",
      "Train and deploy community health workers in remote areas",
      "Raise awareness about nutrition, hygiene, and disease prevention",
    ],
  },
  {
    slug: "economic-empowerment",
    title: "Economic Empowerment Program",
    category: "Livelihood",
    image: img3,
    shortDesc: "Supporting livelihoods and skills development for women.",
    description: "Empowering women through vocational training, small business grants, and financial literacy programs. Helping women build sustainable incomes and achieve economic independence.",
    impact: "800+ women trained in marketable skills",
    fullDescription: "Our Economic Empowerment Program equips women with the skills, knowledge, and resources they need to build sustainable livelihoods. Participants receive vocational training in fields such as tailoring, handicrafts, food processing, and small business management. Graduates receive startup kits and ongoing mentorship to launch their own enterprises, creating a ripple effect of economic independence within their families and communities.",
    stats: [
      { label: "Women Trained", value: "800+" },
      { label: "Businesses Started", value: "300+" },
      { label: "Vocational Courses", value: "6" },
      { label: "Avg. Income Increase", value: "60%" },
    ],
    objectives: [
      "Provide market-relevant vocational skills training to women",
      "Facilitate access to small grants and startup capital",
      "Offer financial literacy and business management training",
      "Create peer support networks for women entrepreneurs",
    ],
  },
  {
    slug: "emergency-relief",
    title: "Emergency Relief & Response",
    category: "Humanitarian",
    image: img,
    shortDesc: "Delivering life-saving assistance to families in crisis.",
    description: "Delivering life-saving assistance including food, clean water, and shelter to families affected by conflict, natural disasters, and displacement across Afghanistan.",
    impact: "20,000+ people reached with emergency aid",
    fullDescription: "In times of crisis, PWSO's Emergency Relief & Response team mobilizes quickly to deliver life-saving assistance. We distribute food packages, clean water, hygiene kits, and shelter materials to families displaced by conflict or affected by natural disasters. Our emergency response is coordinated with UN agencies and local partners to ensure aid reaches the most vulnerable populations efficiently and equitably.",
    stats: [
      { label: "People Reached", value: "20,000+" },
      { label: "Food Distributions", value: "8,000+" },
      { label: "Hygiene Kits", value: "5,000+" },
      { label: "Emergency Responses", value: "12" },
    ],
    objectives: [
      "Provide immediate food and non-food assistance to crisis-affected families",
      "Ensure access to clean water and sanitation in emergency settings",
      "Distribute shelter materials to displaced households",
      "Coordinate with humanitarian clusters for effective response",
    ],
  },
  {
    slug: "agriculture-climate-resilience",
    title: "Agriculture & Climate Resilience",
    category: "Environment",
    image: img2,
    shortDesc: "Building food security and adapting to climate change.",
    description: "Supporting farmers with climate-smart agriculture techniques, drought-resistant seeds, and irrigation projects to build food security and adapt to changing environmental conditions.",
    impact: "2,000+ farming families supported",
    fullDescription: "Our Agriculture & Climate Resilience program helps farming communities adapt to the growing challenges of drought, water scarcity, and changing weather patterns. We introduce climate-smart agriculture techniques, provide drought-resistant seeds, and support small-scale irrigation projects. Farmers receive training on sustainable land management, crop diversification, and water conservation to improve food security and build long-term resilience.",
    stats: [
      { label: "Farming Families", value: "2,000+" },
      { label: "Irrigation Projects", value: "15" },
      { label: "Training Sessions", value: "80+" },
      { label: "Crop Yield Increase", value: "40%" },
    ],
    objectives: [
      "Promote climate-smart agriculture and sustainable farming practices",
      "Improve water management through efficient irrigation systems",
      "Strengthen food security for vulnerable rural communities",
      "Build community capacity to adapt to climate change impacts",
    ],
  },
  {
    slug: "research-meal",
    title: "Research & MEAL",
    category: "Research",
    image: img3,
    shortDesc: "Evidence-based research and program evaluation.",
    description: "Conducting evidence-based research, assessments, and evaluations to inform program design, improve effectiveness, and ensure accountability to communities and donors.",
    impact: "15+ research studies completed",
    fullDescription: "PWSO's Research, Monitoring, Evaluation, Accountability & Learning (MEAL) unit ensures that our programs are evidence-based, effective, and accountable. We conduct baseline assessments, mid-term evaluations, and end-line studies to measure impact. Our research covers topics such as gender-based violence, education access, health outcomes, and food security, providing critical data to inform both our own programming and the broader humanitarian and development sectors in Afghanistan.",
    stats: [
      { label: "Research Studies", value: "15+" },
      { label: "Assessments Completed", value: "30+" },
      { label: "Communities Surveyed", value: "100+" },
      { label: "Reports Published", value: "20+" },
    ],
    objectives: [
      "Generate evidence to inform program design and policy advocacy",
      "Monitor and evaluate program effectiveness and impact",
      "Ensure accountability to beneficiaries, donors, and partners",
      "Contribute to the humanitarian evidence base in Afghanistan",
    ],
  },
];

export default projects;

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}
