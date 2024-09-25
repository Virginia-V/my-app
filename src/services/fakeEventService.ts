import TrainingImage from "../images/training.jpg";

export const eventTypes = {
  VOLUNTEERING: "volunteering",
  COMPETITION: "competition",
  TRAINING: "training",
  ERASMUS: "erasmus",
  EVENT: "event",
  GRANT: "grant",
  WORKSHOP: "workshop",
  CONFERENCE: "conference",
  SEMINAR: "seminar",
  WEBINAR: "webinar",
  MEETING: "meeting",
  NETWORKING: "networking",
};

export const events = [
  {
    _id: "s52GxGk8hkezhuG5VLqZUg==",
    type: eventTypes.TRAINING,
    name: "Supporting Volunteer's Mental Health through Mentoring",
    date: "24-29 November 2024",
    location: "Maintenon, France",
    image: TrainingImage,
    description:
      "Supporting Volunteers’ Mental Health through Mentoring training focuses on supporting organisations and their mentors to better address the mental health needs of volunteers by strengthening their emotional and mental health skills. Moreover, this training prepares the participants to recognise the support needed in different phases of volunteering project life cycle.",

    activity: [
      "Equip volunteers with coping mechanisms to build up resilience",
      "Create a supportive environment where open communication about mental health is encouraged",
      "Recognise potential signs of mental health difficulties in volunteers",
      "Prepare your organisation for potential challenges that volunteers may face",
    ],
    link: "http://trainings.salto-youth.net/12542",
  },
];
