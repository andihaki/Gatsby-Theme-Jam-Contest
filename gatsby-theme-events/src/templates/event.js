import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Event from "../components/event";

// eq = equal
export const query = graphql`
  query($eventID: String!) {
    event(id: { eq: $eventID }) {
      name
      url
      startDate(formatString: "MMMM D, YYYY")
      endDate(formatString: "MMMM D, YYYY")
      location
      slug
    }
  }
`;

// data injected from graphql query
const EventTemplate = ({ data: { event } }) => (
  <Layout>
    <Event {...event} />
  </Layout>
);

export default EventTemplate;
