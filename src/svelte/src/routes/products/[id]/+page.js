// Enable prerendering for this dynamic route
export const prerender = true;

// Define the entries for prerendering
export async function entries() {
  // Return the product IDs that should be prerendered
  // These should match the product IDs used in your data
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
    { id: '10' },
    { id: '11' },
    { id: '12' }
  ];
}
