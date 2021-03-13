export const GET_ALL_POST = `*[_type=="post"]{
    title,
    slug,
    mainImage{
        asset->{
            _id,
            url
        },
        alt
    }
}`

export const GET_ALL_PROJECT = `*[_type=="project"]{
    title,
    date,
    place,
    description,
    projectType,
    link,
    tags
}`

export const GET_SPECIFIC_POST = `*[slug.current == ":slug"]{
    title,
    _id,
    slug,
    mainImage{
        asset->{
            _id,
            url
        }
    },
    body,
    "name": author->name,
    "authorImage": author->image
}`

export const GET_AUTHOR_DETAILS = `*[_type == "author"]{
    name,
    bio,
    "authorImage": image.asset->url
}`