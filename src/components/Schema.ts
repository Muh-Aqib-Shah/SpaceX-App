import { gql } from "@apollo/client";

let typeDefs = gql`
query{
    launches{
      launch_date_local
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
      details
      links {
        flickr_images
        article_link 
      }
    }
  }` 
export default typeDefs;