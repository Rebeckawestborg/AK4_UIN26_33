import {createClient} from '@sanity/client'

const client = createClient ({
    projectId: "t7rg60la",
    dataset: "production",
    useCdn: true,
    apiVersion: "2026-04-17"
})

export default client