# Notes

Hosted on Netlify: <https://hopeful-wiles-c7f7f6.netlify.app/>
I only used the bootstrap package and html. For a larger project with components reusability, 
i'll work with a component library like Storybook and a static site generator like Astro to build all the templates.

## Command line
- to install bootstrap and the dependencies, use the command `npm install`
- to build the main css file, use the command `npm run css`

## Suggested enhancements list
### Design
- reducing the leading of the headers, actually at 1.4, easier to read at 1.1
- changing the hover/active/focus effect on the buttons; `btn-white` will be more attractive with a bg-dark and text-white on hover that a simple darker 10%
- adding animations on the different sections but it have to be challenged with the team (components appearance, for example)
- css print is not done and have to be defined too
### SEO
- a review must be done to enhance the keywords/tags (headings, paragraph, etc.)
### Accessibility
- w3c validator found an error on an unclosed paragraph (line 236) but i didn't notice any error on source code
- insufficient contrast between the primary and white colors
### Performance
- i didn't made any optimisation for the images (srcset and responsive img); i don't know if with have automated solutions with your cms about it and there's not information about it in your specifications
- svg source code can be compressed
- the bootstrap components (both css & js) can also be removed if not used in all the theme

