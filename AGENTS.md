# AGENTS.md

## Build/Lint/Test Commands

- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Test**: `npm test`
- **Run a Single Test**: `npm test -- <test-file-path>:<test-case-name>`

## Code Style Guidelines

### Imports

- Import statements should be grouped and sorted alphabetically.
- Use named imports for specific functions or variables instead of default imports where possible.

### Formatting

- Follow the Prettier formatting rules.
- Run `npm run format` to format your code.

### Types

- Use TypeScript for type safety.
- Define interfaces and types for complex data structures.

### Naming Conventions

- Use camelCase for variable and function names.
- Use PascalCase for class names.
- Use kebab-case for file names.

## Next.js Best Practices

- **Routing**: Follow the `app` directory structure to define routes. For example, create a new page at `/src/app/about/page.tsx` to handle requests to `/about`.
- **API Routes**: Create API routes in the `api` folder. For example, create an endpoint for user authentication at `/src/api/auth/[...].ts`
- **Layouts and Components**: Use components from the `components` directory. Ensure they are reusable and follow naming conventions (e.g., `Button.tsx`, `Card.tsx`).

## TypeScript Best Practices

- **Interfaces/Types**: Define interfaces or types for props, state, and other complex data structures.
- **Type Assertions**: Use type assertions when you need to override the inferred type. For example: `(someValue as string).length`.
- **Optional Properties**: Mark properties as optional with a question mark (`?`).

## Tailwind Best Practices

- **Utilities First Approach**: Write your styles using utility classes provided by Tailwind CSS.
- **Responsive Design**: Use responsive prefixes (e.g., `sm:`, `md:`, `lg:`) to apply different styles at various breakpoints.
- **Custom Styles**: Define custom styles in the `tailwind.config.js` file and use them throughout your project.

## Error Handling Best Practices

- **Catch Errors**: Use try-catch blocks to handle errors gracefully. For example:
  ```typescript
  try {
    // Code that may throw an error
  } catch (error) {
    console.error("An error occurred:", error);
  }
  ```

````
- **Log Errors**: Log descriptive messages for better debugging.
- **Re-throw Errors**: Re-throw errors if they cannot be handled locally. For example:
  ```typescript
try {
  // Code that may throw an error
} catch (error) {
  console.error('An error occurred:', error);
  throw new Error('Failed to process request');
}
````
## Rules
- Always use Context7 MCP when I need library/API documentation, code generation, setup or configuration steps without me having to explicitly ask.
- When you need to search docs, use `context7` tools.