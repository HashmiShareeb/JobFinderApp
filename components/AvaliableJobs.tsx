import { Heading, ScrollView, VStack, Image } from "native-base";
import react from "react";
import { View, Text, TouchableOpacity } from "react-native";
import jobcards from "../styles/jobcards";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const jobsData = [
    {
      id: 1,
      title: "Software Engineer",
      description:
        "We are seeking a skilled Software Engineer to join our development team...",
      company_name: "Apple Inc.",
      location: "Cupertino, CA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1920px-Apple_logo_black.svg.png",
      applicationRequirements: [
        "Bachelor's degree in Computer Science or related field",
        "Strong proficiency in JavaScript and modern frameworks",
        "Experience with Agile development methodologies",
      ],
    },
    {
      id: 2,
      title: "Frontend Developer",
      description:
        "Join our dynamic frontend development team and build amazing user interfaces...",
      company_name: "Google LLC",
      location: "Mountain View, CA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png",
      applicationRequirements: [
        "Proficiency in HTML, CSS, and JavaScript",
        "Experience with React and state management libraries",
        "Understanding of responsive web design principles",
      ],
    },
    {
      id: 3,
      title: "Data Scientist",
      description:
        "We are looking for a talented Data Scientist to analyze and interpret complex data...",
      company_name: "Microsoft Corporation",
      location: "Redmond, WA",
      logo: "",
      applicationRequirements: [
        "Master's or Ph.D. degree in Data Science or related field",
        "Proficiency in statistical analysis and machine learning techniques",
        "Experience with Python and data manipulation libraries",
      ],
    },
    {
      id: 4,
      title: "UX Designer",
      description:
        "Join our design team and create delightful user experiences...",
      company_name: "Adobe Inc.",
      location: "San Jose, CA",
      logo: "https://example.com/adobe-logo.png",
      applicationRequirements: [
        "Strong portfolio showcasing UX design work",
        "Proficiency in design software such as Sketch or Figma",
        "Understanding of user-centered design principles",
      ],
    },
    {
      id: 5,
      title: "Product Manager",
      description:
        "We are seeking an experienced Product Manager to drive product strategy...",
      company_name: "Amazon.com, Inc.",
      location: "Seattle, WA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg.png",
      applicationRequirements: [
        "Proven track record of successfully launching products",
        "Strong analytical and problem-solving skills",
        "Experience with Agile development methodologies",
      ],
    },
    {
      id: 6,
      title: "Backend Developer",
      description:
        "Join our backend engineering team and build scalable server applications...",
      company_name: "Netflix, Inc.",
      location: "Los Gatos, CA",
      logo: "",
      applicationRequirements: [
        "Proficiency in server-side programming languages (e.g., Java, Python)",
        "Experience with distributed systems and microservices architecture",
        "Understanding of cloud computing platforms (e.g., AWS, GCP)",
      ],
    },
    {
      id: 7,
      title: "Data Analyst",
      description:
        "We are looking for a detail-oriented Data Analyst to extract insights from data...",
      company_name: "Facebook, Inc.",
      location: "Menlo Park, CA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png",
      applicationRequirements: [
        "Strong SQL skills and experience with data querying",
        "Proficiency in data visualization tools (e.g., Tableau, Power BI)",
        "Ability to analyze and interpret complex data sets",
      ],
    },
    {
      id: 8,
      title: "Mobile App Developer",
      description:
        "Join our mobile app development team and create innovative mobile applications...",
      company_name: "Uber Technologies, Inc.",
      location: "San Francisco, CA",
      logo: "https://example.com/uber-logo.png",
      applicationRequirements: [
        "Proficiency in mobile app development frameworks (e.g., React Native, Flutter)",
        "Experience with iOS or Android app development",
        "Understanding of mobile UI/UX principles",
      ],
    },
    {
      id: 9,
      title: "DevOps Engineer",
      description:
        "We are seeking a skilled DevOps Engineer to streamline our software development processes...",
      company_name: "Spotify AB",
      location: "Stockholm, Sweden",
      logo: "https://example.com/spotify-logo.png",
      applicationRequirements: [
        "Experience with CI/CD pipelines and deployment automation",
        "Proficiency in cloud platforms (e.g., AWS, Azure)",
        "Strong understanding of containerization (e.g., Docker, Kubernetes)",
      ],
    },
    {
      id: 10,
      title: "AI Research Scientist",
      description:
        "Join our AI research team and contribute to cutting-edge machine learning algorithms...",
      company_name: "IBM Corporation",
      location: "New York, NY",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      applicationRequirements: [
        "Ph.D. degree in Computer Science or related field",
        "Expertise in machine learning, deep learning, and statistical modeling",
        "Strong programming skills in languages like Python or R",
      ],
    },
    // Add more job objects here
  ];
  const navigation = useNavigation();
  const randomizedJobs = jobsData.sort(() => Math.random() - 0.5);

  return (
    <View>
      <Heading
        flexDirection={"row"}
        color={"dark.200"}
        fontWeight={"bold"}
        fontSize={"md"}
      >
        Available Jobs
      </Heading>
      <VStack>
        <ScrollView>
          {randomizedJobs.map((job) => (
            <TouchableOpacity
              style={jobcards.containerAvailable}
              key={job.id}
              onPress={() => navigation.navigate("Details", { job })}
            >
              {/* <Image
                source={{ uri: job.logo }} // Assuming "logo" property contains the image URI
                alt={job.title} // Alt text for the image
                resizeMode="contain"
                mt={8}
                width={50}
                height={50}
              /> */}

              <Heading color={"dark.100"} fontWeight={"medium"} fontSize={"md"}>
                {job.title}
              </Heading>
              <Text numberOfLines={1}>{job.location}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </VStack>
    </View>
  );
};
