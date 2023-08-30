import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "@/sanity/schemas"; 

const config = defineConfig({
    projectId: "swsi0s2j",
    dataset: "production",
    title: "A Website",
    apiVersion: "2023-08-28",
    basePath: "/studio",
    plugins: [deskTool()],
    schema: { types: schemas },
});

export default config;