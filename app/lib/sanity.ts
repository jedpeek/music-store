import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
export const client = createClient({
  projectId: "56yvvnl1",
  dataset: "production",
  apiVersion: "2024-03-14",
  useCdn: false, //updated to true for deployment
});

const builder = imageUrlBuilder(client);
export function urlFor(source: any) {
  return builder.image(source);
}
